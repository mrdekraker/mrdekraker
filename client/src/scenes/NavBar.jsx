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
  const main = theme.palette.primary.main;
  const alt = theme.palette.background.alt;

  // HANDLE MOBILE MENU TOGGLE
  const handleMobileMenuClick = (path) => {
    setIsMobileMenuToggled(!isMobileMenuToggled);
    navigate(path);
  }

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
          top="0"
          left="0"
          height="100vh"
          width="100vw"
          zIndex="10"
          // backgroundColor={`rgba(${background}, 0.9)`}
          backgroundColor="rgba(0, 0, 0, 0.95)"
        >
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
              sx={{
                fontSize: "25px",
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.primary.dark
                    : "",
              }}
              // onClick={() => navigate("/")}
              onClick={() => handleMobileMenuClick("/")}
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
              // onClick={() => navigate("/blog")}
              onClick={() => handleMobileMenuClick("/blog")}
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
              // onClick={() => navigate("/projects")}
              onClick={() => handleMobileMenuClick("/projects")}
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
              // onClick={() => navigate("/contact")}
              onClick={() => handleMobileMenuClick("/contact")}
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
        </Box>
      )}
    </FlexBetween>
  );
}

export default NavBar;