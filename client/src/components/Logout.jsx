import { Button } from '@mui/material'
import React from 'react'

export const Logout = () => {
    const button = { marginRight: "20px", color: "white", fontSize: "1.2rem", fontWeight: "semi-bold", textTransform: "none" };
  return (
    <Button style= {button} variant="contained" color="error">Logout</Button>
  )
}
