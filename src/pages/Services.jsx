import React, { useState, useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Chip,
  useTheme,
  alpha,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PageHero from "../components/Common/PageHero";
import TestimonialSlider from "../components/Home/TestimonialSlider";
import PhoneIcon from "@mui/icons-material/Phone";
// Import your images
import office_building from "../assets/office_building.jpg";

// Sample services data - would come from your data files in a real app
const servicesData = {
  general: {
    title: "General Dentistry",
    subtitle: "COMPREHENSIVE DENTAL CARE",
    description: "Our general dentistry services focus on preventing, diagnosing, and treating common dental issues. We provide comprehensive care to maintain your oral health and prevent problems before they start.",
    image: office_building,
    benefits: [
      "Comprehensive Dental Exams",
      "Professional Cleanings",
      "Digital X-Rays",
      "Oral Cancer Screenings",
      "Fluoride Treatments",
      "Dental Sealants",
      "Periodontal (Gum) Disease Treatment",
      "Custom Mouthguards"
    ],
    treatments: [
      {
        name: "Comprehensive Dental Exams",
        description: "Our thorough exams assess your overall oral health, including teeth, gums, and mouth tissues. We check for cavities, gum disease, and other potential issues to catch problems early.",
        duration: "30-60 minutes",
        maintenance: "Recommended every 6 months for most patients"
      },
      {
        name: "Professional Cleanings",
        description: "Regular cleanings remove plaque and tartar buildup that regular brushing can't address. Our hygienists also polish teeth to remove surface stains and provide personalized oral hygiene instructions.",
        duration: "45-60 minutes",
        maintenance: "Typically recommended every 6 months"
      },
      {
        name: "Digital X-Rays",
        description: "We use low-radiation digital X-rays to detect issues not visible during a regular exam, such as decay between teeth, problems below the gum line, and issues with jaw alignment.",
        duration: "10-15 minutes",
        maintenance: "Frequency varies based on your dental history and risk factors"
      },
      {
        name: "Periodontal (Gum) Disease Treatment",
        description: "For patients with gum disease, we offer treatments including deep cleaning (scaling and root planing), localized antibiotic therapy, and ongoing maintenance to restore gum health.",
        duration: "Varies depending on treatment needed",
        maintenance: "Follow-up visits typically every 3-4 months"
      }
    ],
    faqs: [
      {
        question: "How often should I have a dental check-up?",
        answer: "Most patients should visit the dentist every six months for a check-up and professional cleaning. However, Dr. Fay may recommend more frequent visits based on your specific oral health needs and risk factors."
      },
      {
        question: "Are dental X-rays safe?",
        answer: "Yes, dental X-rays are safe. We use digital X-rays, which emit significantly less radiation than traditional film X-rays. We also take precautions such as using lead aprons to minimize exposure."
      },
      {
        question: "How can I prevent cavities?",
        answer: "Preventing cavities involves regular brushing with fluoride toothpaste, daily flossing, limiting sugary foods and drinks, getting regular dental check-ups, and considering preventive treatments like dental sealants and fluoride treatments."
      }
    ]
  },
  cosmetic: {
    title: "Cosmetic Dentistry",
    subtitle: "ENHANCE YOUR SMILE",
    description: "Our cosmetic dentistry services are designed to improve the appearance of your smile through various treatments that enhance the color, shape, size, and alignment of your teeth.",
    image: office_building,
    benefits: [
      "Professional Teeth Whitening",
      "Porcelain Veneers",
      "Dental Bonding",
      "Smile Makeovers",
      "Gum Contouring",
      "Tooth-Colored Fillings",
      "Enamel Shaping",
      "Dental Crowns"
    ],
    treatments: [
      {
        name: "Professional Teeth Whitening",
        description: "We offer both in-office and take-home whitening options to brighten your smile. Our professional-strength treatments are more effective than over-the-counter products and provide more predictable results.",
        duration: "In-office: 60-90 minutes; Take-home: 1-2 weeks of daily use",
        maintenance: "Results can last 1-3 years depending on habits; touch-ups recommended as needed"
      },
      {
        name: "Porcelain Veneers",
        description: "Veneers are thin shells of porcelain that are bonded to the front of teeth to improve their appearance. They can correct issues like discoloration, chips, cracks, gaps, and minor misalignment.",
        duration: "Typically requires 2-3 appointments over 2-4 weeks",
        maintenance: "7-15 years with proper care; avoid biting hard objects"
      },
      {
        name: "Dental Bonding",
        description: "Bonding uses tooth-colored resin to repair chips, cracks, gaps, and discoloration. This conservative treatment preserves most of your natural tooth structure while improving aesthetics.",
        duration: "30-60 minutes per tooth, usually completed in one visit",
        maintenance: "3-10 years depending on location and habits"
      },
      {
        name: "Smile Makeovers",
        description: "A comprehensive approach combining multiple cosmetic treatments to achieve your ideal smile. Dr. Fay will create a personalized treatment plan based on your specific goals and needs.",
        duration: "Varies depending on treatments included",
        maintenance: "Varies based on procedures; regular check-ups recommended"
      }
    ],
    faqs: [
      {
        question: "How long do porcelain veneers last?",
        answer: "With proper care, porcelain veneers typically last 10-15 years. To maximize their lifespan, avoid biting hard objects, wear a nightguard if you grind your teeth, and maintain good oral hygiene."
      },
      {
        question: "Is teeth whitening safe?",
        answer: "Yes, professional teeth whitening is safe when performed under dental supervision. We assess your oral health before whitening to ensure you're a good candidate and use high-quality products designed to minimize sensitivity."
      },
      {
        question: "What's the difference between bonding and veneers?",
        answer: "Dental bonding uses composite resin that's applied directly to the tooth, shaped, and hardened. It's less expensive and can be completed in one visit, but isn't as durable or stain-resistant as veneers. Porcelain veneers are custom-made shells that require some tooth preparation but offer superior aesthetics and longevity."
      }
    ]
  },
  orthodontics: {
    title: "Orthodontics",
    subtitle: "STRAIGHTEN YOUR SMILE",
    description: "Our orthodontic services focus on correcting misaligned teeth and jaws to improve both the appearance and function of your smile. We offer modern solutions that fit your lifestyle.",
    image: office_building,
    benefits: [
      "Invisalign Clear Aligners",
      "Traditional Braces",
      "Retainers",
      "Early Intervention Orthodontics",
      "Improved Smile Aesthetics",
      "Better Dental Function",
      "Easier Cleaning",
      "Long-term Oral Health"
    ],
    treatments: [
      {
        name: "Invisalign Clear Aligners",
        description: "Invisalign uses a series of clear, removable aligners to gradually straighten teeth. These virtually invisible aligners are comfortable and allow you to eat, brush, and floss normally during treatment.",
        duration: "6-18 months on average, depending on complexity",
        maintenance: "Retainers recommended after treatment to maintain results"
      },
      {
        name: "Traditional Braces",
        description: "Modern metal or ceramic brackets bonded to teeth and connected by wires. These are still the gold standard for treating complex orthodontic issues and have become more comfortable and less noticeable.",
        duration: "12-24 months on average",
        maintenance: "Retainers required after treatment"
      },
      {
        name: "Retainers",
        description: "Custom-made devices worn after orthodontic treatment to maintain the new position of your teeth. We offer both removable and fixed (bonded) retainers based on your needs.",
        duration: "Typically worn full-time initially, then nights only",
        maintenance: "Regular check-ups to ensure proper fit"
      },
      {
        name: "Early Intervention Orthodontics",
        description: "Preventive treatment for children to address developing orthodontic issues early, potentially reducing the need for extensive treatment later. Typically recommended for children around age 7-8.",
        duration: "Varies based on individual needs",
        maintenance: "May be followed by comprehensive orthodontic treatment later"
      }
    ],
    faqs: [
      {
        question: "Is Invisalign as effective as traditional braces?",
        answer: "Invisalign is highly effective for many orthodontic issues, including mild to moderate crowding, spacing, and some bite problems. For very complex cases, traditional braces may still be recommended. Dr. Fay will assess your specific needs and recommend the most appropriate treatment."
      },
      {
        question: "How often do I need to wear my Invisalign aligners?",
        answer: "Invisalign aligners should be worn for 20-22 hours per day, removing them only to eat, drink (except water), brush, and floss. Consistent wear is crucial for effective treatment and staying on schedule."
      },
      {
        question: "At what age should my child have an orthodontic evaluation?",
        answer: "The American Association of Orthodontists recommends that children have their first orthodontic evaluation by age 7. At this age, we can identify potential issues early when they're easier to correct, though treatment often begins later."
      }
    ]
  }
};

const Services = () => {
  const theme = useTheme();
  const { type } = useParams();
  const [serviceData, setServiceData] = useState(null);
  
  // Get the appropriate service data based on the URL parameter
  useEffect(() => {
    if (type && servicesData[type]) {
      setServiceData(servicesData[type]);
    } else {
      // Default to general if the type doesn't match any service
      setServiceData(servicesData.general);
    }
  }, [type]);
  
  if (!serviceData) {
    return (
      <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero Section */}
      <PageHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        bgImage={serviceData.image}
      />
      
      {/* Main Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          {/* Overview Section */}
          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                {serviceData.title} Services
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                {serviceData.description}
              </Typography>
              
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {serviceData.benefits.slice(0, 4).map((benefit, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleOutlineIcon color="primary" sx={{ mr: 1.5 }} />
                      <Typography variant="body1">{benefit}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/contact"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4 }}
              >
                Schedule a Consultation
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={serviceData.image}
                alt={serviceData.title}
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
          
          {/* Our Treatments Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
              Our {serviceData.title} Treatments
            </Typography>
            
            <Grid container spacing={4}>
              {serviceData.treatments.map((treatment, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={8}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                          {treatment.name}
                        </Typography>
                        <Typography variant="body1" paragraph>
                          {treatment.description}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            bgcolor: alpha(theme.palette.primary.main, 0.05),
                            borderRadius: 2,
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <AccessTimeIcon color="primary" sx={{ mr: 1.5 }} />
                            <Box>
                              <Typography variant="subtitle2" color="text.secondary">
                                Treatment Time
                              </Typography>
                              <Typography variant="body2">
                                {treatment.duration}
                              </Typography>
                            </Box>
                          </Box>
                          <Divider sx={{ my: 1.5 }} />
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <HealthAndSafetyIcon color="primary" sx={{ mr: 1.5 }} />
                            <Box>
                              <Typography variant="subtitle2" color="text.secondary">
                                Maintenance
                              </Typography>
                              <Typography variant="body2">
                                {treatment.maintenance}
                              </Typography>
                            </Box>
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* Benefits Section */}
          <Box 
            sx={{ 
              mb: 8, 
              p: 4, 
              borderRadius: 3, 
              bgcolor: 'grey.50',
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
              Benefits of Our {serviceData.title} Services
            </Typography>
            
            <Grid container spacing={3}>
              {serviceData.benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card 
                    elevation={1} 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      p: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 3,
                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                      },
                    }}
                  >
                    <DoneIcon 
                      color="primary" 
                      sx={{ 
                        fontSize: 40, 
                        mb: 2,
                        p: 1,
                        borderRadius: '50%',
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                      }} 
                    />
                    <Typography variant="h6">{benefit}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* FAQs Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
              Frequently Asked Questions
            </Typography>
            
            <Grid container spacing={4}>
              {serviceData.faqs.map((faq, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {faq.question}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="outlined"
                component={RouterLink}
                to="/faqs"
                endIcon={<ArrowForwardIcon />}
              >
                View All FAQs
              </Button>
            </Box>
          </Box>
          
          {/* Testimonials Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
              What Our Patients Say
            </Typography>
            <TestimonialSlider />
          </Box>
          
          {/* Call to Action */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: alpha(theme.palette.primary.main, 0.05),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Ready to Transform Your Smile?
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                maxWidth: 700, 
                mx: 'auto', 
                mb: 4 
              }}
            >
              Schedule a consultation with Dr. Fay to discuss your {serviceData.title.toLowerCase()} needs and discover how we can help you achieve the smile you've always wanted.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  sx={{ px: 4, py: 1.5 }}
                >
                  Book Your Appointment
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="tel:6312889000"
                  startIcon={<PhoneIcon />}
                  sx={{ px: 4, py: 1.5 }}
                >
                  Call Us: (631) 288-9000
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;