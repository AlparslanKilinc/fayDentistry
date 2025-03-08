import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
  useTheme,
  useMediaQuery,
  Grid,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { alpha } from '@mui/material/styles';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient for 5 years",
    quote: "Dr. Fay is an incredible dentist! She's gentle, thorough, and really takes the time to explain everything. The office is beautiful and the staff is always friendly. I actually look forward to my dental appointments now!",
    rating: 5,
    avatar: null, // Would be an image path in a real app
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "New Patient",
    quote: "As someone with dental anxiety, I can't say enough good things about Dr. Fay and her team. They were patient, understanding, and made me feel comfortable throughout my procedure. The modern technology they use also made everything faster and less painful than I expected.",
    rating: 5,
    avatar: null,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Patient for 3 years",
    quote: "I've been coming to Manhattan Dentistry for my cosmetic dentistry needs and the results have been amazing. Dr. Fay is truly an artist! My smile transformation has boosted my confidence tremendously.",
    rating: 5,
    avatar: null,
  },
  {
    id: 4,
    name: "Robert Williams",
    role: "Patient for 2 years",
    quote: "The level of care and attention to detail at Manhattan Dentistry is unmatched. Dr. Fay took the time to create a comprehensive treatment plan for me, and I've never had better dental health. Worth every penny!",
    rating: 5,
    avatar: null,
  },
];

const TestimonialSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Determine how many testimonials to show at once based on screen size
  const testimonialsPerView = isMobile ? 1 : isTablet ? 2 : 3;
  const maxIndex = Math.ceil(testimonials.length / testimonialsPerView) - 1;
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);
  
  // Get current testimonials to display
  const visibleTestimonials = () => {
    const startIdx = currentIndex * testimonialsPerView;
    return testimonials.slice(startIdx, startIdx + testimonialsPerView);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          mx: -2, // Offset the padding of Grid items
        }}
      >
        <Grid container spacing={3}>
          {visibleTestimonials().map((testimonial) => (
            <Grid item xs={12} md={6} lg={4} key={testimonial.id}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                  position: 'relative',
                  p: 3,
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: alpha(theme.palette.primary.main, 0.2),
                    fontSize: 40,
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
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: 48,
                      height: 48,
                      mr: 2,
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Navigation */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 4,
          gap: 2,
        }}
      >
        <IconButton
          onClick={prevSlide}
          sx={{
            bgcolor: 'grey.100',
            '&:hover': {
              bgcolor: 'primary.light',
              color: 'white',
            },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            bgcolor: 'grey.100',
            '&:hover': {
              bgcolor: 'primary.light',
              color: 'white',
            },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;