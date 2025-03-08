import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
  alpha,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PageHero from "../components/Common/PageHero";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import sample images - replace with your actual imports
import office_building from "../assets/office_building.jpg";
import personalized_care from "../assets/personalized_care.jpg";
import excellence from "../assets/excel.jpg";
import integrated_approach from "../assets/integrated_approach.jpg";

// Sample mission data - would come from your JSON file in a real app
const missionData = {
  headerTitle: "PERSONALIZED DENTISTRY BUILT ON ART, SCIENCE AND CARE",
  headerContent: "Our goal is to promote oral wellness; deliver exquisitely crafted, quality dentistry; provide personalized care; and embrace our role in improving the look of your smile. We partner closely with patients to maximize comfort, function, health and aesthetics for a lifetime. We aim to be at the forefront of dental knowledge and technology so that we may bring you best in dentistry. Our approach is comprehensive, customized and caring, with a high regard for the patient.",
  mission: [
    {
      title: "PERSONALIZED CARE",
      image: personalized_care,
      content: [
        "We believe that each patient is unique, with individual needs, concerns, and goals. Our approach to dentistry is centered around understanding these unique factors and tailoring our care accordingly.",
        "From the moment you enter our practice, you'll notice the difference in our personalized approach. We take the time to listen, ask questions, and truly understand what matters most to you about your dental health.",
        "This individualized attention extends to every aspect of your care, from treatment planning to appointment scheduling, ensuring that your experience with us is as comfortable and convenient as possible."
      ]
    },
    {
      title: "COMMITMENT TO EXCELLENCE",
      image: excellence,
      content: [
        "Excellence isn't just a goal at Manhattan Dentistry—it's our standard. Dr. Fay and our entire team are committed to providing the highest quality dental care possible, using the latest techniques and technologies.",
        "We continuously invest in advanced education and training to stay at the forefront of dental advancements. This commitment ensures that you receive the most effective and efficient treatments available.",
        "Our dedication to excellence also extends to the materials and equipment we use, the laboratories we partner with, and every detail of your treatment process. Nothing less than the best is acceptable when it comes to your smile."
      ]
    },
    {
      title: "INTEGRATED APPROACH",
      image: integrated_approach,
      content: [
        "We understand that oral health is intricately connected to overall wellness. Our integrated approach recognizes these connections and addresses dental care as an important component of your complete health picture.",
        "By taking a comprehensive view of your health needs, we can provide treatments that not only improve your smile but contribute to your overall wellbeing.",
        "This holistic perspective allows us to collaborate with other healthcare providers when necessary, ensuring that your dental care complements any other medical treatments you may be receiving."
      ]
    }
  ],
  coreValues: [
    "Patient-Centered Care",
    "Integrity and Transparency",
    "Continuous Innovation",
    "Compassion and Empathy",
    "Excellence in All We Do",
    "Community Involvement"
  ]
};

const Mission = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Box>
      {/* Hero Section */}
      <PageHero
        title="Our Mission"
        subtitle="WHAT DRIVES US EVERY DAY"
        bgImage={office_building}
      />
      
      {/* Mission Statement Section */}
      <Box 
        sx={{ 
          bgcolor: theme.palette.background.paper,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={office_building}
                alt="Manhattan Dentistry Office"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                OUR MISSION
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                {missionData.headerTitle}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: 'text.secondary', mb: 3 }}
              >
                {missionData.headerContent}
              </Typography>
              
              {/* Core Values */}
              <Typography
                variant="h6"
                sx={{ 
                  mt: 4, 
                  mb: 2,
                  fontWeight: 600,
                  color: theme.palette.secondary.main,
                }}
              >
                OUR CORE VALUES
              </Typography>
              <Grid container spacing={2}>
                {missionData.coreValues.map((value, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CheckCircleOutlineIcon 
                        color="secondary" 
                        sx={{ mr: 1.5 }} 
                      />
                      <Typography variant="body1">{value}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Divider */}
      <Box
        sx={{
          height: 100,
          backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          The Pillars of Our Practice
        </Typography>
      </Box>
      
      {/* Mission Pillars */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {missionData.mission.map((item, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                mb: 6,
                overflow: 'hidden',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <Grid container>
                {/* Image Section - alternating left/right */}
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{
                    order: { xs: 0, md: index % 2 === 0 ? 0 : 1 },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
                
                {/* Content Section */}
                <Grid
                  item
                  xs={12}
                  md={7}
                  sx={{
                    order: { xs: 1, md: index % 2 === 0 ? 1 : 0 },
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 3, md: 5 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                        borderBottom: `2px solid ${theme.palette.primary.main}`,
                        pb: 1,
                        display: 'inline-block',
                      }}
                    >
                      {item.title}
                    </Typography>
                    
                    {item.content.map((paragraph, idx) => (
                      <Typography
                        key={idx}
                        variant="body1"
                        paragraph
                        sx={{ color: 'text.secondary', my: 1 }}
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          ))}
          
          {/* Call to Action */}
          <Box
            sx={{
              textAlign: 'center',
              mt: 8,
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Experience Our Mission in Practice
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                mb: 4,
              }}
            >
              We invite you to experience our commitment to excellence, personalized care, and integrated approach firsthand. Schedule a consultation with Dr. Fay today and discover the Manhattan Dentistry difference.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/contact"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5 }}
            >
              Book Your Appointment
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Mission;