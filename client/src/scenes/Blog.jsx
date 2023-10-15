import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, useMediaQuery, useTheme, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


import sanityClient from "../client.js";
import React, { useState, useEffect } from "react";

export default function Blog() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navbarHeight = 80;


  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset-> {
            _id,
            url
          },
          alt
        },
        snippet,
      }`
      )
      .then((data) => {
        setPost(data)
        console.log(data)
      })
      .catch(console.error);
  }, []);

  if (isNonMobileScreens) {
    // NONMOBILE PARENT BOX
    return (
      <Box
        display="flex"
        flexDirection="column"
        // justifyContent="center"
        alignItems="center"
        height={`calc(100vh - ${navbarHeight}px)`}
        padding="2rem">
        <Typography
          fontFamily="League Spartan"
          fontSize="clamp(4rem, 5rem, 6rem)"
          color={theme.palette.primary.main}
          textTransform="uppercase">
          Mark R DeKraker
        </Typography>
        <Typography
          fontFamily="Libre Baskerville"
          fontSize="clamp(2rem, 3rem, 4rem)"
          color={theme.palette.primary.main}>
          Tech & Lifestyle Blog
        </Typography>

        {/* GRID FOR BLOG POSTS */}
        <Grid
          container
          spacing={2}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {postData &&
            postData.map((post, index) => (
              <Grid
                item xs={3}
                key={post.slug.current}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                  }}
                  onClick={() => navigate("/post/" + post.slug.current)}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    key={index}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.snippet}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => navigate("/blog")}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    );
  } else {
    // MOBILE PARENT BOX
    return (
      <Box
        display="flex"
        flexDirection="column"
        // justifyContent="center"
        alignItems="center"
        height={`calc(100vh - ${navbarHeight}px)`}
        padding="2rem"
        textAlign="center">
        <Typography
          fontFamily="League Spartan"
          fontSize="clamp(2rem, 3.5rem, 4rem)"
          color={theme.palette.primary.main}
          textTransform="uppercase"
          lineHeight="1">
          Mark R DeKraker
        </Typography>
        <Typography
          fontFamily="Libre Baskerville"
          fontSize="clamp(1rem, 2rem, 3rem)"
          color={theme.palette.primary.main}>
          Tech & Lifestyle Blog
        </Typography>

        {/* GRID FOR BLOG POSTS */}
        <Grid container spacing={2}>
          {postData &&
            postData.map((post, index) => (
              <Grid item xs={12} key={post.slug.current}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                  }}
                  onClick={() => navigate("/post/" + post.slug.current)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    key={index}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.snippet}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => navigate("/blog")}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    );
  }
}