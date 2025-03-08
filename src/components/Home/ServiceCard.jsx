import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  alpha,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServiceCard = ({ title, description, image, link, color }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 3,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 8,
          '& .service-media': {
            transform: 'scale(1.05)',
          },
          '& .service-overlay': {
            opacity: 0,
          },
          '& .service-content': {
            backgroundColor: alpha(color, 0.1),
          },
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          height="240"
          className="service-media"
          sx={{ 
            transition: 'transform 0.5s ease',
          }}
        />
        <Box 
          className="service-overlay"
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: alpha(color, 0.7),
            transition: 'opacity 0.5s ease',
          }}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 700,
            textAlign: 'center',
            width: '90%',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          {title}
        </Typography>
      </Box>
      
      <CardContent 
        className="service-content"
        sx={{ 
          flexGrow: 1, 
          p: 3,
          transition: 'background-color 0.3s ease',
        }}
      >
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Button
          variant="text"
          color="primary"
          component={RouterLink}
          to={link}
          endIcon={<ArrowForwardIcon />}
          sx={{ 
            fontWeight: 600,
            '&:hover': {
              backgroundColor: 'transparent',
              transform: 'translateX(5px)',
            },
            transition: 'transform 0.2s ease',
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;