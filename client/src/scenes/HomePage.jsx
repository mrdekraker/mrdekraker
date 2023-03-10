import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import Navbar from "./Navbar";
import IconsSocial from "./widgets/IconsSocial";
import Footer from "./Footer";
import brush from "assets/brush.png";
import mdek from "assets/mdek.png";
import FlexBetween from "components/FlexBetween";
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
    <Box display="flex" flexDirection="column" width="100vw" height="100%">
      <Navbar />

      {/* CONTENT CONTAINER */}
      <Box
        padding="2rem 3%"
        flexGrow={1}
        display="flex"
        flexDirection={isNonMobileScreens ? "row" : "column"}
        gap="0.5rem"
        justifyContent="space-between"
        sx={{
          overflowX: "hidden",
          margin: "0",
        }}>
        {/* LEFT COLUMN */}
        <Box
          // border="1px solid red"
          width={isNonMobileScreens ? "50%" : "100%"}
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

          {/* LEFT COLUMN SUBTEXT */}
          <Box alignItems="center">
            <Typography fontSize="clamp(0.8rem, 1rem, 1.2rem)">
              MERN Full Stack Web Developer // Lifelong Learner
            </Typography>
          </Box>

          {/* LEFT COLUMN CALL TO ACTION */}
          <Box
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
                boxShadow: "none",
                borderRadius: "0.1rem 0 0 0.1rem",
                width: "10rem",
                "&:hover": {
                  color: "#fff",
                  boxShadow: "none",
                },
              }}>
              <Typography
                fontFamily={"Playfair Display"}
                fontSize="clamp(1rem, 1.2rem, 1.8rem)"
                fontWeight="600">
                CONTACT ME
              </Typography>
            </GradientButton>

            <GradientButtonOutline
              onClick={downloadResume}
              variant="text"
              sx={{
                background: theme.palette.mode === "dark" ? "#000" : "#FFF",
                color: theme.palette.mode === "dark" ? "000" : "#000",
                width: "10rem",
                "&:hover": {
                  background: "#FFF",
                  color: "#DC4492",
                },
              }}>
              <Typography
                fontFamily={"Playfair Display"}
                fontSize="clamp(1rem, 1.2rem, 1.8rem)"
                fontWeight="600">
                RESUMÉ
              </Typography>
            </GradientButtonOutline>
          </Box>

          {/* SOCIAL ICONS */}
          <FlexBetween>
            <IconsSocial display={isNonMobileScreens ? "" : "none"} />
          </FlexBetween>
        </Box>

        {/* RIGHT COLUMN */}
        <Box
          margin=".5rem auto"
          width={isNonMobileScreens ? "50%" : "100%"}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}>
          <Box
            sx={{
              maxWidth: "500px",
              justifyContent: "center",
              position: "relative",
              filter: "grayscale(100%)",
              "&:before": {
                content: "''",
                position: "absolute",
                top: "-1rem",
                left: "-1rem",
                width: "calc(100% - .5rem)",
                height: "calc(100%)",
                zIndex: "-1",
                border: isNonMobileScreens
                  ? `2px solid ${primaryLight}`
                  : "none",
              },
              "&:hover": {
                filter: "grayscale(0%)",
                transition: "all 0.5s ease",
              },
            }}>
            <img
              flexShrink={0}
              src={mdek}
              alt="Mark DeKraker"
              width="100%"
              height="auto"
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default HomePage;
