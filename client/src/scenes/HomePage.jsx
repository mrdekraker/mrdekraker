import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import AboutMeWidget from "./widgets/AboutMeWidget";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <AboutMeWidget />
      <Footer />
    </Box>
  );
};

export default HomePage;