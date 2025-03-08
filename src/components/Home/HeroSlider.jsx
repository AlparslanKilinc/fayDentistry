import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  alpha,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import office_building from "../../assets/office_building.jpg";
import head_shot from "../../assets/head_shot.jpg";

// Sample slides data
const slides = [
  {
    id: 1,
    image: office_building, 
    title: "Experience the Manhattan Dentistry Difference",
    subtitle: "Quality Dental Care in a Comfortable Environment",
    description: "Our state-of-the-art facility offers comprehensive dental services with a focus on patient comfort and satisfaction.",
    buttonText: "Book Appointment",
    buttonLink: "/contact",
  },
  {
    id: 2,
    image: head_shot,
    title: "Meet Dr. Terese N. Fay",
    subtitle: "Expert Dentist with a Gentle Touch",
    description: "Dr. Fay combines technical expertise with a compassionate approach to deliver exceptional dental care for all patients.",
    buttonText: "Learn More",
    buttonLink: "/dr-fay",
  },
];

const HeroSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "80vh", md: "85vh" },
        maxHeight: 750,
        overflow: "hidden",
      }}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <Box
          key={slide.id}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: currentSlide === index ? 1 : 0,
            zIndex: currentSlide === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(to right, ${alpha(
                theme.palette.common.black,
                0.7
              )}, ${alpha(theme.palette.common.black, 0.3)}), url(${
                slide.image
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Content */}
          <Container
            maxWidth="lg"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
              pt: { xs: 8, md: 0 },
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "60%" },
                animation: currentSlide === index ? "fadeInUp 1s ease" : "none",
                "@keyframes fadeInUp": {
                  from: {
                    opacity: 0,
                    transform: "translate3d(0, 50px, 0)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)",
                  },
                },
              }}
            >
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: theme.palette.primary.light,
                }}
              >
                {slide.subtitle}
              </Typography>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: "white",
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  color: "white",
                  mb: 4,
                  maxWidth: 550,
                }}
              >
                {slide.description}
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to={slide.buttonLink}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  boxShadow: 8,
                }}
              >
                {slide.buttonText}
              </Button>
            </Box>
          </Container>
        </Box>
      ))}

      {/* Navigation Buttons */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 16, md: 40 },
          right: { xs: 16, md: 40 },
          display: "flex",
          gap: 2,
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={prevSlide}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.15)",
            color: "white",
            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.15)",
            color: "white",
            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Slide Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 16, md: 40 },
          left: { xs: 16, md: 40 },
          display: "flex",
          gap: 1,
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: 30,
              height: 4,
              bgcolor: currentSlide === index ? "primary.main" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSlider;