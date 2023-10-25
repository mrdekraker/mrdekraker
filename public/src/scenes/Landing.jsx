import React, { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme, Typography, Paper } from "@mui/material";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

import Narnia from "../assets/littleNarnia.jpg";
import SocialLinks from "../components/SocialLinks";

const Landing = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navbarHeight = "80px";
  const nameplateHeight = "276.219px";

  const [postCopy, setPostCopy] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "landingCopy"]{
          title,
          body,
        }`
      )
      .then((data) => {
        setPostCopy(data);
      })
      .catch(console.error);
  }, []);

  if (isNonMobileScreens) {
    // NONMOBILE PARENT BOX
    return (
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
        sx={{
          backgroundImage: `url(${Narnia})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: `calc(100vh - ${navbarHeight})`,
          zIndex: -11,
        }}>
        {/* LEFT BOX */}
        <Box
          width="50%"
          backgroundColor="rgba(0,0,0,0.4)"
          padding="10rem 3.5rem"
          height="100%">
          <Box padding="1rem" textAlign="center">
            <Typography
              fontFamily="League Spartan"
              fontSize="clamp(3rem, 4rem, 5rem)"
              style={{ opacity: 0.5 }}
              lineHeight={1}
              color={theme.palette.primary.light}
              textAlign="right">
              Mark R
            </Typography>
            <Typography
              fontFamily="League Spartan"
              fontSize="clamp(5rem, 7rem, 15rem)"
              lineHeight="1"
              color={theme.palette.primary.main}
              position="relative"
              textAlign="right">
              DeKraker
            </Typography>
            <Typography
              fontStyle="italic"
              fontSize="clamp(0.8rem, 0.9rem, 1.5rem)"
              lineHeight="1"
              color={theme.palette.primary.light}
              position="relative"
              textAlign="right">
              Worshipper | Husband | Father | Full Stack Developer | Musician |
              Athlete
            </Typography>
            <Typography
              color={theme.palette.primary.light}
              fontStyle="italic"
              fontSize="clamp(0.8rem, 1rem, 1.5rem)"
              display="flex"
              marginTop="20rem"
              justifyContent="right">
              Find Me Here:{" "}
            </Typography>
            <Box
              color={theme.palette.primary.light}
              width="25%"
              marginLeft="auto">
              <SocialLinks
                sx={{
                  "a:hover": {
                    textDecoration: "underline",
                    color: theme.palette.primary.dark,
                  },
                  color: theme.palette.primary.light,
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* RIGHT BOX */}
        <Box
          width="50%"
          backgroundColor="rgba(0,0,0,0.4)"
          padding="10rem 3.5rem"
          height="100%">
          <Paper
            elevation={12}
            sx={{
              padding: "1rem",
              color: theme.palette.primary.light,
              maxHeight: "calc(100vh - 80px - 20rem)",
              overflowY: "scroll",
              backgroundColor: "rgba(0,0,0,0.4)",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}>
            {postCopy && postCopy[0].body && (
              <BlockContent
                blocks={postCopy[0].body}
                projectId="c8fatw9j"
                dataset="production"
              />
            )}
          </Paper>
        </Box>
      </Box>
    );
  } else {
    // MOBILE PARENT BOX
    return (
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundImage: `url(${Narnia})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Mobile Box */}
        <Box width="100%" height="100%">
          <Box padding="1.5rem 0" backgroundColor="rgba(0,0,0,0.4)">
            <Typography
              fontFamily="League Spartan"
              fontSize="clamp(2rem, 3rem, 4rem)"
              style={{ opacity: 0.5 }}
              lineHeight={1}
              color={theme.palette.primary.light}
              textAlign="center">
              Mark R
            </Typography>
            <Typography
              fontFamily="League Spartan"
              fontSize="clamp(4rem, 5rem, 6rem)"
              style={{ opacity: 1 }}
              lineHeight="1"
              color={theme.palette.primary.dark}
              position="relative"
              textAlign="center">
              DeKraker
            </Typography>
            <Typography
              fontStyle="italic"
              fontSize="clamp(0.8rem, 0.9rem, 1.5rem)"
              lineHeight="1.5"
              // marginBottom="0.5rem"
              color={theme.palette.primary.light}
              position="relative"
              textAlign="center">
              Worshipper | Husband | Father | Full Stack Developer | Musician |
              Athlete
            </Typography>
            <Typography
              color={theme.palette.primary.light}
              fontStyle="italic"
              fontSize="clamp(0.8rem, 1rem, 1.5rem)"
              display="flex"
              marginTop="2rem"
              justifyContent="center">
              Find Me Here:{" "}
            </Typography>
            <Box padding="1rem" color={theme.palette.primary.light}>
              <SocialLinks
                sx={{
                  "a:hover": {
                    textDecoration: "underline",
                    color: theme.palette.primary.dark,
                  },
                  color: theme.palette.primary.light,
                }}
              />
            </Box>
          </Box>

          <Paper
            square
            elevation={12}
            sx={{
              padding: "1rem",
              color: theme.palette.primary.light,
              maxHeight: `calc(100vh - ${navbarHeight} - ${nameplateHeight})`,
              overflowY: "scroll",
              backgroundColor: "rgba(0,0,0,0.8)",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}>
            {postCopy && postCopy[0].body && (
              <BlockContent
                blocks={postCopy[0].body}
                projectId="c8fatw9j"
                dataset="production"
              />
            )}
          </Paper>
        </Box>
      </Box>
    );
  }
};

export default Landing;
