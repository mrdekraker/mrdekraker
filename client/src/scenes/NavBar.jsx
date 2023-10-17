import { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Typography,
  useTheme,
  useMediaQuery,
  FormControl,
  Icon,
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
import BlockContent from "@sanity/block-content-to-react";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../components/FlexBetween";


const NavBar = () => {  
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // SANITY SEARCH
    const response = await fetch(
      `https://c8fatw9j.api.sanity.io/v1/data/query/production?query=*[_type == "post" && title match "${query}*"]`
    );
    const data = await response.json();

    // FILTER RESULTS
    const filteredPosts = data.result
      ? data.result.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.body.toLowerCase().includes(query.toLowerCase())
      )
      : [];
    
    // SET RESULTS TO STATE
    setSearchResults(filteredPosts);
  }

  // SEARCH MODAL
  const SearchModal = () => {
    return (
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

        {/* SEARCH RESULTS */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="3rem">
          {searchResults.map((post) => (
            <Box
              key={post._id}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="1rem">
              <Typography
                fontFamily="Libre Baskerville"
                fontSize="clamp(1rem, 1.2rem, 2rem)"
                color={theme.palette.primary.main}
                lineHeight="1"
                width="80%"
                margin="0 auto"
                padding="2rem 0"
                sx={{
                  textDecoration: "none",
                }}>
                <Box textAlign="left">
                  <BlockContent
                    blocks={post.body}
                    projectId="c8fatw9j"
                    dataset="production"
                  />
                </Box>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    onClick={() => navigate(-1)}
                    sx={{
                      backgroundColor: theme.palette.primary.dark,
                      color: theme.palette.primary.light,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                      },
                    }}>
                    Back to Blog
                  </Button>
                </Box>
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  // HANDLE SEARCH SUBMIT
    const handleSearch = (e) => {
      e.preventDefault();
      SearchModal();
    }

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      {/* MD & Search */}
      <FlexBetween gap="1.75rem">
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
          onClick={() => navigate("/")}>
          MD
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem">
            {/* SEARCH FORM */}
            {/* <InputBase
                placeholder="Search Blog..."
              />
              <IconButton >
                <Search />
              </IconButton> */}
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

      {/* SEARCH DISPLAY */}

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
}

export default NavBar;