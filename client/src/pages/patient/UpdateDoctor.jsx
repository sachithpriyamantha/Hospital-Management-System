import { PhotoCamera } from '@mui/icons-material';
import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    IconButton,
    TextField,
    Typography
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateDoctor() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [spec, setSpec] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/getdoctor/${id}`)
            .then(result => {
                setName(result.data.name);
                setSpec(result.data.spec);
                setDescription(result.data.description);
                setCurrentImage(result.data.image); // Set the current image
            })
            .catch(err => console.log(err));
    }, [id]);

    const doctorUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('spec', spec);
        formData.append('description', description);
        if (image) formData.append('image', image);

        axios.put(`http://localhost:3001/updatedoctor/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(result => {
            console.log(result);
            navigate('/doctors');
        })
        .catch(err => console.log(err));
    };

    return (
        <div style={{ backgroundColor: '#F0F8FF', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <Container maxWidth="sm" style={{ backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <form onSubmit={doctorUpdate}>
                <Typography variant="h4" gutterBottom align="center" style={{ color: '#388E3C' }}>
                    Update Doctor
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            InputLabelProps={{ style: { color: '#388E3C' } }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Specialty"
                            variant="outlined"
                            value={spec}
                            onChange={(e) => setSpec(e.target.value)}
                            InputLabelProps={{ style: { color: '#388E3C' } }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            InputLabelProps={{ style: { color: '#388E3C' } }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {currentImage && (
                            <Box mb={2} textAlign="center">
                                <img 
                                    src={`http://localhost:3001/uploads/${currentImage}`} 
                                    alt="Current"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px', marginBottom: '10px' }}
                                />
                                <Typography variant="body2" style={{ color: '#388E3C' }}>Current Image</Typography>
                            </Box>
                        )}
                        <FormControl fullWidth>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="image"
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            <label htmlFor="image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                    style={{ color: '#388E3C' }}
                                >
                                    <PhotoCamera />
                                </IconButton>
                                <Typography variant="body2" style={{ color: '#388E3C' }}>Upload Image</Typography>
                            </label>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: '#388E3C', color: '#FFFFFF', padding: '10px 0' }}
                            type="submit"
                        >
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    </div>
    
    );
}

export default UpdateDoctor;
