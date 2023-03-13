import Navbar from "./Navbar";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Footer from "./Footer";

import LineGradient from "components/LineGradient";

const About = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" width="100vw" height="100%">
      <Navbar />

      {/* CONTENT CONTAINER */}
      <Box
        padding="2rem 3%"
        flexGrow={1}
        display="flex"
        flexDirection={isNonMobileScreens ? "row" : "column"}
        gap="0.5rem"
        justifyContent="space-between"
        sx={{
          overflowX: "hidden",
          margin: "0",
        }}>
        {/* LEFT COLUMN */}
        <Box width={isNonMobileScreens ? "50%" : "100%"}>
          <Box display="flex" flexDirection="row">
            <Box sx={{ position: "relative" }}>
              <Typography
                fontFamily="Playfair Display"
                fontWeight="600"
                fontSize="clamp(2rem, 3rem, 3.5rem)"
                color={theme.palette.mode === "dark" ? "#FFF" : "primary"}
                sx={{
                  position: "relative",
                  display: "inline-block",
                  "&:after": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "450px",
                    height: "214px",
                    // backgroundImage: `url(${brush})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transform: "translate(-45%, -55%)",
                    zIndex: "-1",
                  },
                }}>
                About&nbsp;
              </Typography>
            </Box>
            <Typography
              fontFamily="Playfair Display"
              fontWeight="600"
              fontSize="clamp(2rem, 3rem, 3.5rem)"
              color={theme.palette.mode === "dark" ? "primary" : "#DC4492"}>
              Me
            </Typography>
          </Box>
          <LineGradient width="200px" />

          {/* ABOUT ME COPY */}
          <Box margin="1rem 0">
            <Typography fontSize="clamp(.8rem, 1rem, 1.2rem)" >
              My name is Mark DeKraker (De-Cray-Ker). I am a Canadian&nbsp;
              <span
                style={{
                  fontWeight: "600",
                  color: theme.palette.mode === "dark" ? "#00205B" : "#FFF",
                  background: theme.palette.mode === "dark" ? "#fff" : "#00205B",
                }}
              >(GO LEAFS! 🇨🇦 🍁 🏒)
              </span> Full Stack Web Developer, currently living in Houston, TX. I am a husband and a father, an athlete, and musician. 
            </Typography>
              <br />
            <Typography fontSize="clamp(.8rem, 1rem, 1.2rem)">
              I have a background in education, management, customer service, and music. I really found my passion in creating beautiful, functional websites, however. I emphatically pursued my passion in web development both through Liberty University Online, and through the Rice University Coding Bootcamp, where I graduated with a 4.0gpa. While it was a challenging course, it was a very rewarding experience.
            </Typography>
              <br />
            <Typography fontSize="clamp(.8rem, 1rem, 1.2rem)">
              As a result, I am capable of creating in a full stack environment, from the front end to the back end. I am proficient in HTML, CSS, JavaScript, React, Node, Express, MongoDB, and MySQL. I am also familiar with GraphQL and Apollo.
            </Typography>
              <br />
            <Typography fontSize="clamp(.8rem, 1rem, 1.2rem)">
              I am excited to continue learning and growing as a developer, and eager to begin my career in the field. Please contact me if you have any questions, or if you would like to collaborate on a project.
            </Typography>
          </Box>
        </Box>

        {/* RIGHT COLUMN */}
        <Box border="1px solid red" width={isNonMobileScreens ? "50%" : "100%"}>
          <Typography>Right Column</Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;