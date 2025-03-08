import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Container, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Collapse, 
  Typography, 
  useTheme, 
  useScrollTrigger,
  Slide,
  Divider,
  Avatar,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import logo from '../../assets/logo.png';
import TopInfo from './TopInfo';

// Hide AppBar on scroll down
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Styled components
const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '0.9rem',
  fontWeight: 600,
  padding: '8px 12px',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '2px',
    bottom: '4px',
    left: '50%',
    background: theme.palette.common.white,
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    backgroundColor: 'transparent',
    '&:after': {
      width: '80%',
      left: '10%',
    },
  },
}));

const MobileNavItem = styled(ListItem)(({ theme }) => ({
  padding: '12px 24px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

// Main Header Component
const Header = ({ isMobile }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Service menu items
  const servicesList = [
    { name: 'General Dentistry', path: '/services/general' },
    { name: 'Cosmetic Dentistry', path: '/services/cosmetic' },
    { name: 'Orthodontics', path: '/services/orthodontics' },
  ];

  // Navigation items
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'DR. FAY', path: '/dr-fay' },
    { name: 'MISSION', path: '/mission' },
    { name: 'SERVICES', path: '#', hasSubmenu: true, submenuItems: servicesList },
    { name: 'TESTIMONIALS', path: '/testimonials' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  // Handle mobile drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle services submenu toggle
  const handleServicesToggle = () => {
    setServicesOpen(!servicesOpen);
  };

  // Update header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Mobile drawer content
  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Avatar 
          src={logo} 
          alt="Logo" 
          variant="square"
          sx={{ width: 100, height: 50, objectFit: 'contain' }}
        />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.name}>
            {item.hasSubmenu ? (
              <>
                <MobileNavItem button onClick={handleServicesToggle}>
                  <ListItemText 
                    primary={item.name} 
                    primaryTypographyProps={{ 
                      fontWeight: 600,
                      fontSize: '0.95rem',
                    }} 
                  />
                  {servicesOpen ? <ExpandLess /> : <ExpandMore />}
                </MobileNavItem>
                <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.submenuItems.map((subItem) => (
                      <MobileNavItem 
                        button 
                        key={subItem.name}
                        component={RouterLink}
                        to={subItem.path}
                        onClick={handleDrawerToggle}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText 
                          primary={subItem.name} 
                          primaryTypographyProps={{ 
                            fontSize: '0.9rem',
                          }} 
                        />
                      </MobileNavItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <MobileNavItem 
                button 
                component={RouterLink} 
                to={item.path}
                onClick={handleDrawerToggle}
              >
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{ 
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  }} 
                />
              </MobileNavItem>
            )}
          </React.Fragment>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
          Contact Information
        </Typography>
        <Stack spacing={1}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneInTalkIcon fontSize="small" color="primary" />
            <Typography variant="body2">631-288-9000</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon fontSize="small" color="primary" />
            <Typography variant="body2">16 Old Riverhead Road, Westhampton Beach</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <IconButton color="primary" aria-label="facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary" aria-label="youtube">
              <YouTubeIcon />
            </IconButton>
            <IconButton color="primary" aria-label="instagram">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Top Info Bar */}
      {!isMobile && <TopInfo />}
      
      {/* Main Navigation */}
      <HideOnScroll>
        <AppBar 
          position="sticky" 
          elevation={scrolled ? 4 : 0}
          sx={{ 
            bgcolor: scrolled ? 'white' : theme.palette.primary.main,
            transition: 'all 0.3s ease',
            '& .MuiToolbar-root': {
              transition: 'all 0.3s ease',
              minHeight: scrolled ? 64 : 80,
            }
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Mobile View */}
              {isMobile && (
                <>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <IconButton
                      color={scrolled ? 'primary' : 'inherit'}
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                    
                    <Box 
                      component={RouterLink} 
                      to="/"
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        textDecoration: 'none',
                      }}
                    >
                      <Avatar 
                        src={logo} 
                        alt="Logo" 
                        variant="square"
                        sx={{ 
                          width: 120,
                          height: 60,
                          objectFit: 'contain',
                          mr: 1
                        }}
                      />
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton 
                        color={scrolled ? 'primary' : 'inherit'}
                        aria-label="make appointment"
                        component={RouterLink}
                        to="/contact"
                      >
                        <CalendarTodayIcon />
                      </IconButton>
                      <IconButton 
                        color={scrolled ? 'primary' : 'inherit'}
                        aria-label="call us"
                        href="tel:6312889000"
                      >
                        <PhoneInTalkIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </>
              )}

              {/* Desktop View */}
              {!isMobile && (
                <>
                  <Box 
                    component={RouterLink} 
                    to="/"
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      textDecoration: 'none',
                      mr: 4
                    }}
                  >
                    <Avatar 
                      src={logo} 
                      alt="Logo" 
                      variant="square"
                      sx={{ 
                        width: 150,
                        height: 75,
                        objectFit: 'contain',
                        filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    {navItems.map((item) => (
                      <Box key={item.name} sx={{ position: 'relative' }}>
                        {item.hasSubmenu ? (
                          <>
                            <NavButton
                              sx={{
                                color: scrolled ? 'text.primary' : 'white',
                                '&:after': {
                                  background: scrolled ? 'primary.main' : 'white',
                                },
                              }}
                              aria-haspopup="true"
                              onClick={() => setServicesOpen(!servicesOpen)}
                            >
                              {item.name}
                              {servicesOpen ? <ExpandLess sx={{ ml: 0.5 }} /> : <ExpandMore sx={{ ml: 0.5 }} />}
                            </NavButton>
                            <Collapse in={servicesOpen} timeout="auto" unmountOnExit sx={{ 
                              position: 'absolute', 
                              top: '100%', 
                              left: 0, 
                              zIndex: 10,
                              minWidth: 200,
                              boxShadow: 3,
                              bgcolor: 'background.paper',
                              borderRadius: 1,
                            }}>
                              <List component="div" disablePadding>
                                {item.submenuItems.map((subItem) => (
                                  <ListItem 
                                    button 
                                    key={subItem.name}
                                    component={RouterLink}
                                    to={subItem.path}
                                    onClick={() => setServicesOpen(false)}
                                    sx={{ 
                                      py: 1,
                                      '&:hover': {
                                        bgcolor: 'primary.light',
                                        color: 'white',
                                      },
                                    }}
                                  >
                                    <ListItemText 
                                      primary={subItem.name} 
                                      primaryTypographyProps={{ 
                                        fontSize: '0.85rem',
                                      }} 
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          </>
                        ) : (
                          <NavButton
                            component={RouterLink}
                            to={item.path}
                            sx={{
                              color: scrolled ? 'text.primary' : 'white',
                              '&:after': {
                                background: scrolled ? 'primary.main' : 'white',
                              },
                            }}
                          >
                            {item.name}
                          </NavButton>
                        )}
                      </Box>
                    ))}
                  </Box>
                  
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to="/contact"
                    startIcon={<CalendarTodayIcon />}
                    sx={{
                      bgcolor: scrolled ? 'primary.main' : 'white',
                      color: scrolled ? 'white' : 'primary.main',
                      '&:hover': {
                        bgcolor: scrolled ? 'primary.dark' : 'grey.100',
                      },
                    }}
                  >
                    Book Appointment
                  </Button>
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;