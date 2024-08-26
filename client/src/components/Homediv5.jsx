import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import back1 from '../assets/back1.jpg';

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundImage: `url(${back1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const FormContainer = styled(Box)(({ theme }) => ({
  width: '90%', 
  maxWidth: '400px',
  padding: '5%', 
  borderRadius: '12px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)', 
  [theme.breakpoints.down('sm')]: {
    padding: '4%', 
  },
}));

const StyledButton = styled(Button)({
  marginTop: '5%', 
  borderRadius: '15px',
  padding: '12px', 
  backgroundColor: '#1565c0',
  '&:hover': {
    backgroundColor: '#0d47a1',
  },
});

function Homediv5() {
  return (
    <StyledBox>
      <FormContainer>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: '#333', fontWeight: 'bold' }}
        >
          Contact Us
        </Typography>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ shrink: true }}
          sx={{
            background: '#fff',
            borderRadius: '4px',
          }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ shrink: true }}
          sx={{
            background: '#fff',
            borderRadius: '4px',
          }}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          InputLabelProps={{ shrink: true }}
          sx={{
            background: '#fff',
            borderRadius: '4px',
          }}
        />
        <StyledButton
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </StyledButton>
      </FormContainer>
    </StyledBox>
  );
}

export default Homediv5;
