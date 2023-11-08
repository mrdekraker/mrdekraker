import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
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
            publishedAt,
            "name": author->name,
            "authorImage": author->image
          }`
      )
      .then((data) => setPost(data[0]))
      .catch(console.error);
  }, [slug]);


  if (!postData) return <div>Loading...</div>;
  
  const datePublished = new Date(postData.publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  
  if(isNonMobileScreens) {
    return (
      // NONMOBILE PARENT BOX
      <Box
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
          <Box
            border={`1px solid ${theme.palette.primary.light}`}
            backgroundColor="rgba(0,0,0,0.5)"
            zIndex="1">
            <Typography
              zIndex="2"
              fontFamily="League Spartan"
              fontSize="clamp(4rem, 5rem, 6rem)"
              color={theme.palette.primary.light}
              textTransform="uppercase">
              {postData.title}
            </Typography>
          </Box>
        </Box>

        {/* DATE & AUTHOR */}
        <Box>
          <Typography>
            {datePublished} | Author: {postData.name}{" "}
          </Typography>
        </Box>

        {/* BLOG BODY */}
        <Box
          fontFamily="Libre Baskerville"
          fontSize="clamp(1rem, 1.2rem, 2rem)"
          color={theme.palette.primary.main}
          lineHeight="1"
          width="70%"
          margin="0 auto"
          padding="2rem 0">
          <Box
            color={(theme.palette.mode === "light") ? "black" : "white"}
            fontSize="clamp(0.8rem, 1rem, 2rem)"
            textAlign="left"
            border={
              theme.palette.mode === "light"
                ? "1px solid black"
                : "1px solid white"
            }
            padding="5rem"
            marginBottom="1rem"
            sx={{
              "& a": {
                color: theme.palette.neutral.main,
              },
              "& img": {
                display: "block",
                margin: "0 auto",
                maxWidth: "65%",
                height: "auto",
              },
            }}>
            <BlockContent
              blocks={postData.body}
              projectId="c8fatw9j"
              dataset="production"
            />
          </Box>
          <Box textAlign="center">
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
              Go Back
            </Button>
          </Box>
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
        sx={{
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}>
        <Box maxHeight={`calc(100vh - ${navbarHeight}px)`}>
          {/* BLOG TITLE */}
          <Box
            width="100vw"
            margin="2rem auto"
            padding="2rem"
            boxShadow={`rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`}
            textAlign="center"
            sx={{
              backgroundImage: `url(${postData.mainImage.asset.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            <Box
              border={`1px solid ${theme.palette.primary.light}`}
              backgroundColor="rgba(0,0,0,0.8)"
              zIndex="1">
              <Typography
                zIndex="2"
                fontFamily="League Spartan"
                fontSize="clamp(1.2rem, 2.5rem, 3.2rem)"
                color={theme.palette.primary.light}
                textTransform="uppercase">
                {postData.title}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* BLOG BODY */}
        <Box
          fontFamily="Libre Baskerville"
          fontSize="clamp(1rem, 1.2rem, 2rem)"
          // color={theme.palette.primary.main}
          lineHeight="1">
          <Box
            textAlign="left"
            color={(theme.palette.mode === "light") ? "black" : "white"}
            fontSize="clamp(0.8rem, 1rem, 2rem)"
          >
            <BlockContent
              blocks={postData.body}
              projectId="c8fatw9j"
              dataset="production"
            />
          </Box>
          <Box textAlign="center">
            <Button variant="contained" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
};
