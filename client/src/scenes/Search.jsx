import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import sanityClient from "../client.js";

export default function Search() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navbarHeight = 80;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Use the query parameter from the URL to set the search query
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q");
    setSearchQuery(query || "");
  }, [location.search]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Perform a query to fetch search results
        const results = await sanityClient.fetch(
          `*[_type == "post" && title match $query]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          date,
          "name": author->name,
          "authorImage": author->image
        }`,
          { query: searchQuery }
        );

        // Update search results state
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching and processing search results:", error);
      }
    };

    if (searchQuery) {
      fetchPosts();
    }
  }, [searchQuery]);

  if (!searchQuery) return <div>Loading...</div>;

  return (
    // TODO: MAKE IT PRETTY
    <Box
      border="2px solid red"
      display="flex"
      flexDirection="column"
      alignItems="center"
      height={`calc(100vh - ${navbarHeight}px)`}
      padding="2rem">
      <Typography>Search results for "{searchQuery}"</Typography>
      {searchResults.map((result, index) => (
        <Card
          key={index}
          onClick={() => navigate("/blogpost/" + result.slug.current)}>
          <CardMedia
            component="img"
            height="140"
            image={result.mainImage.asset.url}
            alt={result.mainImage.asset.alt}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {result.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => navigate("/blogpost/" + result.slug.current)}>
              Read More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
