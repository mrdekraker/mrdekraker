import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, useMediaQuery, useTheme, Typography } from "@mui/material";

import sanityClient from "../client.js";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navbarHeight = 80;

  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          author,
          image{
            asset->{
              _id,
              url
            },
            alt
          },
          description,
          projectType,
          url,
          giturl,
          tags,
          relatedPost->{
            title,
            slug{
              current
            },
          }
        }`
      )
      .then((data) => {
        setProject(data);
      })
      .catch(console.error);
  }, []);



  if (isNonMobileScreens) {
    return (
      // NONMOBILE PARENT BOX
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height={`calc(100vh - ${navbarHeight}px)`}
        padding="2rem">
        {/* HEADER & SUBTITLE */}
        <Typography
          fontFamily="League Spartan"
          fontSize="clamp(4rem, 5rem, 6rem)"
          color={theme.palette.primary.main}
          textTransform="uppercase">
          Portfolio
        </Typography>
        <Typography
          fontFamily="Libre Baskerville"
          fontSize="clamp(2rem, 3rem, 4rem)"
          color={theme.palette.primary.main}>
          M. DeKraker Collection of Projects
        </Typography>

        {/* PROJECTS GRID */}
        <Grid
          container
          spacing={2}
          rowSpacing={1}
          justifyContent="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {projectData &&
            projectData.map((project) => (
              <Grid item xs={3} key={project.image.asset._id}>
                <Card
                  sx={{
                    // maxWidth: 345,
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                  }}
                  key={project.id}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image.asset.url}
                    alt={project.image.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontStyle="italic"
                      marginBottom="0.5rem">
                      Project Type: {project.projectType}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() =>
                        window.open(
                          project.url,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }>
                      Deployed
                    </Button>
                    <Button
                      onClick={() =>
                        window.open(
                          project.giturl,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }>
                      Github
                    </Button>
                    <Button
                      onClick={() => {
                        if (project.relatedPost && project.relatedPost.slug) {
                          navigate(
                            `/blogpost/${project.relatedPost.slug.current}`
                          );
                        } else {
                          console.error("Related Post or slug is missing.");
                        }
                      }}>
                      Blog Post
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    );
  } else {
    return (
      // MOBILE PARENT BOX
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={`calc(100vh - ${navbarHeight}px)`}
        padding="2rem"
        textAlign="center"
        sx={{
          "@media (max-width: 600px)": {
            justifyContent: "flex-start",
          },
        }}>
        <Typography
          fontFamily="League Spartan"
          fontSize="clamp(2rem, 3.5rem, 4rem)"
          color={theme.palette.primary.main}
          textTransform="uppercase"
          lineHeight="1">
          Portfolio
        </Typography>
        <Typography
          fontFamily="Libre Baskerville"
          fontSize="clamp(1rem, 2rem, 3rem)"
          color={theme.palette.primary.main}>
          M. DeKraker Collection of Projects
        </Typography>

        {/* GRID FOR PROJECTS */}
        <Grid container spacing={2}>
          {projectData &&
            projectData.map((project) => (
              <Grid
                item
                xs={12}
                key={project.image.asset._id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Card
                  sx={{
                    // maxWidth: 345,
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                  }}
                  key={project.id}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image.asset.url}
                    alt={project.image.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontStyle="italic"
                      marginBottom="0.5rem">
                      Project Type: {project.projectType}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() =>
                        window.open(
                          project.url,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }>
                      Deployed
                    </Button>
                    <Button
                      onClick={() =>
                        window.open(
                          project.giturl,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }>
                      Github
                    </Button>
                    <Button
                      onClick={() => {
                        if (project.relatedPost && project.relatedPost.slug) {
                          navigate(
                            `/blogpost/${project.relatedPost.slug.current}`
                          );
                        } else {
                          console.error("Related Post or slug is missing.");
                        }
                      }}>
                      Blog Post
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
