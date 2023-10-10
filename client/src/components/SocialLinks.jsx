import { Box } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";


const SocialLinks = () => {
  return (
    <Box>
      <FlexBetween gap="1rem" />
      <GitHub
        cursor="pointer"
        onClick={() =>
          window.open(
            "http://www.github.com/mrdekraker",
            "blank",
            "noopener noreferrer"
          )
        }
      />
      <LinkedIn
        cursor="pointer"
        onClick={() =>
          window.open(
            "http://www.linkedin.com/in/mdek",
            "blank",
            "noopener noreferrer"
          )
        }
      />
      <Instagram
        cursor="pointer"
        onClick={() =>
          window.open(
            "http://www.instagram.com/mrdekraker",
            "blank",
            "noopener noreferrer"
          )
        }
      />
      <Twitter
        cursor="pointer"
        onClick={() =>
          window.open(
            "http://www.twitter.com/mrdekraker",
            "blank",
            "noopener noreferrer"
          )
        }
      />
    </Box>
  );
}

export default SocialLinks;