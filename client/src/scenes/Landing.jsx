import { Box, useMediaQuery, useTheme, Typography, Paper } from "@mui/material";
import Narnia from "../assets/littleNarnia.jpg";
import SocialLinks from "../components/socialLinks";

const Landing = () => {
  const theme = useTheme();

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navbarHeight = 80;

  return (
    // PARENT BOX
    <Box
      display="flex"
      justifyContent="center"
      flexDirection={isNonMobileScreens ? "row" : "column"}
      alignItems="center"
      sx={{
        backgroundImage: `url(${Narnia})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${navbarHeight}px)`,
      }}>
      {/* LEFT BOX */}
      <Box
        // width="50%"
        width={isNonMobileScreens ? "50%" : "100%"}
        backgroundColor="rgba(0,0,0,0.5)"
        padding={isNonMobileScreens ? "10rem 3.5rem" : "0"}
        height="100%"
        // margin="1rem"
        textAlign={isNonMobileScreens ? "" : "center"}>
        <Box padding="1rem" textAlign={isNonMobileScreens ? "" : "center"}>
          <Typography
            fontFamily="League Spartan"
            fontSize={
              isNonMobileScreens
                ? "clamp(3rem, 4rem, 5rem)"
                : "clamp(2rem, 3rem, 4rem)"
            }
            style={
              isNonMobileScreens
                ? { opacity: 0.5, zIndex: 4 }
                : { opacity: 0.5 }
            }
            lineHeight={isNonMobileScreens ? "1" : "1.5"}
            color={theme.palette.primary.light}>
            Mark R
          </Typography>
          <Typography
            fontFamily="League Spartan"
            fontSize={
              isNonMobileScreens
                ? "clamp(5rem, 7rem, 15rem)"
                : "clamp(2rem, 5rem, 7rem)"
            }
            lineHeight="1"
            // color="#C6F6D5"
            color={theme.palette.primary.main}
            sx={
              isNonMobileScreens
                ? { position: "relative", top: "-1rem", left: "0rem" }
                : { position: "relative", top: "-1.5rem", left: "0rem" }
            }>
            DeKraker
          </Typography>
          <Typography
            fontWeight="mainer"
            fontStyle="italic"
            color={theme.palette.primary.light}
            fontSize="1rem"
            style={
              isNonMobileScreens
                ? { Top: "1rem" }
                : { Top: "0", position: "flex", top: "" }
            }>
            Worshipper | Husband | Father | Full Stack Developer | Musician |
            Athlete
          </Typography>
          <Typography
            color={theme.palette.primary.light}
            fontStyle="italic"
            fontSize="1rem"
            display="flex"
            marginTop="20rem"
            style={
              isNonMobileScreens
                ? {}
                : { justifyContent: "center", marginTop: "2rem" }
            }>
            Find Me Here: <SocialLinks color={theme.palette.primary.main} />
          </Typography>
        </Box>
      </Box>

      {/* RIGHT BOX */}
      <Box
        width={isNonMobileScreens ? "50%" : "100%"}
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        padding="1rem"
        backgroundColor="rgba(0,0,0,0.5)"
        border="1px solid white"
        // width="50%"
        // border="2px solid purple"
        // height="100%"
        // textAlign={isNonMobileScreens ? "" : "center"}
        // overflowY="scroll"
      >
        <Box
          // border="1px solid white"
          padding="1rem"
          // backgroundColor="rgba(0,0,0,0.5)"
          color={theme.palette.primary.light}
          textAlign={isNonMobileScreens ? "" : "center"}
          // overflowY="hidden"
        >
          <Paper
            elevation={3}
            sx={{
              color: theme.palette.primary.light,
              maxHeight: "400px",
              overflowY: "scroll",
              backgroundColor: "rgba(0,0,0,0.5)"
            }}>
            <Typography>About</Typography>
            <p>
              In 2008 I was introduced to the world of web development. Due to
              life circumstances, I set aside my web development studies, worked
              hard, got my degree from Liberty University Online, and then
              became an elementary school teacher. Fast forward to 2023, I
              completed a full stack web development bootcamp through Rice
              University.
            </p>
            <p>
              My main focus now is to find a job as a web developer, preferably
              focusing on front-end. In my free time, I spend time on side
              projects and learning new technologies.
            </p>
            <p>
              When I'm not at the computer, I am with my family, cooking, or
              working out.
            </p>
            <Typography>Experience</Typography>
            <p>
              In 2008 I was introduced to the world of web development. Due to
              life circumstances, I set aside my web development studies, worked
              hard, got my degree from Liberty University Online, and then
              became an elementary school teacher. Fast forward to 2023, I
              completed a full stack web development bootcamp through Rice
              University.
            </p>
            <p>
              My main focus now is to find a job as a web developer, preferably
              focusing on front-end. In my free time, I spend time on side
              projects and learning new technologies.
            </p>
            <p>
              When I'm not at the computer, I am with my family, cooking, or
              working out.
            </p>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
