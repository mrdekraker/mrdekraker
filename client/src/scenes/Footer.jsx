import { Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import FlexBetween from "../components/FlexBetween";

const Footer = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: isNonMobileScreens ? "inherit" : "100%",
        maxWidth: isNonMobileScreens ? "inherit" : "400px",
        padding: "1rem",
        backgroundColor: theme.palette.background.alt,
        color: theme.palette.text.secondary,
        // footer should shrink to fit mobile screens
        margin: "0 auto",
      }}>
      <FlexBetween>
        <Box
          sx={{
            // center the box
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}>
          <IconButton
            onClick={() =>
              window.open(
                "https://www.facebook.com/mrdekraker/",
                "_blank",
                "noopener,noreferrer"
              )
            }>
            <Facebook
              sx={{
                fontSize: "25px",
                color: theme.palette.mode === "dark" ? "#3b5998" : "#4267b2",
              }}
            />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://www.instagram.com/mdek_strongdad/",
                "_blank",
                "noopener,noreferrer"
              )
            }>
            <Instagram
              sx={{
                fontSize: "25px",
                color: theme.palette.mode === "dark" ? "#e1306c" : "#c13584",
              }}
            />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://twitter.com/DekrakerMark",
                "_blank",
                "noopener,noreferrer"
              )
            }>
            <Twitter
              sx={{
                fontSize: "25px",
                color: theme.palette.mode === "dark" ? "#1da1f2" : "#1da1f2",
              }}
            />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/mdek/",
                "_blank",
                "noopener,noreferrer"
              )
            }>
            <LinkedIn
              sx={{
                fontSize: "25px",
                color: theme.palette.mode === "dark" ? "#0e76a8" : "#0e76a8",
              }}
            />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://github.com/mrdekraker",
                "_blank",
                "noopener,noreferrer"
              )
            }>
            <GitHub
              sx={{
                fontSize: "25px",
                color: theme.palette.mode === "dark" ? "#333" : "#333",
              }}
            />
          </IconButton>
        </Box>
      </FlexBetween>
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          "&:hover": {
            cursor: "pointer",
            textDecoration: "underline",
            // change color of text on hover
            color: theme.palette.mode === "dark" ? "#3b5998" : "#4267b2",
          },
        }}
        onClick={() => {
          window.open(
            "https://github.com/mrdekraker",
            "_blank",
            "noopener,noreferrer"
          );
        }}>
        Designed & Built by Mark DeKraker
      </Typography>
    </Box>
  );
};

export default Footer;