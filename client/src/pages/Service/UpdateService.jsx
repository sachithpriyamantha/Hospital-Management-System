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

function UpdateService() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [spec, setSpec] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null); // State for preview image

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/getservice/${id}`)
            .then(result => {
                setName(result.data.name);
                setSpec(result.data.spec);
                setDescription(result.data.description);
                setCurrentImage(result.data.image); // Set the current image
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreviewImage(URL.createObjectURL(file)); // Set preview image
    };

    const serviceUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('spec', spec);
        formData.append('description', description);
        if (image) formData.append('image', image);

        axios.put(`http://localhost:3001/updateservice/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(result => {
            console.log(result);
            navigate('/services');
        })
        .catch(err => console.log(err));
    };

    return (
        <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', padding: '40px 20px' }}>
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Update Service
            </Typography>
            <form onSubmit={serviceUpdate}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{
                                '& .MuiInputLabel-root': { color: '#333' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#4CAF50' },
                                    '&:hover fieldset': { borderColor: '#388E3C' },
                                    '&.Mui-focused fieldset': { borderColor: '#388E3C' },
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Specialty"
                            variant="outlined"
                            value={spec}
                            onChange={(e) => setSpec(e.target.value)}
                            sx={{
                                '& .MuiInputLabel-root': { color: '#333' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#4CAF50' },
                                    '&:hover fieldset': { borderColor: '#388E3C' },
                                    '&.Mui-focused fieldset': { borderColor: '#388E3C' },
                                },
                            }}
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
                            sx={{
                                '& .MuiInputLabel-root': { color: '#333' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#4CAF50' },
                                    '&:hover fieldset': { borderColor: '#388E3C' },
                                    '&.Mui-focused fieldset': { borderColor: '#388E3C' },
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {currentImage && (
                            <Box mb={2} textAlign="center">
                                <img 
                                    src={`http://localhost:3001/uploads/${currentImage}`} 
                                    alt="Current"
                                    style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }}
                                />
                                <Typography variant="body2" color="textSecondary">Current Image</Typography>
                            </Box>
                        )}
                        {previewImage && (
                            <Box mb={2} textAlign="center">
                                <img 
                                    src={previewImage} 
                                    alt="Preview"
                                    style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }}
                                />
                                <Typography variant="body2" color="textSecondary">New Image Preview</Typography>
                            </Box>
                        )}
                        <FormControl fullWidth>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="image"
                                type="file"
                                onChange={handleImageChange}
                            />
                            <label htmlFor="image">
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                    sx={{
                                        backgroundColor: '#4CAF50',
                                        '&:hover': { backgroundColor: '#E8F5E9' },
                                    }}
                                >
                                    <PhotoCamera />
                                </IconButton>
                                <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>Upload Image</Typography>
                            </label>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="success"
                            type="submit"
                            sx={{
                                backgroundColor: '#E8F5E9',
                                '&:hover': { backgroundColor: '#E8F5E9' },
                            }}
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

export default UpdateService;
