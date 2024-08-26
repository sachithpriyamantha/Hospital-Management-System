import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system'; 
import doc1 from '../assets/doc1.jpeg';
import doc2 from '../assets/doc2.jpeg';
import doc3 from '../assets/doc3.jpeg';
import doc4 from '../assets/doc4.jpeg';
import doc5 from '../assets/doc5.jpeg';
import doc6 from '../assets/doc6.jpeg';

const doctors = [
  {
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    description: "Dr. John Doe has over 20 years of experience in cardiology and is renowned for his expertise in heart surgeries.",
    avatar: doc1
  },
  {
    name: "Dr. Sam Sara",
    specialty: "Neurologist",
    description: "Dr. Sam Sara specializes in neurological disorders and has been helping patients with her expertise for over 15 years.",
    avatar: doc2
  },
  {
    name: "Dr. Emily Johnson",
    specialty: "Pediatrician",
    description: "Dr. Emily Johnson is a dedicated pediatrician with a focus on child health and development.",
    avatar: doc3
  },
  {
    name: "Dr. Samuel",
    specialty: "Cardiologist",
    description: "Dr. Samuel has over 20 years of experience in cardiology and is renowned for his expertise in heart surgeries.",
    avatar: doc4
  },
  {
    name: "Dr. Jane Smith",
    specialty: "Dermatologist",
    description: "Dr. Jane Smith specializes in dermatological disorders and has been helping patients with her expertise for over 30 years.",
    avatar: doc5
  },
  {
    name: "Dr. James Peter",
    specialty: "Dentist",
    description: "Dr. James Peter is a dedicated dentist with a focus on dental health and development.",
    avatar: doc6
  }
];

const StyledCard = styled(Card)({
  borderRadius: '15px',
  height: '35vh',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  },
  '@media (max-width: 768px)': { 
    height: 'auto',
  },
});

const StyledAvatar = styled(Avatar)({
  marginBottom: '10%', 
  width: '20%', 
  height: 'auto',
  margin: 'auto',
});

const StyledCardContent = styled(CardContent)({
  textAlign: 'center',
  padding: '5%', 
});

const StyledGridContainer = styled(Grid)({
  padding: '5%', 
  minHeight: '100vh', 
  backgroundColor: '#73C6B6',
});

function Homediv4() {
  return (
    <StyledGridContainer container spacing={4} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h2" align="center" fontWeight="bold" fontSize="2rem" gutterBottom>
          Doctors
        </Typography>
      </Grid>
      {doctors.map((doctor, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <StyledCard>
            <StyledCardContent>
              <StyledAvatar alt={doctor.name} src={doctor.avatar} />
              <Typography variant="h6" gutterBottom>{doctor.name}</Typography>
              <Typography variant="subtitle1" color="textPrimary">Specialty: {doctor.specialty}</Typography>
              <Typography variant="body2" color="textSecondary">{doctor.description}</Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      ))}
    </StyledGridContainer>
  );
}

export default Homediv4;
