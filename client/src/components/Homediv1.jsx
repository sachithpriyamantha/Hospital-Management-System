


import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import back2 from '../assets/back2.jpg';
import hos4 from '../assets/hos4.png';

const HeroSection = styled(Box)({

  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  marginTop: 'auto',
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.1)', 
});

const Content = styled(Box)({
  zIndex: 1,
});

const StyledButton = styled(Button)({
  backgroundColor: '#1976d2',
  borderRadius: '15px',
  color: '#fff',
  marginTop: '5%',
  padding: '10px 20px', 
  '&:hover': {
    backgroundColor: '#115293',
  },
});

const ImageContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  textAlign: 'right',
  position: 'absolute',
  marginTop : '-7.3%'
});

const HeroTypography = styled(Typography)({
  fontSize: '2.5rem', 
  '@media (max-width:600px)': {
    fontSize: '2rem', 
  },
});

const HeroSubTypography = styled(Typography)({
  fontSize: '1.25rem',
  '@media (max-width:600px)': {
    fontSize: '1rem', 
  },
});

const Homediv1 = () => {
  return (
    <HeroSection>
      <Overlay />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Content>
              <HeroTypography variant="h3" component="h1" gutterBottom>
                Welcome to Vitality Health !
              </HeroTypography>
              <HeroSubTypography variant="h6" component="p" gutterBottom>
                "Your health, our priority. Book your appointment now."
              </HeroSubTypography>
              <StyledButton component={Link} to="/createAppointment" variant="contained">
                Make Appointments
              </StyledButton>
            </Content>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <img
                src={hos4}
                alt="Doctors"
                style={{ width: '90%', height: 'auto' }} 
              />
            </ImageContainer>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Homediv1;