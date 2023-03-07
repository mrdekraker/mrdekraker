import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import Navbar from "./Navbar";
import Footer from "./Footer";
import brush from "assets/brush.png";
import mdek from "assets/mdek.png";
import mResume from "assets/mdek_resume.pdf";
import { GradientButton, GradientButtonOutline } from "components/Buttons";
import { useNavigate } from "react-router-dom";




const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const navigate = useNavigate();

  const downloadResume = () => {
    // download file
    const link = document.createElement("a");
    link.href = mResume;
    link.setAttribute("download", "mDeKraker_resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box
        // border="1px solid orange"
        width="100%"
        minHeight={isNonMobileScreens ? "calc(100vh - 170px)" : "auto"}
        padding="2rem 3%"
        display="flex"
        flexDirection={isNonMobileScreens ? "row" : "column"} // set flexDirection to "column" for mobile screens
        gap="0.5rem"
        justifyContent="space-between">
        <Box
          // border="1px solid red"
          width={isNonMobileScreens ? "50%" : "100%"}
          flexShrink={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            order: isNonMobileScreens ? 0 : 1, // set order to 0 for non-mobile screens and 1 for mobile screens
          }}>
          <Box display="flex">
            <Typography
              fontFamily="Playfair Display"
              fontWeight="600"
              fontSize="clamp(2rem, 3rem, 3.5rem)">
              Mark&nbsp;
            </Typography>
            <Typography
              fontFamily="Playfair Display"
              fontWeight="600"
              fontSize="clamp(2rem, 3rem, 3.5rem)"
              color="primary"
              sx={{
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: "''",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "450px",
                  height: "214px",
                  backgroundImage: `url(${brush})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transform: "translate(-50%, -50%)",
                  zIndex: "-1",
                },
              }}>
              DeKraker
            </Typography>
          </Box>
          <Box
            margin="1rem auto"
            width="50%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <Typography>
              MERN Full Stack Web Developer // Lifelong Learner
            </Typography>
          </Box>

          {/* CALL TO ACTIONS */}
          <Box
            border="1px solid #fff"
            padding="1.25rem 0"
            display="flex"
            justifyContent="space-between"
            // height="5rem"
          >
            {/* BUTTONS */}
            <GradientButton
              onClick={() => {
                navigate("/contact");
              }}
              variant="contained"
              // borderRadius="0.1rem 0 0 0.1rem"
              sx={{
                width: "10rem",
                "&:hover": {
                  color: theme.palette.primary.light,
                },
              }}
            >
              <Typography
                fontFamily={"Playfair Display"}
                fontSize="clamp(1rem, 1.2rem, 1.8rem)"
                fontWeight="600">
                CONTACT ME
              </Typography>
            </GradientButton>

            <GradientButtonOutline
              onClick={downloadResume}
              variant="contained"
              color="primary"
              borderRadius="0.1rem 0 0 0.1rem"
              sx={{
                width: "10rem",
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            >
              <Typography
                color="#DC4492"
                fontFamily={"Playfair Display"}
                fontSize="clamp(1rem, 1.2rem, 1.8rem)"
                fontWeight="600">
                RESUMÉ
              </Typography>
            </GradientButtonOutline>
          </Box>
        </Box>
        <Box
          margin="1rem auto"
          width={isNonMobileScreens ? "50%" : "100%"}
          flexShrink={0}
          order={isNonMobileScreens ? 1 : 0}
          sx={{
            display: "flex",
            justifyContent: "center",
            filter: "grayscale(100%)",
            "&:hover": {
              transition: "all 0.5s ease",
              filter: "grayscale(0%)",
            },
            // image should shrink to fit container
            // set max width of the image
            maxWidth: "600px",
          }}>
          <img
            src={mdek}
            alt="Mark DeKraker"
            width="100%"
            height="auto"
            // sx={{
            //   maxWidth: "600px",
            // }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
