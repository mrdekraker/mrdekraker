import { Box, IconButton, useTheme } from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

const IconsSocial = () => {
  const theme = useTheme();

  return (
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
            color: theme.palette.mode === "dark" ? "#FFF" : "#4267b2",
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
            color: theme.palette.mode === "dark" ? "#FFF" : "#c13584",
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
            color: theme.palette.mode === "dark" ? "#FFF" : "#1da1f2",
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
            color: theme.palette.mode === "dark" ? "#FFF" : "#0e76a8",
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
            color: theme.palette.mode === "dark" ? "#FFF" : "#333",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default IconsSocial;