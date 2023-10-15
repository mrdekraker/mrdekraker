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
import BlockContent from "@sanity/block-content-to-react";

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
        padding="1rem"
        display="flex"
        flexDirection="column"
        textAlign="center"
        height={`calc(100vh - ${navbarHeight}px)`}
        sx={{
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}>
          {/* BLOG TITLE */}
          <Box
            width="80%"
            margin="2rem auto"
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

          {/* BLOG BODY */}
          <Box>
            <Typography
              fontFamily="Libre Baskerville"
              fontSize="clamp(1rem, 1.8rem, 2rem)"
              color={theme.palette.primary.main}
              lineHeight="1"
              margin="0 auto"
              width="80%"
              padding="2rem 0"
              textAlign="left"
              sx={{
                textDecoration: "none",
              }}
            >
              <BlockContent
                blocks={postData.body}
                projectId="c8fatw9j"
                dataset="production"
              />
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
    );
  } else {
    return (
      // MOBILE PARENT BOX
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="2rem"
        overflowY="scroll">
        <Box
          maxHeight={`calc(100vh - ${navbarHeight}px)`}
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
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center">
          <Typography
            fontFamily="Libre Baskerville"
            fontSize="clamp(1rem, 1.2rem, 2rem)"
            color={theme.palette.primary.main}
            lineHeight="1"
            width="100%"
            padding="2rem 0">
            <BlockContent
              blocks={postData.body}
              projectId="c8fatw9j"
              dataset="production"
            />
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
    );
  }
};
