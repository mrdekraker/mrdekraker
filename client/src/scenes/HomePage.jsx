import { Box, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

import Navbar from "./Navbar";
// import AboutMeWidget from "./widgets/AboutMeWidget";
import Footer from "./Footer";
import brush from "assets/brush.png";


const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        border="1px solid orange"
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between">
        <Box
          border="1px solid red"
          width={isNonMobileScreens ? "50%" : "100%"}
          flexShrink={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isNonMobileScreens ? "75vh" : "",
            flexDirection: isNonMobileScreens ? "row" : "column",
          }}>
          <Box
            display="flex"
            // width="50%"
          >
            <Typography
              fontFamily="Playfair Display"
              fontWeight="600"
              fontSize="clamp(2rem, 3rem, 3.5rem)"
              // color="primary"
            >
              Mark&nbsp;
            </Typography>
            <Typography
              fontFamily="Playfair Display"
              fontWeight="600"
              fontSize="clamp(2rem, 3rem, 3.5rem)"
              color="primary"
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
                  backgroundImage: `url(${brush})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transform: "translate(-50%, -50%)",
                  zIndex: "-1",
                },
              }}>
              DeKraker
            </Typography>
          </Box>
          <Box
            border="1px solid blue"
            width={isNonMobileScreens ? "50%" : "100%"}
            flexShrink={0}>
            <Typography>Content underneath</Typography>
          </Box>
        </Box>

        <Box
          border="1px solid green"
          width={isNonMobileScreens ? "50%" : "100%"}
          flexShrink={0}>
          <Typography>Right Side Content</Typography>
        </Box>
      </Box>
      {/* <ContactPage fullName={fullName} /> */}
      <Footer />
    </Box>
  );
};

export default HomePage;