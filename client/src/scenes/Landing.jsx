import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import Narnia from "../assets/littleNarnia.jpg";
import SocialLinks from "../components/SocialLinks";

const Landing = () => {
  const theme = useTheme();

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navbarHeight = 80;

  const boxStyle = {
    backgroundImage: `url(${Narnia})`,
    zIndex: "-1",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: `calc(100vh - ${navbarHeight}px)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "hidden",
    textAlign: isNonMobileScreens ? "left" : "center",
  };

  return (
    <Box style={boxStyle}>
      <Box
        padding="1rem"
        backgroundColor="rgba(0,0,0,0.5)"
        border="1px solid white"
        textAlign={isNonMobileScreens ? "" : "center"}>
        <Typography
          fontFamily="League Spartan"
          fontSize={
            isNonMobileScreens
              ? "clamp(5rem, 7rem, 15rem)"
              : "clamp(2rem, 5rem, 7rem)"
          }
          lineHeight="1"
          // color="#C6F6D5"
          color="#9AE6B4"
          style={
            isNonMobileScreens ? { opacity: 0.5, zIndex: 4 } : { opacity: 0.5 }
          }>
          DeKraker
        </Typography>
        <Typography
          fontFamily="League Spartan"
          fontSize={
            isNonMobileScreens
              ? "clamp(3rem, 4rem, 5rem)"
              : "clamp(2rem, 3rem, 4rem)"
          }
          lineHeight={isNonMobileScreens ? "1" : "1.5"}
          color={theme.palette.primary.main}
          sx={
            isNonMobileScreens
              ? { position: "relative", top: "-1rem", left: "0rem" }
              : { position: "relative", top: "-1.5rem", left: "0rem" }
          }
          // color="#C6F6D5"
          // style={
          //   isNonMobileScreens
          //     ? { position: "relative", top: "-5.5rem", left: "2rem" }
          //     : { position: "relative", top: "-3rem", left: "0rem" }
          // }
        >
          Mark R
        </Typography>
        <Typography
          fontWeight="lighter"
          fontStyle="italic"
          color="#C6F6D5"
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
          fontStyle="italic"
          fontSize="1rem"
          display="flex"
          marginTop="4rem"
          style={
            isNonMobileScreens
              ? {}
              : { justifyContent: "center", marginTop: "2rem" }
          }>
          Find Me Here - <SocialLinks />
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;
