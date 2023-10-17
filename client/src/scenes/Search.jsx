import { useEffect, useState } from "react";
import {
  Box,
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

// Assuming searchResults is an array of search results
const searchResults = [
  // Your search results data here
];

export default function Search() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navbarHeight = 80;
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q");
    setSearchQuery(query || "");
  }, [location.search]);

  console.log("Search.jsx searchQuery:", searchQuery);


  return (
    <Box
      border="2px solid red"
      display="flex"
      flexDirection="column"
      alignItems="center"
      height={`calc(100vh - ${navbarHeight}px)`}
      padding="2rem">
      <Typography>Search results for "{searchQuery}"</Typography>
      {searchResults.map((result, index) => (
        // Render each search result here as Card components
        <Card key={index}>
          <CardMedia
            component="img"
            alt={result.alt}
            height="140"
            image={result.imageURL}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {result.title}
            </Typography>
          </CardContent>
          <CardActions>{/* Add actions or links here if needed */}</CardActions>
        </Card>
      ))}
    </Box>
  );
}
