import { Box, useTheme, Typography } from "@mui/material";
import Narnia from "../assets/littleNarnia.jpg";

const Landing = () => {
  const theme = useTheme();

  const navbarHeight = 80; // Replace with the actual height of your navbar

  return (
    <Box
      style={{
        backgroundImage: `url(${Narnia})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: `calc(100vh - ${navbarHeight}px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <Typography
        color="#C6F6D5"
        fontSize="clamp(3rem, 5rem, 7.5rem)"
        padding="1rem"
        backgroundColor="rgba(0,0,0,0.5)">
        M.DeKraker
      </Typography>
    </Box>
  );
};

export default Landing;
