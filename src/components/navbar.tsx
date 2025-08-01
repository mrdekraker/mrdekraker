// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  InputBase,
  FormControl,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home,
  LaptopChromebook,
  PermMedia,
  AccountBox,
  Search,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import ThemeToggle from "./themeToggle";

// Define NavLink interface
interface NavLink {
  label: string;
  path: string;
  icon: string; // Icon name from Sanity.io
}

// Define NavbarProps interface
interface NavbarProps {
  navLinks?: NavLink[];
}

// Default nav links
const defaultNavLinks: NavLink[] = [
  { label: "Home", path: "/", icon: "Home" },
  { label: "Blog", path: "/blog", icon: "LaptopChromebook" },
  { label: "Portfolio", path: "/portfolio", icon: "PermMedia" },
  { label: "Contact", path: "/contact", icon: "AccountBox" },
];

// Map icon names to MUI icons
const iconMap: { [key: string]: React.ReactNode } = {
  Home: <Home />,
  LaptopChromebook: <LaptopChromebook />,
  PermMedia: <PermMedia />,
  AccountBox: <AccountBox />,
};

const Navbar: React.FC<NavbarProps> = ({ navLinks = defaultNavLinks }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery("");
    if (mobileOpen) handleDrawerToggle();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <IconButton sx={{ float: "right" }}>
        <CloseIcon />
      </IconButton>
      <List>
        {navLinks.map(({ label, path, icon }) => (
          <ListItem
            key={path}
            component={Link}
            href={path}
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
            aria-label={label}>
            {iconMap[icon] || <Home />}
            <ListItemText primary={label} sx={{ pl: 1 }} />
          </ListItem>
        ))}
        <ListItem>
          <FormControl
            component="form"
            onSubmit={handleSearch}
            sx={{ width: "100%" }}>
            <Box
              sx={{
                backgroundColor: theme.palette.neutral?.light || "#f0f0f0",
                borderRadius: "9px",
                display: "flex",
                alignItems: "center",
                p: "0.1rem 1rem",
              }}>
              <InputBase
                placeholder="Search Blog..."
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ flexGrow: 1 }}
              />
              <IconButton type="submit">
                <Search />
              </IconButton>
            </Box>
          </FormControl>
        </ListItem>
        <ListItem>
          <ThemeToggle />
        </ListItem>
      </List>
    </Box>
  );

  const fallback = (
    <AppBar
      position="static"
      sx={{ background: theme.palette.background.default }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href="/" passHref>
          <Typography
            variant="h6"
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
            aria-label="Home">
            MD
          </Typography>
        </Link>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          {navLinks.map(({ label, path }) => (
            <Link key={path} href={path} passHref>
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}>
                {label}
              </Typography>
            </Link>
          ))}
          <FormControl component="form" onSubmit={handleSearch}>
            <Box
              sx={{
                backgroundColor: theme.palette.neutral?.light || "#f0f0f0",
                borderRadius: "9px",
                display: "flex",
                alignItems: "center",
                p: "0.1rem 1rem",
              }}>
              <InputBase
                placeholder="Search Blog..."
                value=""
                disabled
                sx={{ flexGrow: 1 }}
              />
              <IconButton disabled>
                <Search />
              </IconButton>
            </Box>
          </FormControl>
          <ThemeToggle ssr={true} />
        </Box>
      </Toolbar>
    </AppBar>
  );

  if (!mounted) return fallback;

  return (
    <AppBar
      position="static"
      sx={{ background: theme.palette.background.default }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href="/" passHref>
          <Typography
            variant="h6"
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
            aria-label="Home">
            MD
          </Typography>
        </Link>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {navLinks.map(({ label, path }) => (
              <Link key={path} href={path} passHref>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    textDecoration: "none",
                    fontWeight: 500,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}>
                  {label}
                </Typography>
              </Link>
            ))}
            <FormControl component="form" onSubmit={handleSearch}>
              <Box
                sx={{
                  backgroundColor: theme.palette.neutral?.light || "#f0f0f0",
                  borderRadius: "9px",
                  display: "flex",
                  alignItems: "center",
                  p: "0.1rem 1rem",
                }}>
                <InputBase
                  placeholder="Search Blog..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  sx={{ flexGrow: 1 }}
                />
                <IconButton type="submit">
                  <Search />
                </IconButton>
              </Box>
            </FormControl>
            <ThemeToggle />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
