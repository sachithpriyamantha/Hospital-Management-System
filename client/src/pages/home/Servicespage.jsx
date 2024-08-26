import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const StyledBox = styled(Box)({
  minHeight: '100vh',
  backgroundImage: `url('../src/assets/hos1.jpg')`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px 20px',
  marginTop:'3%',
});

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(8px)', // Gives a frosted glass effect
  borderRadius: '16px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.2)',
  },
  padding: '20px',
}));

const Servicespage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3001/getservices')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the Services!", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <StyledBox>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#000', fontWeight: 'bold' }}>
          Our Services
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                    alt={service.name}
                    src={`http://localhost:3001/uploads/${service.image}`}
                    sx={{ margin: '0 auto 10px auto', width: 80, height: 80 }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {service.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                    {service.spec}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {service.description || "No description available."}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </StyledBox>.
      
    </div>
  );
}

export default Servicespage;
