import React, { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme, Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Header isMobile={isMobile} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 2,
          pb: 4,
          px: isMobile ? 2 : 4,
          bgcolor: "background.default",
        }}
      >
        {children}
      </Box>
      <Footer />

      {/* Scroll to top button */}
      <Zoom in={showScrollTop}>
        <Fab
          color="primary"
          size="small"
          aria-label="scroll back to top"
          onClick={handleScrollTop}
          sx={{
            position: "fixed",
            bottom: { xs: 16, md: 20 },
            right: { xs: 16, md: 20 },
            zIndex: 2,
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
          }}
        >
          <KeyboardArrowUpIcon fontSize="small" />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default Layout;
