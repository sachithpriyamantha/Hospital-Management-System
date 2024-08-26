import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ser1 from '../assets/ser1.jpg';
import ser2 from '../assets/ser2.jpg';
import ser3 from '../assets/ser3.jpg';
import ser4 from '../assets/ser4.jpg';
import hos1 from '../assets/hos1.jpg';

// Styled Components
const StyledBox = styled(Box)({
  flexGrow: 1,
  padding: '5%', 
  backgroundColor: '#E0F7FA',
  backgroundImage: `url(${hos1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const StyledPaper = styled(Paper)({
  padding: '5%', 
  transition: 'transform 0.3s, box-shadow 0.3s',
  height: '100%',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  },
});

function Homediv3() {
  return (
    <StyledBox>
      <Typography variant="h2" align="center" fontWeight="bold" fontSize="2rem" gutterBottom>
        Services
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <Box
              component="img"
              src={ser1}
              alt="General Consultation"
              sx={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <Typography variant="h6" align="center" gutterBottom>General Consultation</Typography>
            <Typography variant="body1">
              Our general consultation service is available to address your health concerns and provide you with expert advice.
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <Box
              component="img"
              src={ser2}
              alt="Emergency Services"
              sx={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <Typography variant="h6" align="center" gutterBottom>Emergency Services</Typography>
            <Typography variant="body1">
              We provide 24/7 emergency services to ensure you receive immediate care when you need it the most.
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <Box
              component="img"
              src={ser3}
              alt="Specialist Services"
              sx={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <Typography variant="h6" align="center" gutterBottom>Specialist Services</Typography>
            <Typography variant="body1">
              Our specialists are here to offer advanced medical treatments and personalized care for complex health issues.
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <Box
              component="img"
              src={ser4}
              alt="Inpatient and Outpatient Care"
              sx={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <Typography variant="h6" align="center" gutterBottom>Inpatient and Outpatient Care</Typography>
            <Typography variant="body1">
              We offer comprehensive inpatient and outpatient care to meet all your healthcare needs.
            </Typography>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledBox>
  );
}

export default Homediv3;
