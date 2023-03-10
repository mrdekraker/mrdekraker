import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import LineGradient from "components/LineGradient";
import mdek from "assets/mdek.png";
import brush from "assets/brush.png";

const AboutMeWidget = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();


  return (

    // LEFT COLUMN
    <Box
      width={isNonMobileScreens ? "50%" : "100%"}
      order={isNonMobileScreens ? 1 : 0}
    >
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
      <Box border="1px solid green" margin="1rem 0">
        <Typography fontSize="clamp(.8rem, 1rem, 1.2rem)">
          This is where I will write about myself. I am a full stack web
          developer
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMeWidget;
