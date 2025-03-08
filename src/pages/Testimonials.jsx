import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Rating,
  Avatar,
  Button,
  Tabs,
  Tab,
  Divider,
  Paper,
  useTheme,
  alpha,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import PageHero from "../components/Common/PageHero";
import office_building from "../assets/office_building.jpg";

// Sample testimonials data - would come from your data files in a real app
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient for 5 years",
    quote: "Dr. Fay is an incredible dentist! She's gentle, thorough, and really takes the time to explain everything. The office is beautiful and the staff is always friendly. I actually look forward to my dental appointments now!",
    rating: 5,
    category: "general",
    avatar: null, // Would be an image path in a real app
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "New Patient",
    quote: "As someone with dental anxiety, I can't say enough good things about Dr. Fay and her team. They were patient, understanding, and made me feel comfortable throughout my procedure. The modern technology they use also made everything faster and less painful than I expected.",
    rating: 5,
    category: "general",
    avatar: null,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Patient for 3 years",
    quote: "I've been coming to Manhattan Dentistry for my cosmetic dentistry needs and the results have been amazing. Dr. Fay is truly an artist! My smile transformation has boosted my confidence tremendously.",
    rating: 5,
    category: "cosmetic",
    avatar: null,
  },
  {
    id: 4,
    name: "Robert Williams",
    role: "Patient for 2 years",
    quote: "The level of care and attention to detail at Manhattan Dentistry is unmatched. Dr. Fay took the time to create a comprehensive treatment plan for me, and I've never had better dental health. Worth every penny!",
    rating: 5,
    category: "general",
    avatar: null,
  },
  {
    id: 5,
    name: "Jennifer Adams",
    role: "Invisalign Patient",
    quote: "I completed my Invisalign treatment with Dr. Fay and couldn't be happier with the results! The entire process was smooth, and Dr. Fay made sure I was comfortable every step of the way. I'm finally confident in my smile.",
    rating: 5,
    category: "orthodontics",
    avatar: null,
  },
  {
    id: 6,
    name: "David Martinez",
    role: "Patient for 1 year",
    quote: "After moving to New York, I was worried about finding a good dentist. Dr. Fay exceeded all my expectations. Her attention to preventative care has kept my teeth in excellent condition, and the staff always remembers my name and preferences.",
    rating: 5,
    category: "preventative",
    avatar: null,
  },
  {
    id: 7,
    name: "Lisa Thompson",
    role: "Dental Implant Patient",
    quote: "Getting a dental implant was a big decision for me, but Dr. Fay made the process seem easy. She took the time to explain all my options and was there for me from start to finish. My implant looks and feels just like my natural tooth!",
    rating: 5,
    category: "restorative",
    avatar: null,
  },
  {
    id: 8,
    name: "James Wilson",
    role: "Veneers Patient",
    quote: "My veneers from Dr. Fay completely transformed my smile! The attention to detail and customization was impressive. She worked with me to ensure the color, shape, and size were perfect. I get compliments on my smile all the time now.",
    rating: 5,
    category: "cosmetic",
    avatar: null,
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Filter testimonials based on active tab
  const filteredTestimonials = activeTab === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeTab);

  return (
    <Box>
      {/* Hero Section */}
      <PageHero
        title="Patient Testimonials"
        subtitle="WHAT OUR PATIENTS SAY"
        bgImage={office_building}
      />

      {/* Main Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Real Stories from Our Patients
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
              Don't just take our word for it. Read what our patients have to say about their experiences at Manhattan Dentistry.
            </Typography>
          </Box>

          {/* Tabs for filtering */}
          <Paper 
            elevation={1}
            sx={{ 
              borderRadius: 2, 
              mb: 5,
              mx: 'auto',
              maxWidth: 800,
              overflow: 'hidden'
            }}
          >
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                '& .MuiTabs-indicator': {
                  height: 3,
                },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  minHeight: 64,
                }
              }}
            >
              <Tab label="All Reviews" value="all" />
              <Tab label="General Dentistry" value="general" />
              <Tab label="Cosmetic Dentistry" value="cosmetic" />
              <Tab label="Restorative Dentistry" value="restorative" />
              <Tab label="Orthodontics" value="orthodontics" />
              <Tab label="Preventative Care" value="preventative" />
            </Tabs>
          </Paper>

          {/* Testimonials Grid */}
          <Grid container spacing={4}>
            {filteredTestimonials.map((testimonial) => (
              <Grid item xs={12} md={6} key={testimonial.id}>
                <Card
                  elevation={2}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    p: 3,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: 5,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    }
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      top: 24,
                      right: 24,
                      color: alpha(theme.palette.primary.main, 0.1),
                      fontSize: 60,
                    }}
                  />
                  
                  <CardContent sx={{ p: 0, flex: '1 0 auto' }}>
                    <Box sx={{ mb: 2 }}>
                      <Rating value={testimonial.rating} readOnly precision={0.5} />
                    </Box>
                    
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        fontStyle: 'italic',
                        mb: 3,
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        minHeight: 150,
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>
                    
                    <Divider sx={{ mb: 3 }} />
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          width: 56,
                          height: 56,
                          mr: 2,
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center', mt: 8, p: 4, bgcolor: 'grey.50', borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Ready to Experience the Difference?
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
              Join our satisfied patients and discover personalized dental care that exceeds expectations. 
              Schedule your appointment today and see what everyone is talking about.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component="a"
              href="/contact"
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

export default Testimonials;