import React, { useState,useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { AppBar, IconButton, Toolbar, TextField,OutlinedInput , FormControl, InputLabel, MenuItem, Select  } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SelectChangeEvent } from '@mui/material/Select';


export default function Header() {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
    return (
      <Container>
        <div className="header">
            <div className="header_width">
            <AppBar position="static" >
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        FORECAST
                    </Typography>
                </Toolbar>
            </AppBar>
            </div>
            <div  className="textbox_width">
                <TextField id="outlined-basic"  label="FY" variant="filled" className="header_textboxes"/>
                <TextField id="outlined-basic" label="Month" variant="filled" className="header_textboxes"/>
            </div>
        </div>
      </Container>
    );
  }