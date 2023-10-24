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

const NavBar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
  };

  // HANDLE SEARCH
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // HANDLE SEARCH SUBMIT
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) {
      console.log("error");
      return;
    }

    navigate(`/search?q=${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      {/* MD & Search */}
      <FlexBetween gap="1.75rem">
        <a href="/" style={{ textDecoration: "none" }}>
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          sx={{
            "&:hover": {
              color: main,
              cursor: "pointer",
            },
          }}
          
        >
          MD
          </Typography>
        </a>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem">
            <form onSubmit={handleSearch}>
              <InputBase
                placeholder="Search Blog..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <IconButton type="submit">
                <Search />
              </IconButton>
            </form>
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
                  ? theme.palette.primary.main
                  : "",
            }}
            onClick={() => handleMobileMenuClick("/")}
            cursor="pointer"
          />
          <LaptopChromebook
            sx={{
              fontSize: "25px",
              color:
                theme.palette.mode === "light"
                  ? theme.palette.primary.main
                  : "",
            }}
            onClick={() => handleMobileMenuClick("/blog")}
            cursor="pointer"
          />
          <PermMedia
            sx={{
              fontSize: "25px",
              color:
                theme.palette.mode === "light"
                  ? theme.palette.primary.main
                  : "",
            }}
            onClick={() => handleMobileMenuClick("/projects")}
            cursor="pointer"
          />
          <AccountBox
            sx={{
              fontSize: "25px",
              color:
                theme.palette.mode === "light"
                  ? theme.palette.primary.main
                  : "",
            }}
            onClick={() => handleMobileMenuClick("/contact")}
            cursor="pointer"
          />
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode
                sx={{
                  color: theme.palette.primary.main,
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
          width="101vw"
          // width="80%"
          zIndex="10"
          backgroundColor={
            theme.palette.mode === "light"
              ? "rgba(255, 255, 255, 0.9)"
              : "rgba(0, 0, 0, 0.9)"
          }>
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close
                sx={{
                  fontSize: "25px",
                  color:
                    theme.palette.mode === "light"
                      ? theme.palette.primary.main
                      : "",
                }}
              />
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
                    ? theme.palette.primary.main
                    : "",
              }}
              onClick={() => handleMobileMenuClick("/")}
              cursor="pointer"
            />
            <LaptopChromebook
              sx={{
                fontSize: "25px",
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.primary.main
                    : "",
              }}
              onClick={() => handleMobileMenuClick("/blog")}
              cursor="pointer"
            />
            <PermMedia
              sx={{
                fontSize: "25px",
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.primary.main
                    : "",
              }}
              onClick={() => handleMobileMenuClick("/projects")}
              cursor="pointer"
            />
            <AccountBox
              sx={{
                fontSize: "25px",
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.primary.main
                    : "",
              }}
              onClick={() => handleMobileMenuClick("/contact")}
              cursor="pointer"
            />
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode
                  sx={{
                    color: theme.palette.primary.main,
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
};

export default NavBar;
