import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Button,
  TextField,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import logo from "../../assets/logo.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Dr. Fay", path: "/dr-fay" },
    { name: "Our Mission", path: "/mission" },
    { name: "Services", path: "/services/general" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact Us", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "General Dentistry", path: "/services/general" },
    { name: "Cosmetic Dentistry", path: "/services/cosmetic" },
    { name: "Orthodontics", path: "/services/orthodontics" },
    { name: "Dental Implants", path: "/services/implants" },
    { name: "Teeth Whitening", path: "/services/whitening" },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: "grey.900", color: "grey.200" }}>
      {/* Main Footer Content */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Logo and About */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <img
                src={logo}
                alt="Manhattan Dentistry"
                style={{
                  maxWidth: "220px",
                  height: "auto",
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ mb: 3, maxWidth: "90%" }}>
              Our goal is to promote oral wellness, deliver exquisitely crafted
              quality dentistry, and provide personalized care. We aim to be at
              the forefront of dental knowledge and technology.
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ mb: 3 }}>
              <IconButton
                size="small"
                sx={{
                  color: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": { bgcolor: theme.palette.primary.main },
                  transition: "all 0.2s",
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": { bgcolor: theme.palette.primary.main },
                  transition: "all 0.2s",
                }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": { bgcolor: theme.palette.primary.main },
                  transition: "all 0.2s",
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: 700, color: "white" }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {quickLinks.map((link) => (
                <Box component="li" key={link.name} sx={{ mb: 1.5 }}>
                  <Link
                    component={RouterLink}
                    to={link.path}
                    sx={{
                      color: "grey.400",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.2s",
                      "&:hover": {
                        color: theme.palette.primary.light,
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    <KeyboardArrowRightIcon fontSize="small" sx={{ mr: 0.5 }} />
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: 700, color: "white" }}
            >
              Our Services
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {serviceLinks.map((link) => (
                <Box component="li" key={link.name} sx={{ mb: 1.5 }}>
                  <Link
                    component={RouterLink}
                    to={link.path}
                    sx={{
                      color: "grey.400",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.2s",
                      "&:hover": {
                        color: theme.palette.primary.light,
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    <KeyboardArrowRightIcon fontSize="small" sx={{ mr: 0.5 }} />
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Info and Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: 700, color: "white" }}
            >
              Contact Us
            </Typography>
            <Stack spacing={2.5}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <LocationOnIcon
                  sx={{ color: theme.palette.primary.main, mr: 1.5, mt: 0.3 }}
                />
                <Typography variant="body2" color="grey.400">
                  16 Old Riverhead Road, <br />
                  Westhampton Beach, NY
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PhoneIcon
                  sx={{ color: theme.palette.primary.main, mr: 1.5 }}
                />
                <Link
                  href="tel:6312889000"
                  underline="none"
                  sx={{
                    color: "grey.400",
                    "&:hover": { color: theme.palette.primary.light },
                  }}
                >
                  631-288-9000
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon
                  sx={{ color: theme.palette.primary.main, mr: 1.5 }}
                />
                <Link
                  href="mailto:info@manhattandentistry.com"
                  underline="none"
                  sx={{
                    color: "grey.400",
                    "&:hover": { color: theme.palette.primary.light },
                  }}
                >
                  info@manhattandentistry.com
                </Link>
              </Box>
            </Stack>

            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 700, color: "white" }}
              >
                Newsletter
              </Typography>
              <Typography variant="body2" color="grey.400" sx={{ mb: 2 }}>
                Subscribe to our newsletter for updates and dental tips.
              </Typography>
              <Box sx={{ display: "flex" }}>
                <TextField
                  variant="outlined"
                  placeholder="Your Email"
                  size="small"
                  fullWidth
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                    "& input": {
                      color: "white",
                    },
                  }}
                />
                <Button variant="contained" color="primary" sx={{ ml: 1 }}>
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright Section */}
      <Box sx={{ bgcolor: "grey.800", py: 2 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: isMobile ? "center" : "flex-start",
              textAlign: isMobile ? "center" : "left",
              gap: isMobile ? 1 : 0,
            }}
          >
            <Typography variant="body2" color="grey.500">
              Copyright ©{new Date().getFullYear()} Dr. Terese N. Fay, DMD,
              PLLC. All rights reserved
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link
                component={RouterLink}
                to="/privacy-policy"
                sx={{
                  color: "grey.500",
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.primary.light },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                component={RouterLink}
                to="/terms"
                sx={{
                  color: "grey.500",
                  textDecoration: "none",
                  "&:hover": { color: theme.palette.primary.light },
                }}
              >
                Terms of Service
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
