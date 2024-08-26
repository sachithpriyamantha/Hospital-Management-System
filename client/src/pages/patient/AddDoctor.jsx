import { Box, Button, Container, Grid, Input, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function AddDoctor() {
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

        axios.post("http://localhost:3001/Adddoctor", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(result => {
                console.log(result);
                navigate('/doctors');
            })
            .catch(err => console.log(err));
    }

    return (
        <div style={{ backgroundColor: '#F0F8FF', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <Container maxWidth="sm" style={{ backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center" style={{ color: '#388E3C' }}>
                    Add Doctor
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                variant="outlined"
                                InputLabelProps={{ style: { color: '#388E3C' } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Specialty"
                                value={spec}
                                onChange={(e) => setSpec(e.target.value)}
                                required
                                variant="outlined"
                                InputLabelProps={{ style: { color: '#388E3C' } }}
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
                                variant="outlined"
                                InputLabelProps={{ style: { color: '#388E3C' } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel htmlFor="upload-image" style={{ color: '#388E3C', marginBottom: '8px' }}>Upload Image</InputLabel>
                            <Input
                                fullWidth
                                type="file"
                                id="upload-image"
                                onChange={(e) => setImage(e.target.files[0])}
                                style={{ marginBottom: '16px' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                style={{ backgroundColor: '#388E3C', color: '#FFFFFF', padding: '10px 0' }}
                                fullWidth
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    </div>
    
    );
}

export default AddDoctor;
