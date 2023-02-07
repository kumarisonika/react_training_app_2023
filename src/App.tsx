import React from 'react';
import './App.css';
import  Login from './components/Login';
import Dashboard from './components/Dashboard';
import Conditional_comp from './components/Conditional_comp';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Box, AppBar, Typography, Toolbar, Button, Container } from '@mui/material';
import { Counter } from './features/counter/Counter';
import Sony_sample_ui from './components/Sony_table/Sony_sample_ui';
import Fruits from './components/Sony_table/Reused_row_parent';


function App() {

  return (
    <Container maxWidth="lg" className="_container">
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard  />} />
        <Route path="/conditional" element={<Conditional_comp isGoal={false} isLight={true}/>} />
        <Route path="/redux" element={<Counter  />} />
        <Route path="/sony" element={<Sony_sample_ui  />} />
        <Route path="/fruits" element={<Fruits  />} />
      </Routes>
    </BrowserRouter>


    </div>
    </Container>
  );
}

export default App;


//redirect from submit to the count dashboard 