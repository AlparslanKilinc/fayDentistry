import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: "Phone",
      content: "(631) 288-9000",
      link: "tel:6312889000",
    },
    {
      icon: <EmailIcon />,
      title: "Email",
      content: "info@faydentistry.com",
      link: "mailto:info@manhattandentistry.com",
    },
    {
      icon: <LocationOnIcon />,
      title: "Address",
      content: "16 Old Riverhead Road, Westhampton Beach, NY",
      link: "https://maps.google.com/?q=16+Old+Riverhead+Road,+Westhampton+Beach,+NY",
    },
    {
      icon: <AccessTimeIcon />,
      title: "Hours",
      content: "Monday-Friday: 9AM-5PM",
      link: null,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                CONTACT US
              </Typography>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Get in Touch with Our Team
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: "text.secondary", mb: 4 }}
              >
                Whether you're a new patient or have been with us for years,
                we're here to answer your questions and provide the dental care
                you need.
              </Typography>

              <Grid container spacing={3}>
                {contactInfo.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper
                      elevation={1}
                      sx={{
                        p: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        borderLeft: `4px solid ${theme.palette.primary.main}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: 3,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "primary.main",
                          mb: 1,
                        }}
                      >
                        {item.icon}
                        <Typography
                          variant="h6"
                          sx={{ ml: 1, fontWeight: 600 }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      {item.link ? (
                        <Typography
                          component="a"
                          href={item.link}
                          target={
                            item.link.startsWith("https") ? "_blank" : undefined
                          }
                          rel={
                            item.link.startsWith("https")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          sx={{
                            color: "text.primary",
                            textDecoration: "none",
                            "&:hover": {
                              color: "primary.main",
                            },
                          }}
                        >
                          {item.content}
                        </Typography>
                      ) : (
                        <Typography variant="body1">{item.content}</Typography>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 6,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                },
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Request an Appointment
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 3, color: "text.secondary" }}
              >
                Fill out the form below and we'll get back to you as soon as
                possible.
              </Typography>

              <Stack spacing={3} component="form">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  type="email"
                  required
                />

                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  required
                />

                <TextField
                  fullWidth
                  label="How can we help you?"
                  variant="outlined"
                  multiline
                  rows={4}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  Send Message
                </Button>

                <Typography
                  variant="caption"
                  align="center"
                  sx={{ color: "text.secondary" }}
                >
                  By submitting this form, you agree to our{" "}
                  <RouterLink
                    to="/privacy-policy"
                    style={{ color: theme.palette.primary.main }}
                  >
                    Privacy Policy
                  </RouterLink>
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
