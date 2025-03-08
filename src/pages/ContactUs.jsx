import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Alert,
  Snackbar,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import PageHero from "../components/Common/PageHero";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";

// Import images
import nyc from "../assets/nyc.jpg";

// Sample contact data - would come from your JSON file in a real app
const contactData = {
  welcome_message: "Welcome to Manhattan Dentistry, where we provide exceptional dental care in a comfortable and friendly environment. Our team is dedicated to ensuring your visit is pleasant and that you receive the personalized attention you deserve. We welcome new patients and are committed to addressing all your dental health needs. Please don't hesitate to reach out with any questions or to schedule an appointment.",
  office_hours: [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 4:00 PM" },
    { day: "Saturday", hours: "By Appointment" },
    { day: "Sunday", hours: "Closed" }
  ],
  contact_details: {
    phone: "631-288-9000",
    email: "info@manhattandentistry.com",
    address: "16 Old Riverhead Road, Westhampton Beach, NY 11978"
  }
};

// Styled components
const ContactIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: '50%',
  width: 56,
  height: 56,
  marginRight: 16,
  flexShrink: 0,
}));

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: ""
  });
  
  // Alert state
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email) {
      setAlertType("error");
      setAlertMessage("Please fill in all required fields");
      setShowAlert(true);
      return;
    }
    
    // In a real app, you would send this data to your server
    console.log("Form submitted:", formData);
    
    // Show success message
    setAlertType("success");
    setAlertMessage("Your message has been sent! We'll get back to you soon.");
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiry: ""
    });
  };
  
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Box>
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        subtitle="GET IN TOUCH WITH OUR TEAM"
        bgImage={nyc}
      />
      
      {/* Main Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          {/* Welcome Message */}
          <Paper 
            elevation={2} 
            sx={{ 
              p: 4, 
              mb: 6, 
              borderRadius: 2,
              maxWidth: 900,
              mx: 'auto',
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, textAlign: 'center' }}>
              WELCOME TO MANHATTAN DENTISTRY
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                color: 'text.secondary',
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              {contactData.welcome_message}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', fontStyle: 'italic', fontWeight: 500 }}>
              Respectfully, Terese N. Fay, DMD
            </Typography>
          </Paper>
          
          <Grid container spacing={6}>
            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
                CONTACT INFORMATION
              </Typography>
              
              <Card 
                sx={{ 
                  mb: 4, 
                  borderRadius: 2,
                  boxShadow: 2,
                  overflow: 'visible',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <ContactIcon>
                      <PhoneIcon />
                    </ContactIcon>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Phone
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        <a 
                          href={`tel:${contactData.contact_details.phone}`} 
                          style={{ 
                            color: theme.palette.text.primary,
                            textDecoration: 'none',
                          }}
                        >
                          {contactData.contact_details.phone}
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <ContactIcon>
                      <EmailIcon />
                    </ContactIcon>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        <a 
                          href={`mailto:${contactData.contact_details.email}`} 
                          style={{ 
                            color: theme.palette.text.primary,
                            textDecoration: 'none',
                          }}
                        >
                          {contactData.contact_details.email}
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ContactIcon>
                      <LocationOnIcon />
                    </ContactIcon>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Address
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        <a 
                          href={`https://maps.google.com/?q=${encodeURIComponent(contactData.contact_details.address)}`} 
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ 
                            color: theme.palette.text.primary,
                            textDecoration: 'none',
                          }}
                        >
                          {contactData.contact_details.address}
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
                OFFICE HOURS
              </Typography>
              
              <Card 
                sx={{ 
                  borderRadius: 2,
                  boxShadow: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <ContactIcon>
                      <AccessTimeIcon />
                    </ContactIcon>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Hours of Operation
                    </Typography>
                  </Box>
                  
                  {contactData.office_hours.map((item, index) => (
                    <Box key={index}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          py: 1.5,
                        }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {item.day}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {item.hours}
                        </Typography>
                      </Box>
                      {index < contactData.office_hours.length - 1 && (
                        <Divider />
                      )}
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
            
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  borderRadius: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 6,
                    height: '100%',
                    backgroundColor: theme.palette.primary.main,
                  }
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                  MAKE AN APPOINTMENT
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 4 }}>
                  Fill out the form below, and our team will be in touch with you shortly to confirm your appointment time.
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Full Name*"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address*"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number (optional, but helpful)"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Is there anything we should know about your inquiry?"
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{ 
                          py: 1.5,
                          px: 4,
                        }}
                      >
                        EMAIL DR. FAY
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Google Maps */}
      <Box sx={{ height: 450, width: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-73.97882258459422!3d40.75056797932666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d!2sMidtown%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1646242221004!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Manhattan Dentistry Location"
        ></iframe>
      </Box>
      
      {/* Alert for form submission */}
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseAlert} 
          severity={alertType} 
          sx={{ width: '100%' }}
          variant="filled"
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;