import React, { useState,useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';





export default function Redux_comp() {
    const [count, setCount] = useState(0);


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
            <Typography component="h1" variant="h5" padding={5}>
               <b> Welcome!</b>
            </Typography>


            <Avatar src="logo192.png" sx={{ width: 150, height: 150 }} />


          <Typography component="h1" variant="h5" padding={5}>
            Count: {count}
            </Typography>
            <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => setCount(count + 1)}
                    className = "Explicit_padding"
                    >
                    Increment
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => setCount(count - 1)}
                    className = "Explicit_padding"
                    >
                    Decrement
                </Button>
                
            </Box>
      </Container>
  </>
  );
}

