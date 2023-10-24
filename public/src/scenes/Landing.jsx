import { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme, Typography, Paper } from "@mui/material";
import Narnia from "../assets/littleNarnia.jpg";
import SocialLinks from "../components/SocialLinks";

const Landing = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navbarHeight = 80;
  const nameplateHeight = 276.219;

  const [navbarVisible, setNavbarVisible] = useState(true);

  // Function to handle the scroll event and hide/show the navbar
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0 && navbarVisible) {
      setNavbarVisible(false);
    } else if (currentScrollPos === 0 && !navbarVisible) {
      setNavbarVisible(true);
    }
    if (currentScrollPos > navbarHeight) {
      window.scrollTo({
        top: navbarHeight,
        behavior: "smooth",
      });
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          height: `calc(100vh - ${navbarHeight}px)`,
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
              backgroundColor: "rgba(0,0,0,0.1)",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}>
            <Typography fontSize="1.8rem" fontStyle="italic">
              About
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              In 2008 I was introduced to the world of web development. Due to
              life circumstances, I set aside my web development studies, worked
              hard, got my degree in Web Development from Liberty University
              Online, and then became an elementary school teacher. Fast forward
              to 2023, I completed a full stack web development bootcamp through
              Rice University.
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              My main focus now is to find a job as a web developer, preferably
              focusing on front-end. In my free time, I spend time on side
              projects and learning new technologies.
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              When I'm not at the computer, I am with my family, cooking, or
              working out.
            </Typography>
            <Typography fontSize="1.8rem" fontStyle="italic">
              Relevant Project Experience
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              My experience is largely educational, complimented by educational and personal interests projects. I am well-versed in the MERN Full Stack, encompassing proficiency in technologies such as React, Node, Express, MongoDB, MySQL, and others. Additionally, I have a working knowledge of popular frameworks like MUI, Tailwind, and Bootstrap.
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              To view all my projects, please visit my projects page.
            </Typography>
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
          height: `calc(100vh - ${navbarVisible ? navbarHeight : 0}px)`,
        }}>
        {/* Mobile Box */}
        <Box width="100%" height="100%">
          <Box
            padding="1.5rem 0"
            backgroundColor="rgba(0,0,0,0.4)"
            // border="1px solid red"
          >
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
              maxHeight: `calc(100vh - ${
                navbarVisible ? navbarHeight : 0
              }px - ${nameplateHeight}px)`,
              overflowY: "scroll",
              backgroundColor: "rgba(0,0,0,0.8)",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
            }}>
            <Typography fontSize="1.8rem" fontStyle="italic">
              About
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              In 2008 I was introduced to the world of web development. Due to
              life circumstances, I set aside my web development studies, worked
              hard, got my degree in Web Development from Liberty University
              Online, and then became an elementary school teacher. Fast forward
              to 2023, I completed a full stack web development bootcamp through
              Rice University.
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              My main focus now is to find a job as a web developer, preferably
              focusing on front-end. In my free time, I spend time on side
              projects and learning new technologies.
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              When I'm not at the computer, I am with my family, cooking, or
              working out.
            </Typography>
            <Typography fontSize="1.8rem" fontStyle="italic">
              Relevant Project Experience
            </Typography>
            <Typography marginBottom="1rem" fontSize="0.9rem">
              My experience is largely educational and various educational
              projects. I am trained in the MERN Full Stack. I have experience
              with React, Node, Express, MongoDB, MySQL, and more. I am also
              familiar with the MUI, Tailwind, & Bootstrap frameworks.
            </Typography>
            <Typography marginBottom="3.5rem" fontSize="0.9rem">
              To view all my projects, please visit my projects page.
            </Typography>
          </Paper>
        </Box>
      </Box>
    );
  }
};

export default Landing;
