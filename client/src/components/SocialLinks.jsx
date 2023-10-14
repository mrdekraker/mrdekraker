import { Box } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";


const SocialLinks = () => {

  return (
    <FlexBetween gap="0.5rem" paddingLeft="0.5rem">
      <GitHub
        cursor="pointer"
        sx={{ fontSize: "25px" }}
        onClick={() => window.open("http://www.github.com/mrdekraker", "_blank", "noopener noreferrer")}
      />
      <LinkedIn
        cursor="pointer"
        sx={{ fontSize: "25px" }}
        onClick={() => window.open("http://www.linkedin.com/in/mdek", "_blank", "noopener noreferrer")}
      />
      <Twitter
        cursor="pointer"
        sx={{ fontSize: "25px" }}
        onClick={() => window.open("http://www.twitter.com/mrdekraker", "_blank", "noopener noreferrer")}
      />
      <Instagram
        cursor="pointer"
        sx={{ fontSize: "25px" }}
        onClick={() => window.open("http://www.instagram.com/mrdekraker", "_blank", "noopener noreferrer")}
      />
    </FlexBetween>
  );
}

export default SocialLinks;