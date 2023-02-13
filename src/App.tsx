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
import VillageList from './components/village componenet/VillageList';
import FlaskAPIDetails from './components/Sony_table/flaskAPI/DisplayingAPI';
import React_query_example from './components/React_query_example';

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
        <Route path='/villagelist' element={<VillageList/>} />
        <Route path="/flask" element={<FlaskAPIDetails  />} />
        <Route path="/query" element={<React_query_example />} />
      </Routes>
    </BrowserRouter>


    </div>
    </Container>
  );
}

export default App;


//redirect from submit to the count dashboard  



/* import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
 const queryClient = new QueryClient()
 
 export default function App() {
   return (
    <>
     <QueryClientProvider client={queryClient}>
       <Example />
     </QueryClientProvider>
     </>
   )
 }
 
 function Example() {
   const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('http://127.0.0.1:5000/Forecasting/api/time').then(res =>
       res.json()
     )
   )
 
   if (isLoading) return <div>'Loading...'</div>
 
   if (error) return <div>'An error has occurred:'</div>
 
   return (
     <div>
       <h1>{data.domain}</h1>
       <p>{data.time}</p>
     </div>
   )
 } */