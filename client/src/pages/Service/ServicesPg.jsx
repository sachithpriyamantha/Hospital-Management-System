


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ServicesPg() {
    const [services, setService] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getservices')
            .then(result => setService(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteservice/${id}`)
            .then(res => {
                console.log(res);
                setService(services.filter(service => service._id !== id));  // Fixed state update issue
            })
            .catch(err => console.log(err));
    };

    return (
        
<div style={{ backgroundColor: '#F0F8FF', minHeight: '100vh', padding: '40px 20px' }}>
            <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ textAlign: 'center', fontWeight: 'bold', color: '#2E7D32' }}
            >
                Services
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                component={Link} 
                to="/addservice"
                sx={{ 
                    display: 'block', 
                    margin: '20px auto', 
                    backgroundColor: '#4CAF50', 
                    '&:hover': { backgroundColor: '#388E3C' } 
                }}
            >
                Add +
            </Button>
            <TableContainer 
                component={Paper} 
                sx={{ 
                    marginTop: '30px', 
                    maxWidth: '80%', 
                    margin: '30px auto', 
                    padding: '20px', 
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)' 
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Image</strong></TableCell>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Specialty</strong></TableCell>
                            <TableCell><strong>Description</strong></TableCell>
                            <TableCell><strong>Actions</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((service) => (
                            <TableRow key={service._id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#F9F9F9' } }}>
                                <TableCell>
                                    {service.image ? (
                                        <img 
                                            src={`http://localhost:3001/uploads/${service.image}`} 
                                            alt="Service" 
                                            style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} 
                                        />
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </TableCell>
                                <TableCell>{service.name}</TableCell>
                                <TableCell>{service.spec}</TableCell>
                                <TableCell>{service.description}</TableCell>
                                <TableCell>
                                    <IconButton 
                                        color="primary" 
                                        component={Link} 
                                        to={`/updateservice/${service._id}`}
                                        sx={{ marginRight: '10px' }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton 
                                        color="error" 
                                        onClick={() => handleDelete(service._id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ServicesPg;

