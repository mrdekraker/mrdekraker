import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  DarkMode,
  LightMode,
  Home,
  LaptopChromebook,
  PermMedia,
  AccountBox,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../components/FlexBetween";

import React from "react";

const NavBar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const main = theme.palette.primary.main;
  const alt = theme.palette.background.alt;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      {/* MD & Search */}
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              color: main,
              cursor: "pointer",
            },
          }}>
          MD
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem">
            <InputBase placeholder="Search Blog..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <Home
            sx={{
              fontSize: "25px",
              color:
                theme.palette.mode === "light"
                  ? theme.palette.primary.dark
                  : "",
            }}
            onClick={() => navigate("/")}
            cursor="pointer"
          />
          <LaptopChromebook
            sx={{
              fontSize: "25px",
              color:
                theme.palette.mode === "light"
                  ? theme.palette.primary.dark
                  : "",
            }}
            onClick={() => navigate("/blog")}
            cursor="pointer"
          />
          <PermMedia
            sx={{
              fontSize: "25px",
              color:
                theme.palette.mode === "light"
                  ? theme.palette.primary.dark
                  : "",
            }}
            onClick={() => navigate("/projects")}
            cursor="pointer"
          />
          <AccountBox
            sx={{
              fontSize: "25px",
              color:
                theme.palette.mode === "light"
                  ? theme.palette.primary.dark
                  : "",
            }}
            onClick={() => navigate("/contact")}
            cursor="pointer"
          />
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode
                sx={{
                  color: theme.palette.primary.dark,
                  fontSize: "25px",
                }}
              />
            )}
          </IconButton>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}>
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close />
            </IconButton>
          </Box>

          {/* MOBILE MENU */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem">
            <Home
              sx={{ fontSize: "25px" }}
              onClick={() => navigate("/")}
              cursor="pointer"
            />
            <LaptopChromebook 
              sx={{ fontSize: "25px" }} 
              onClick={() => navigate("/blog")}
              cursor="pointer"  
            />
            <PermMedia 
              sx={{ fontSize: "25px" }} 
              onClick={() => navigate("/projects")}
              cursor="pointer"  
            />
            <AccountBox 
              sx={{ fontSize: "25px" }} 
              onClick={() => navigate("/contact")}
              cursor="pointer"
            />
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
}

export default NavBar;