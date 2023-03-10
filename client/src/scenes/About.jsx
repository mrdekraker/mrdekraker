import Navbar from "./Navbar";
import { Box, useMediaQuery } from "@mui/material";
import AboutMeWidget from "./widgets/AboutMeWidget";
import Footer from "./Footer";

const About = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

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
        }}
      >
        <AboutMeWidget />
      </Box>
      {/* <ContactPage fullName={fullName} /> */}
      <Footer />
    </Box>
  );
};

export default About;