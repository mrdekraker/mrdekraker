import { Button, Box, Typography, useMediaQuery } from "@mui/material";

import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" width="100vw" height="100%">
      <Navbar />
      <Typography>This is where the content goes</Typography>
      <Footer />
    </Box>
  );
};

export default HomePage;
