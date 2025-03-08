import React from "react";
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  useTheme,
  alpha,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const PageHero = ({ title, subtitle, bgImage, height = 300 }) => {
  const theme = useTheme();
  const location = useLocation();

  // Generate breadcrumbs from current path
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Convert path segments to readable format (e.g., 'dr-fay' to 'Dr. Fay')
  const formatPathname = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Box
      sx={{
        position: "relative",
        height,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(to right, ${alpha(
            theme.palette.common.black,
            0.8
          )}, ${alpha(theme.palette.common.black, 0.6)}), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", color: "white" }}>
          {subtitle && (
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                mb: 1,
              }}
            >
              {subtitle}
            </Typography>
          )}

          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.primary.main,
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>

          {/* Breadcrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{
              display: "flex",
              justifyContent: "center",
              "& .MuiBreadcrumbs-ol": {
                justifyContent: "center",
              },
              "& .MuiBreadcrumbs-separator": {
                color: theme.palette.primary.light,
              },
            }}
          >
            <Link
              component={RouterLink}
              to="/"
              sx={{
                color: theme.palette.primary.light,
                textDecoration: "none",
                "&:hover": {
                  color: theme.palette.primary.main,
                  textDecoration: "underline",
                },
              }}
            >
              Home
            </Link>

            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography
                  key={to}
                  sx={{
                    color: theme.palette.primary.light,
                    fontWeight: 600,
                  }}
                >
                  {formatPathname(value)}
                </Typography>
              ) : (
                <Link
                  component={RouterLink}
                  to={to}
                  key={to}
                  sx={{
                    color: theme.palette.primary.light,
                    textDecoration: "none",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      textDecoration: "underline",
                    },
                  }}
                >
                  {formatPathname(value)}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  );
};

export default PageHero;
