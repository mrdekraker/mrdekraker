import { Button, Box, IconButton, Typography, TextField, useMediaQuery, useTheme } from "@mui/material";
import { Send } from "@mui/icons-material"
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { ContactButton } from "components/Buttons";
import LineGradient from "components/LineGradient";
import FlexBetween from "components/FlexBetween";

import Navbar from "./Navbar";
import Footer from "./Footer";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Required"),
});

const Contact = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://formsubmit.co/52edcdc9df4224d998079bae78fb4893",
          {
            name: values.name,
            email: values.email,
            message: values.message,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        // TODO: NOTIFY USER HERE
      } catch (error) {
        console.log(error);
        // TODO: NOTIFY USER HERE
      }
    },
  });
  
  return (
    <Box display="flex" flexDirection="column" width="100vw" height="100%">
      <Navbar />
      <Box
        flexGrow={1}
        padding="2rem 3%"
        flexDirection={isNonMobileScreens ? "row" : "column"}
        sx={{
          overflowX: "hidden",
          margin: "0",
        }}>
        {/* PAGE NAMEPLATE */}
        <Box
          width={isNonMobileScreens ? "50%" : "100%"}
          sx={{
            margin: "1.5rem auto"
          }}
        >
          <Box
            flexDirection={isNonMobileScreens ? "row" : "column"}
            // flexDirection="row"
            display="flex">
            <Typography
              fontFamily={"Playfair Display, serif"}
              fontWeight="600"
              color={theme.palette.mode === "dark" ? "primary" : "#DC4492"}
              fontSize="2.25rem"
              textTransform={"uppercase"}>
              Contact Me&nbsp;
            </Typography>
            <Typography
              fontFamily={"Playfair Display, serif"}
              fontWeight="600"
              fontSize="2.25rem"
              textTransform={"uppercase"}
              order={isNonMobileScreens ? 1 : 0}>
              To Get Started
            </Typography>
          </Box>
          <LineGradient width="100%" />
          <Box
            margin="1.25rem 0"
            display="flex"
            flexDirection={isNonMobileScreens ? "row" : "column"}
          >
            <Box>
              
            </Box>
            <Typography>Email me directly at&nbsp;</Typography>
            <Typography
              color={theme.palette.mode === "dark" ? "primary" : "#DC4492"}
              onClick={() => window.open("mailto:mrdekraker@gmail.com")}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              mrdekraker@gmail.com
            </Typography>
            <Typography>&nbsp;or fill out the form below.</Typography>
          </Box>

          {/* FORM */}
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              margin="normal"
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              id="message"
              name="message"
              label="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<Send />}
              sx={{
                margin: "1rem 0",
                width: "10rem",
                fontSize: "Clamp(.8rem, 1rem, 1.2rem)",
                color: theme.palette.mode === "dark" ? "#FFF" : "#000",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "none"
                    : "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
                "&:hover": {
                  color: theme.palette.mode === "dark" ? "primary" : "#DC4492",
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#DC4492" : "#FFF",
                },
              }}>
              Send
            </Button>
          </form>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Contact;
