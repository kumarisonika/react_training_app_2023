import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import styles from './Counter.module.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export function Counter() {
  const count = useSelector((state:any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>

        <span><h1>{count}</h1></span>

        
        <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        </Box>
      </Container>
    </div>
  )
}