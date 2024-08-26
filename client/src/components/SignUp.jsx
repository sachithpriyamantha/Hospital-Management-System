import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/signup", { name, email, password })
            .then((result) => {
                if (result.status === 201) {  // Fixed typo in 'result' and correct comparison
                    console.log("User created successfully");
                    navigate("/login");
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    window.alert("Email already exists, Please use a different email");  // Fixed 'Window.alert' to 'window.alert'
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
                    <Typography style={heading}>Sign Up</Typography>
                    <form onSubmit={handleSignup}>
                        <TextField 
                            onChange={(e) => setName(e.target.value)} 
                            name="name" 
                            required 
                            sx={{ label: { fontWeight: "700", fontSize: "1.2rem" } }} 
                            style={row} 
                            label="Enter Name" 
                            type="text" 
                        />
                        <TextField 
                            onChange={(e) => setEmail(e.target.value)} 
                            name="email" 
                            required 
                            sx={{ label: { fontWeight: "700", fontSize: "1.2rem" } }} 
                            style={row} 
                            label="Enter Email" 
                            type="email" 
                        />
                        <TextField 
                            onChange={(e) => setPassword(e.target.value)} 
                            name="password" 
                            required 
                            sx={{ label: { fontWeight: "700", fontSize: "1.2rem" } }} 
                            style={row} 
                            label="Enter Password" 
                            type="password" 
                        />
                        <Button type="submit" variant="contained" style={btnStyle}>
                            Sign Up
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </>
    );
};
