import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  alpha,
  Button,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import PageHero from "../components/Common/PageHero";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import drFayContent from "../data/drFayContent.json";
import dr_fay from "../assets/dr_fay.jpg";
import office_building from "../assets/office_building.jpg";

const DrFay = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Manually formatted education data
  const education = [
    "Doctor of Dental Medicine, Tufts University School of Dental Medicine",
    "Bachelor of Science in Biology, Georgetown University",
    "General Practice Residency, St. Vincent's Catholic Medical Centers, New York",
  ];

  // Manually formatted affiliations
  const affiliations = [
    "Academy of General Dentistry",
    "American Academy of Cosmetic Dentistry",
    "American Dental Association",
    "New York State Dental Association",
  ];

  return (
    <Box>
      {/* Hero Section */}
      <PageHero
        title="Dr. Terese N. Fay"
        subtitle="ABOUT YOUR DENTIST"
        bgImage={office_building}
        height={350}
      />

      {/* Main Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          {/* Introduction Section */}
          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: "relative",
                  mb: { xs: 4, md: 0 },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 20,
                    left: 20,
                    right: -20,
                    bottom: -20,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    borderRadius: 2,
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  component="img"
                  src={dr_fay}
                  alt="Dr. Terese N. Fay"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 3,
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                {drFayContent.title}
              </Typography>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Meet Your Dentist
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                {drFayContent.intro}
              </Typography>

              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  my: 4,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.primary.main, 0.06),
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 40,
                      color: theme.palette.primary.main,
                      mr: 2,
                      alignSelf: "flex-start",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontStyle: "italic",
                      fontWeight: 500,
                      color: "text.primary",
                      lineHeight: 1.6,
                    }}
                  >
                    {drFayContent.quote.replaceAll('"', "")}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Credentials Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 700,
                textAlign: "center",
                position: "relative",
                mb: 5,
                "&::after": {
                  content: '""',
                  display: "block",
                  width: 80,
                  height: 4,
                  backgroundColor: theme.palette.primary.main,
                  margin: "16px auto 0",
                },
              }}
            >
              Education & Credentials
            </Typography>

            <Grid container spacing={4}>
              {/* Education Card */}
              <Grid item xs={12} md={6}>
                <Card
                  elevation={1}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Avatar
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          width: 56,
                          height: 56,
                          mr: 2,
                        }}
                      >
                        <CheckCircleOutlineIcon fontSize="large" />
                      </Avatar>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Education
                      </Typography>
                    </Box>

                    <List disablePadding>
                      {education.map((item, index) => (
                        <React.Fragment key={index}>
                          <ListItem
                            alignItems="flex-start"
                            sx={{ px: 0, py: 2 }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 36,
                                color: theme.palette.primary.main,
                              }}
                            >
                              <CheckCircleOutlineIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="subtitle1"
                                  sx={{ fontWeight: 600 }}
                                >
                                  {item}
                                </Typography>
                              }
                            />
                          </ListItem>
                          {index < education.length - 1 && (
                            <Divider variant="inset" component="li" />
                          )}
                        </React.Fragment>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>

              {/* Affiliations Card */}
              <Grid item xs={12} md={6}>
                <Card
                  elevation={1}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Avatar
                        sx={{
                          bgcolor: theme.palette.secondary.main,
                          width: 56,
                          height: 56,
                          mr: 2,
                        }}
                      >
                        <CheckCircleOutlineIcon fontSize="large" />
                      </Avatar>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Professional Affiliations
                      </Typography>
                    </Box>

                    <List disablePadding>
                      {affiliations.map((item, index) => (
                        <React.Fragment key={index}>
                          <ListItem
                            alignItems="flex-start"
                            sx={{ px: 0, py: 2 }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 36,
                                color: theme.palette.secondary.main,
                              }}
                            >
                              <CheckCircleOutlineIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography
                                  variant="subtitle1"
                                  sx={{ fontWeight: 500 }}
                                >
                                  {item}
                                </Typography>
                              }
                            />
                          </ListItem>
                          {index < affiliations.length - 1 && (
                            <Divider variant="inset" component="li" />
                          )}
                        </React.Fragment>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Philosophy and Approach Section */}
          <Box
            sx={{
              mb: 8,
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              bgcolor: "grey.50",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 700,
                textAlign: "center",
                mb: 5,
                position: "relative",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: 80,
                  height: 4,
                  backgroundColor: theme.palette.primary.main,
                  margin: "16px auto 0",
                },
              }}
            >
              Philosophy & Approach
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 2,
                    borderTop: `4px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "primary.main", mb: 3 }}
                  >
                    Dental Philosophy
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "text.secondary", lineHeight: 1.8 }}
                  >
                    {drFayContent.philosophy}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.8 }}
                  >
                    {drFayContent.approach}
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 2,
                    borderTop: `4px solid ${theme.palette.secondary.main}`,
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "secondary.main", mb: 3 }}
                  >
                    Patient Care Approach
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "text.secondary", lineHeight: 1.8 }}
                  >
                    {drFayContent.careApproach}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.8 }}
                  >
                    {drFayContent.continuingEducation}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  color: "text.secondary",
                  maxWidth: 800,
                  mx: "auto",
                  mb: 4,
                }}
              >
                {drFayContent.affiliations}
              </Typography>

              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/contact"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.5 }}
              >
                Schedule an Appointment
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DrFay;
