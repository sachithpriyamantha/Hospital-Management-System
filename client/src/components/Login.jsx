import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const heading = { fontSize: "2.5rem", fontWeight: "600", textAlign: "center" }; 
    const paperStyle = {
        padding: "2rem",
        margin: "100px auto",
        borderRadius: "1rem",
        backgroundColor: "#ffffff", 
        boxShadow: "10px 10px 10px #ccc"
    };
    const row = { display: "flex", marginTop: "2rem" };

    const btnStyle = { 
        marginTop: "2rem", 
        fontSize: "1.2rem", 
        fontWeight: "700", 
        backgroundColor: "#0000ff", 
        color: "#ffffff",
        borderRadius: "0.5rem" 
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/login", { email, password })
            .then((result) => {
                console.log(result.data); // Debugging line
                if (result.data === "Success") {
                    console.log("User logged in successfully");
                    navigate("/Home");
                } else {
                    alert("Login Failed: User does not exist");
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    window.alert("Invalid email or password");
                } else {
                    console.log(error);
                }
            });
    };

    return (
        <>
            <Grid align="center">
                <Paper
                    style={paperStyle}
                    sx={{
                        width: {
                            xs: "80vw",
                            sm: "50vw",
                            md: "40vw",
                            lg: "30vw",
                            xl: "20vw",
                        },
                        height: "60vh",
                    }}
                >
                    <Typography style={heading}>Login</Typography>
                    <form onSubmit={handleLogin}>
                        <TextField 
                            onChange={(e) => setEmail(e.target.value)} 
                            name='email' 
                            sx={{ label: { fontWeight: "700", fontSize: "1.2rem" } }} 
                            style={row} 
                            label="Enter Email" 
                            type="email"
                        />
                        <TextField 
                            onChange={(e) => setPassword(e.target.value)} 
                            name='password' 
                            sx={{ label: { fontWeight: "700", fontSize: "1.2rem" } }} 
                            style={row} 
                            label="Enter Password" 
                            type="password"
                        />
                        <Button type="submit" variant="contained" style={btnStyle}>
                            Login
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </>
    );
};
