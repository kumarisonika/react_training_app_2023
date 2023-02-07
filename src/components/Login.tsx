import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert,AlertTitle } from "@mui/material";
import { Routes, Route, Link, BrowserRouter, useNavigate  } from 'react-router-dom'

interface Error {
    username?: string;
    password?: string;
}

export default function Login(props: { name?: string; }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<Error>({});
    const [redir, setRedir] = useState(false);

    // const history = useHistory();
    let navigate = useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        let errors:Error = {};

        if (!username) errors.username = "Username is required";
        if (!password) errors.password = "Password is required";
        setError(errors);
        if (Object.keys(errors).length === 0) {
            navigate('dashboard');
            console.log("loggedin")
        }
    }

   

  return (
    <>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src="logo192.png" sx={{ width: 150, height: 150 }} />

          <Typography component="h1" variant="h5" >
            Log in: {props.name}
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
                error={!!error.username}
                helperText={error.username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!error.password}
                helperText={error.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            
          </Box>
        </Box>
      </Container>
  </>
  );
}

