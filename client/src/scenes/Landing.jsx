import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import Narnia from "../assets/littleNarnia.jpg";

const Landing = () => {
  const theme = useTheme();

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navbarHeight = 80;

  return (
    <Box
      style={{
        backgroundImage: `url(${Narnia})`,
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
        textAlign: "center", // Add this line
      }}>
      <Box padding="1rem" backgroundColor="rgba(0,0,0,0.5)">
        <Typography
          fontFamily="League Spartan"
          color="#C6F6D5"
          fontSize={
            isNonMobileScreens ? "clamp(3rem, 5.5rem, 7.5rem)" : "3rem"
          }>
          M.DeKraker
        </Typography>
        <Typography
          // fontFamily="League Spartan"
          fontWeight="lighter"
          fontStyle="italic"
          color="#C6F6D5"
          fontSize={
            isNonMobileScreens ? "clamp(1rem, 1.5rem, 3rem)" : "1.5rem"
          }>
          Worshipper | Husband | Father | Full Stack Developer | Musician |
          Athlete
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;
