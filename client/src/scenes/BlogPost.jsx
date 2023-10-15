import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  // Card,
  // CardActions,
  // CardContent,
  // CardMedia,
  // Grid,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import sanityClient from "../client.js";

export default function Blog() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navbarHeight = 80;

  const [postData, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
            "name": author->name,
            "authorImage": author->image
          }`
      )
      .then((data) => setPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  if(isNonMobileScreens) {
    return (
      // NONMOBILE PARENT BOX
      <Box
        // border="2px solid red"
        display="flex"
        flexDirection="column"
        // justifyContent="center"
        textAlign="center"
        height={`calc(100vh - ${navbarHeight}px)`}
        // paddingTop="2rem"
        sx={{
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}>
        <Box
          maxHeight={`calc(100vh - ${navbarHeight}px)`}
          margin="0 auto"
          // border="2px solid green"
          // width="65%"
        >
          {/* BLOG TITLE */}
          <Box
            margin="2rem 0"
            padding="2rem"
            boxShadow={`rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`}
            sx={{
              backgroundImage: `url(${postData.mainImage.asset.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            <Typography
              fontFamily="League Spartan"
              fontSize="clamp(4rem, 5rem, 6rem)"
              color={theme.palette.primary.main}
              textTransform="uppercase">
              {postData.title}
            </Typography>
          </Box>

          {/* IMAGE */}
          <Box
            border="2px solid red"
            // height="50%"
          >
            {/* <img
              src={postData.mainImage.asset.url}
              alt={postData.title}
              // width="100%"
              height="25%"
            /> */}
            <Typography
              fontFamily="Libre Baskerville"
              fontSize="clamp(1rem, 2rem, 3rem)"
              color={theme.palette.primary.main}
              lineHeight="1"
              width="100%"
              padding="2rem 0"
            >
              {postData.body[0].children[0].text}
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate(-1)}
              sx={{
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.light,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
              }}>
              Back to Blog
            </Button>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <Typography> This is the blog post on mobile</Typography>
      </Box>
    )
  }
};
