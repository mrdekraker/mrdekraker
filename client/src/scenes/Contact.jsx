import { Button, Box, Typography, useMediaQuery } from "@mui/material";

import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Typography>This is the contact me page</Typography>
      <Footer />
    </Box>
  );
};

export default HomePage;
