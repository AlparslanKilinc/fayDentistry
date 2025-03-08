import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Avatar,
  Rating,
  Paper,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
// Import sample images - replace these with your actual imports
import office_building from "../assets/office_building.jpg";
import head_shot from "../assets/head_shot.jpg";
import dr_fay from "../assets/dr_fay.jpg";

// Import components
import HeroSlider from "../components/Home/HeroSlider";
import TestimonialSlider from "../components/Home/TestimonialSlider";
import ServiceCard from "../components/Home/ServiceCard";
import ContactSection from "../components/Home/ContactSection";

// Sample data - in a real app, this would come from your data files
const services = [
  {
    id: 1,
    title: "Preventative Dentistry",
    image: office_building,
    description: "Regular check-ups and cleanings to maintain optimal oral health and prevent problems before they start.",
    link: "/services/preventative",
    color: "rgb(73, 190, 138)",
  },
  {
    id: 2,
    title: "Restorative Dentistry",
    image: office_building,
    description: "Repair damaged teeth and restore function with fillings, crowns, bridges and implants.",
    link: "/services/restorative",
    color: "rgb(86, 178, 216)",
  },
  {
    id: 3,
    title: "Cosmetic Dentistry",
    image: office_building,
    description: "Enhance your smile with teeth whitening, veneers, bonding, and cosmetic treatments.",
    link: "/services/cosmetic",
    color: "rgb(79, 116, 176)",
  },
];

const faqHighlights = [
  {
    id: 1,
    question: "How often should I visit the dentist?",
    answer: "Most patients should visit the dentist every six months for regular check-ups and cleanings to maintain optimal oral health."
  },
  {
    id: 2,
    question: "What should I do in a dental emergency?",
    answer: "Contact our office immediately. For after-hours emergencies, call our emergency number and follow the instructions provided."
  },
  {
    id: 3,
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major dental insurance plans. Our staff will work with you to maximize your benefits."
  }
];

const benefits = [
  "State-of-the-art technology and techniques",
  "Personalized treatment plans",
  "Comfortable and relaxing environment",
  "Convenient scheduling options",
  "Transparent pricing and financing options",
  "Gentle and compassionate care"
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box>
      {/* Hero Section */}
      <HeroSlider />

      {/* Welcome Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={dr_fay}
                alt="Dr. Terese N. Fay"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 4,
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
                WELCOME TO MANHATTAN DENTISTRY
              </Typography>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Personalized Dentistry Built on Art, Science, and Care
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                At Manhattan Dentistry, our goal is to promote oral wellness, deliver exquisitely crafted quality dentistry, and provide personalized care. We partner closely with patients to maximize comfort, function, health, and aesthetics for a lifetime.
              </Typography>
              <Box sx={{ mb: 4 }}>
                {benefits.slice(0, 4).map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <CheckCircleOutlineIcon color="primary" sx={{ mr: 1.5 }} />
                    <Typography variant="body1">{benefit}</Typography>
                  </Box>
                ))}
              </Box>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={RouterLink}
                to="/dr-fay"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4 }}
              >
                Meet Dr. Fay
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="h6" color="primary" gutterBottom>
              OUR SERVICES
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Comprehensive Dental Care
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary', 
                maxWidth: 700, 
                mx: 'auto',
                mb: 2
              }}
            >
              We offer a wide range of dental services to meet all your oral health needs in one convenient location.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} md={4} key={service.id}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                  color={service.color}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="outlined"
              color="primary"
              component={RouterLink}
              to="/services/general"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4 }}
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box 
        sx={{ 
          py: { xs: 6, md: 8 },
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${office_building})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                  15+
                </Typography>
                <Typography variant="h6">Years Experience</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                  3,000+
                </Typography>
                <Typography variant="h6">Happy Patients</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                  500+
                </Typography>
                <Typography variant="h6">Smile Makeovers</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                  100%
                </Typography>
                <Typography variant="h6">Patient Satisfaction</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="h6" color="primary" gutterBottom>
              TESTIMONIALS
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              What Our Patients Say
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary', 
                maxWidth: 700, 
                mx: 'auto',
                mb: 2
              }}
            >
              Don't just take our word for it. Read what our satisfied patients have to say about their experience at Manhattan Dentistry.
            </Typography>
          </Box>

          <TestimonialSlider />

          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button
              variant="outlined"
              color="primary"
              component={RouterLink}
              to="/testimonials"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4 }}
            >
              Read More Testimonials
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FAQ Highlights */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="h6" color="primary" gutterBottom>
                COMMON QUESTIONS
              </Typography>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Frequently Asked Questions
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                We've compiled answers to some of the most common questions our patients ask. If you don't see your question here, feel free to contact us.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/faqs"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4 }}
              >
                See All FAQs
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                {faqHighlights.map((faq) => (
                  <Paper 
                    key={faq.id} 
                    elevation={1}
                    sx={{ 
                      p: 3, 
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: 6,
                        transform: 'translateY(-4px)',
                      }
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                      {faq.question}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <ContactSection />
    </Box>
  );
};

export default Home;
