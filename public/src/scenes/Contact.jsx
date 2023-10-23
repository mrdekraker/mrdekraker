import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ContactForm from "./ContactForm";

import mdek from "../assets/mDek.jpeg";

const Contact = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();

  if (isNonMobileScreens) {
  return (
    // NONMOBILE PARENT BOX
    <Box
      width="100%"
      padding="2rem 6%"
      display="flex"
      flexDirection={isNonMobileScreens ? "row" : "column"}
      alignItems="center"
      justifyContent="center" // Center horizontally
      gap="0.5rem">
      {/* LEFT BOX */}
      <Box
        flex="1"
        display="flex" // To enable flex properties
        flexDirection="column" // To stack the content vertically
        justifyContent="flex-end" // Right-justify the content vertically
        alignItems="flex-end" // Right-justify the content horizontally
      >
        <Typography
          fontSize="clamp(1.5rem, 2.25rem, 3rem)"
          color={theme.palette.primary.dark}
          textAlign="right" // Right-align the text
        >
          CONTACT ME
        </Typography>
        <Typography
          fontSize="clamp(1.5rem, 2.25rem, 3rem)"
          color={theme.palette.primary.main}
          textAlign="right" // Right-align the text
        >
          TO GET STARTED!
        </Typography>
        <img src={mdek} alt="mdek" width="75%" />
      </Box>

      {/* RIGHT BOX */}
      <Box flex="1">
        <ContactForm />
      </Box>
    </Box>
  );
  } else {
    return (
      // MOBILE PARENT BOX
      <Box
        // border="2px solid red"
        width="100%"
        padding="2rem 6%"
        display="flex" // Always display flex to align items side by side
        flexDirection={isNonMobileScreens ? "row" : "column"} // Stack on small screens
        alignItems="center" // Vertically center items
        gap="0.5rem">
        <Box>
          <Typography
            fontSize="clamp(1.5rem, 2.25rem, 3rem)"
            color={theme.palette.primary.dark}>
            CONTACT ME
          </Typography>
          <Typography
            fontSize="clamp(1.5rem, 2.25rem, 3rem)"
            color={theme.palette.primary.main}>
            TO GET STARTED!
          </Typography>
        </Box>
        <ContactForm />
      </Box>
    );
  }
}

export default Contact;
