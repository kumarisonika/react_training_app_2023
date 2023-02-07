import React, { useState,useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function MissedGoal() {
	return <h1>No! It is False!</h1>;
}

function MadeGoal() {
	return <h1>Yes! It is True!</h1>;
}


export default function Conditional_comp(props: { isGoal?: boolean, isLight?: boolean, numbers?:[] }) {
    const [count, setCount] = useState(0);
    const isGoal = props.isGoal;
    const isLight =props.isLight

       /*  if (isGoal) {
            return <MadeGoal/>;
        } 
        else if (!isGoal){
            return <MissedGoal/>;
        } */
        // const numbers = props.numbers;
        const numbers = [1, 2, 3, 4, 5];
       
        const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
        );

  return (
    <>

        <li>{listItems}</li>
        { isGoal ? <MadeGoal/> : <MissedGoal/> }

        {isLight ? <h2>Yes! There is light.</h2> : <h2>No! There is no light.</h2>}
        {isLight && <h2>Yes! There is light.</h2> }

        
      
     
    </>
  );
}

