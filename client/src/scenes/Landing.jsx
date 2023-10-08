import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import Narnia from "../assets/littleNarnia.jpg";

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
        border="1px solid white">
        <Typography
          fontFamily="League Spartan"
          fontSize={
            isNonMobileScreens
              ? "clamp(5rem, 7rem, 15rem)"
              : "clamp(2rem, 5rem, 7rem)"
          }
          display={isNonMobileScreens ? "" : "flex"}
          justifyContent={isNonMobileScreens ? "" : "center"}
          alignItems={isNonMobileScreens ? "" : "center"}
          textAlign={isNonMobileScreens ? "" : "center"}
          color={theme.palette.primary.main}
          style={{
            opacity: 0.5,
            zIndex: 4,
            // position: "absolute",
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom: 0,
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // textAlign: "center",
          }}>
          DeKraker
        </Typography>
        <Typography
          fontFamily="League Spartan"
          fontSize={
            isNonMobileScreens
              ? // ? "clamp(3rem, 4rem, 5rem)"
                // : "clamp(5rem, 6rem, 7rem)"
                "clamp(1rem, 2rem, 3rem)"
              : "clamp(3rem, 4rem, 5rem)"
          }
          display={isNonMobileScreens ? "" : "flex"}
          justifyContent={isNonMobileScreens ? "" : "center"}
          alignItems={isNonMobileScreens ? "" : "center"}
          textAlign={isNonMobileScreens ? "" : "center"}
          color={theme.palette.primary.main}
          style={{
            position: "relative",
            top: "-4.5rem",
            left: "1rem",
            // display: "flex",
            // justifyContent: "left",
            // alignItems: "left",
            // textAlign: "left",
          }}>
          Mark
        </Typography>
        <Typography
          fontWeight="lighter"
          fontStyle="italic"
          color="#C6F6D5"
          fontSize={isNonMobileScreens ? "1rem" : "0.5rem"}
          // style={{ marginTop: "2rem" }}
        >
          Worshipper | Husband | Father | Full Stack Developer | Musician |
          Athlete
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;
