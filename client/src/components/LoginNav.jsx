import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export const LoginNav = () => {
    const button = { marginRight: "20px", color: "white", fontSize: "1.2rem", fontWeight: "semi-bold", textTransform: "none" };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Login Here
          </Typography>
          <Button style= {button} color="success" variant="contained"to="/Login" component={Link}> Login</Button>
          <Button style= {button} color="warning" variant="contained" to="SignUp" component={Link}>SignUp</Button>
         <Logout/>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default LoginNav;
