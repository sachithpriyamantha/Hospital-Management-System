import { Box, Button, Container, Grid, Input, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function AddService() {


    const [name, setName] = useState("");
    const [spec, setSpec] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('spec', spec);
        formData.append('description', description);
        if (image) formData.append('image', image);

        axios.post("http://localhost:3001/Addservice", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(result => {
                console.log(result);
                navigate('/services');
            })
            .catch(err => console.log(err));
    }
  return (
    <div style={{ backgroundColor: '#F0F4F8', minHeight: '100vh', padding: '40px 20px' }}>
    <Container maxWidth="sm">
        <Box sx={{ mt: 10, mb: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Add Service
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Service Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            sx={{
                                '& .MuiInputLabel-root': { color: '#388E3C' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#388E3C',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#2C6B2F',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#2C6B2F',
                                    },
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Specialty"
                            value={spec}
                            onChange={(e) => setSpec(e.target.value)}
                            required
                            sx={{
                                '& .MuiInputLabel-root': { color: '#388E3C' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#388E3C',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#2C6B2F',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#2C6B2F',
                                    },
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            sx={{
                                '& .MuiInputLabel-root': { color: '#388E3C' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#388E3C',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#2C6B2F',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#2C6B2F',
                                    },
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel htmlFor="upload-image" sx={{ color: '#388E3C' }}>
                            Upload Image
                        </InputLabel>
                        <Input
                            fullWidth
                            type="file"
                            id="upload-image"
                            onChange={(e) => setImage(e.target.files[0])}
                            sx={{
                                mt: 1,
                                borderColor: '#388E3C',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Button
    type="submit"
    variant="contained"
    fullWidth
    sx={{
        backgroundColor: '#388E3C', 
        '&:hover': {
            backgroundColor: '#2C6B2F',  
        },
        color: '#FFFFFF',  
    }}
>
    Submit
</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    </Container>
</div>

  )
}

export default AddService
