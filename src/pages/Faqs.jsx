import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
  Tabs,
  Tab,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  alpha
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DoneIcon from "@mui/icons-material/Done";
import { Link as RouterLink } from "react-router-dom";
import PageHero from "../components/Common/PageHero";
import office_building from "../assets/office_building.jpg";

// Sample FAQ data - would come from your data files in a real app
const faqData = [
  {
    id: 1,
    question: "How often should I visit the dentist?",
    answer: "Most patients should visit the dentist every six months for regular check-ups and professional cleanings. However, some patients with specific dental conditions may need to visit more frequently. Dr. Fay will recommend an appropriate schedule based on your individual needs.",
    category: "general",
  },
  {
    id: 2,
    question: "What should I do in a dental emergency?",
    answer: "If you experience a dental emergency such as severe pain, a knocked-out tooth, or broken dental work, contact our office immediately at (631) 288-9000. If it's after hours, follow the prompts for emergency care. For a knocked-out tooth, try to place it back in the socket or keep it in milk until you can see Dr. Fay.",
    category: "emergency",
  },
  {
    id: 3,
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major dental insurance plans. Our administrative team will work with you to maximize your benefits and provide estimates of your out-of-pocket costs before treatment. We also offer financing options for patients without insurance or for procedures not fully covered by insurance.",
    category: "payment",
  },
  {
    id: 4,
    question: "How can I improve my smile?",
    answer: "We offer a variety of cosmetic dental treatments to enhance your smile, including professional teeth whitening, porcelain veneers, dental bonding, and Invisalign clear aligners. During a consultation, Dr. Fay will evaluate your specific concerns and recommend the most appropriate options to achieve your desired results.",
    category: "cosmetic",
  },
  {
    id: 5,
    question: "What causes tooth sensitivity and how can it be treated?",
    answer: "Tooth sensitivity can be caused by enamel erosion, gum recession, cavities, cracked teeth, or teeth grinding. Treatment depends on the underlying cause and may include desensitizing toothpaste, fluoride treatments, dental bonding, or addressing the specific dental issue. If you're experiencing sensitivity, schedule an appointment so Dr. Fay can determine the cause and recommend appropriate treatment.",
    category: "general",
  },
  {
    id: 6,
    question: "Are dental X-rays safe?",
    answer: "Yes, dental X-rays are safe. At Manhattan Dentistry, we use digital X-rays, which emit up to 90% less radiation than traditional film X-rays. We also follow the ALARA principle (As Low As Reasonably Achievable) and only take X-rays when necessary for diagnosis and treatment planning.",
    category: "general",
  },
  {
    id: 7,
    question: "How long does teeth whitening last?",
    answer: "The results of professional teeth whitening can last from 6 months to 2 years, depending on your habits. Factors that can stain teeth include consuming coffee, tea, red wine, and tobacco products. To maintain your bright smile, we recommend good oral hygiene, avoiding staining substances, and occasional touch-up treatments.",
    category: "cosmetic",
  },
  {
    id: 8,
    question: "What is the difference between a crown and a veneer?",
    answer: "A crown covers the entire tooth and is used when a tooth is damaged, weakened, or after a root canal. It provides both functional and aesthetic benefits. A veneer, on the other hand, is a thin shell that covers only the front surface of a tooth and is primarily used for cosmetic purposes to improve the appearance of teeth with discoloration, minor misalignment, or spacing issues.",
    category: "restorative",
  },
  {
    id: 9,
    question: "How do I know if I need a root canal?",
    answer: "Signs that you might need a root canal include severe tooth pain, prolonged sensitivity to hot or cold, discoloration of the tooth, swelling or tenderness in the gums, or a persistent pimple on the gums. However, sometimes there are no symptoms. Regular dental check-ups can help detect problems before they become severe enough to require a root canal.",
    category: "restorative",
  },
  {
    id: 10,
    question: "What payment options do you offer?",
    answer: "We accept cash, checks, and most major credit cards. We also work with CareCredit, a healthcare financing solution that offers interest-free payment plans for qualified patients. Our administrative team will discuss all payment options with you and help determine the best choice for your needs.",
    category: "payment",
  },
  {
    id: 11,
    question: "How long does Invisalign treatment take?",
    answer: "The duration of Invisalign treatment varies based on the complexity of your case. On average, treatment takes between 12 to 18 months. However, simple cases may be completed in as little as 6 months, while more complex cases might take up to 24 months. Dr. Fay will provide a more precise timeline after evaluating your specific needs.",
    category: "orthodontics",
  },
  {
    id: 12,
    question: "What should I expect during my first visit?",
    answer: "Your first visit typically includes a comprehensive examination, professional cleaning, necessary X-rays, and a discussion about your oral health goals. Dr. Fay will review your medical and dental history, perform an oral cancer screening, and check for any signs of dental issues. This initial appointment is also an opportunity for you to ask questions and discuss any concerns you may have.",
    category: "general",
  },
];

const Faqs = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setSearchQuery("");
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  // Filter FAQs based on active tab and search query
  const filteredFaqs = faqData
    .filter(faq => activeTab === "all" || faq.category === activeTab)
    .filter(faq => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );
    });

  return (
    <Box>
      {/* Hero Section */}
      <PageHero
        title="Frequently Asked Questions"
        subtitle="FIND THE ANSWERS YOU NEED"
        bgImage={office_building}
      />

      {/* Main Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Left Sidebar */}
            <Grid item xs={12} md={4} lg={3}>
              {/* Search Box */}
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 3, 
                  mb: 4, 
                  borderRadius: 2 
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Search FAQs
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Search by keyword..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 1 }}
                />
              </Paper>

              {/* Categories */}
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 3, 
                  mb: 4, 
                  borderRadius: 2 
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Categories
                </Typography>
                <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  orientation="vertical"
                  variant="scrollable"
                  sx={{
                    '& .MuiTab-root': {
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      textTransform: 'none',
                      fontWeight: 500,
                      py: 1.5,
                    },
                  }}
                >
                  <Tab label="All FAQs" value="all" />
                  <Tab label="General Dentistry" value="general" />
                  <Tab label="Cosmetic Dentistry" value="cosmetic" />
                  <Tab label="Restorative Dentistry" value="restorative" />
                  <Tab label="Orthodontics" value="orthodontics" />
                  <Tab label="Payment & Insurance" value="payment" />
                  <Tab label="Dental Emergencies" value="emergency" />
                </Tabs>
              </Paper>

              {/* Contact Box */}
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Still Have Questions?
                </Typography>
                <Typography variant="body2" paragraph sx={{ mb: 3 }}>
                  Can't find the answer you're looking for? Please contact us directly and we'll be happy to help.
                </Typography>
                <List disablePadding dense>
                  <ListItem disableGutters sx={{ pb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <PhoneIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Typography variant="body2">
                          <a 
                            href="tel:6312889000" 
                            style={{ 
                              color: theme.palette.text.primary,
                              textDecoration: 'none',
                            }}
                          >
                            (631) 288-9000
                          </a>
                        </Typography>
                      } 
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <EmailIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Typography variant="body2">
                          <a 
                            href="mailto:info@manhattandentistry.com" 
                            style={{ 
                              color: theme.palette.text.primary,
                              textDecoration: 'none',
                            }}
                          >
                            info@manhattandentistry.com
                          </a>
                        </Typography>
                      } 
                    />
                  </ListItem>
                </List>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2 }}
                >
                  Contact Us
                </Button>
              </Paper>
            </Grid>

            {/* Main FAQ Content */}
            <Grid item xs={12} md={8} lg={9}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                  Frequently Asked Questions
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Find answers to common questions about our dental services, policies, and procedures.
                </Typography>
              </Box>

              {/* FAQ Search Results Count */}
              {searchQuery && (
                <Box sx={{ mb: 4 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} found for "{searchQuery}"
                  </Typography>
                </Box>
              )}

              {/* No Results */}
              {filteredFaqs.length === 0 && (
                <Paper 
                  elevation={1} 
                  sx={{ 
                    p: 4, 
                    borderRadius: 2,
                    textAlign: 'center',
                    bgcolor: 'grey.50',
                  }}
                >
                  <HelpOutlineIcon sx={{ fontSize: 60, color: 'grey.400', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    No FAQs Found
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                    We couldn't find any FAQs matching your search criteria. Please try a different search term or category.
                  </Typography>
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      setSearchQuery('');
                      setActiveTab('all');
                    }}
                  >
                    View All FAQs
                  </Button>
                </Paper>
              )}

              {/* FAQ Accordions */}
              {filteredFaqs.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  {filteredFaqs.map((faq) => (
                    <Accordion
                      key={faq.id}
                      expanded={expandedFaq === `panel-${faq.id}`}
                      onChange={handleAccordionChange(`panel-${faq.id}`)}
                      elevation={expandedFaq === `panel-${faq.id}` ? 2 : 1}
                      sx={{
                        mb: 2,
                        borderRadius: 2,
                        overflow: 'hidden',
                        '&:before': {
                          display: 'none',
                        },
                        '&.Mui-expanded': {
                          mb: 2,
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          px: 3,
                          backgroundColor: expandedFaq === `panel-${faq.id}` 
                            ? alpha(theme.palette.primary.main, 0.05)
                            : 'white',
                          '& .MuiAccordionSummary-content': {
                            my: 2,
                          },
                        }}
                      >
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600,
                            color: expandedFaq === `panel-${faq.id}` 
                              ? 'primary.main'
                              : 'text.primary',
                          }}
                        >
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 3, pb: 3 }}>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              )}

              {/* Didn't Find Your Answer Box */}
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.secondary.main, 0.05),
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
                  mt: 6,
                }}
              >
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={8}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      Didn't Find Your Answer?
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Contact us directly and we'll be happy to assist you with any questions or concerns.
                    </Typography>
                    <List disablePadding>
                      <ListItem disableGutters sx={{ pb: 1 }}>
                        <ListItemIcon>
                          <DoneIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Quick response times" />
                      </ListItem>
                      <ListItem disableGutters sx={{ pb: 1 }}>
                        <ListItemIcon>
                          <DoneIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Personalized answers to your specific questions" />
                      </ListItem>
                      <ListItem disableGutters>
                        <ListItemIcon>
                          <DoneIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Professional guidance from our knowledgeable team" />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      component={RouterLink}
                      to="/contact"
                      sx={{ px: 3, py: 1.5 }}
                    >
                      Contact Us
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Faqs;