import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Link,
  useTheme,
} from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const TopInfo = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        bgcolor: 'grey.50', 
        py: 1,
        borderBottom: '1px solid',
        borderColor: 'grey.100',
      }}
    >
      <Container maxWidth="xl">
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
          }}
        >
          <Stack 
            direction="row" 
            spacing={3} 
            divider={
              <Box 
                component="span" 
                sx={{ 
                  borderLeft: '1px solid', 
                  borderColor: 'grey.300',
                  mx: 1,
                }} 
              />
            }
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneInTalkIcon 
                fontSize="small" 
                color="primary" 
              />
              <Link 
                href="tel:6312889000" 
                underline="none" 
                color="text.secondary"
                sx={{ 
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                631-288-9000
              </Link>
            </Stack>
            
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon 
                fontSize="small" 
                color="primary" 
              />
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                16 Old Riverhead Road, Westhampton Beach
              </Typography>
            </Stack>
            
            <Stack direction="row" spacing={1} alignItems="center">
              <AccessTimeIcon 
                fontSize="small" 
                color="primary" 
              />
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                Mon-Fri: 9AM-5PM
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton 
              size="small" 
              color="primary" 
              aria-label="facebook"
              sx={{ 
                '&:hover': { 
                  bgcolor: theme.palette.primary.light,
                  color: 'white',
                },
              }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              color="primary" 
              aria-label="youtube"
              sx={{ 
                '&:hover': { 
                  bgcolor: theme.palette.primary.light,
                  color: 'white',
                },
              }}
            >
              <YouTubeIcon fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              color="primary" 
              aria-label="instagram"
              sx={{ 
                '&:hover': { 
                  bgcolor: theme.palette.primary.light,
                  color: 'white',
                },
              }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default TopInfo;