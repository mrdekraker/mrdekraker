import Navbar from "./Navbar";
import { Box, useMediaQuery } from "@mui/material";
import AboutMeWidget from "./widgets/AboutMeWidget";
import Footer from "./Footer";

const About = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between">
        <AboutMeWidget />
      </Box>
      {/* <ContactPage fullName={fullName} /> */}
      <Footer />
    </Box>
  );
};

export default About;