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
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SelectChangeEvent } from '@mui/material/Select';
import Row from './Row'
import Header from '.././Header'
import { RowData, History } from '../../Types';

const historyData: Array<History> = [
  {
    date: '2020-01-05',
    customerId: '11091700',
    amount: 3,
  },
  {
    date: '2020-01-02',
    customerId: 'Anonymous',
    amount: 1,
  },
];

function createData(
    name: string,
    apr: number,
    may: number,
    jun: number,
    jul: number,
    aug: number,
    sep: number,
    oct: number,
    nov: number,
    dec: number,
    jan: number,
    feb: number,
    mar: number,
  ) {
    return {
      name,
      apr,
    may,
    jun,
    jul,
    aug,
    sep,
    oct,
    nov,
    dec,
    jan,
    feb,
    mar,
    history: historyData,
    };
  }
  
  const row1= [ ['Apple', '120 kgs', 'Sweet', 'Winter'],
  ['Mango', '120 kgs', 'Sweet', 'Winter'],
  ['Banana', '120 kgs', 'Sweet', 'Winter']

]

const headers= ['Fruit', 'Qty', 'Taste', 'Season']
  const rows = [
    // createData('Apple', '120 kgs', 'Sweet', 'Winter'),
    createData('Banana', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0, 3.99, 159, 6.0, 12.0),
    createData('Mango', 262, 16.0, 24, 6.0, 3.79, 159, 6.0, 24, 4.0, 3.99, 159, 6.0),
    createData('Pear', 305, 3.7, 67, 4.3, 2.5, 159, 6.0, 24, 4.0, 3.99, 159, 6.0),
    createData('Guava', 356, 16.0, 49, 3.9, 1.5, 159, 6.0, 24, 4.0, 3.99, 159, 6.0),
    createData('Lichi', 356, 16.0, 49, 3.9, 1.5, 159, 6.0, 24, 4.0, 3.99, 159, 6.0),
    createData('Avacado', 356, 16.0, 49, 3.9, 1.5, 159, 6.0, 24, 4.0, 3.99, 159, 6.0),
    createData('Orange', 356, 16.0, 49, 3.9, 1.5, 159, 6.0, 24, 4.0, 3.99, 159, 6.0),
    createData('Blue berry', 356, 16.0, 49, 3.9, 1.5, 159, 6.0, 24, 4.0, 3.99, 159, 6.0),
  ];
  

/* how to connect to database using js?
 */
export default function Fruits() {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
    return (
      <Container>
        <Header/>

    <div style={{display: "flex"}}>
        <div className="dropdowns">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Vegetables</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div className="dropdowns">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Drinks</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div className="dropdowns">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Food</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div className="dropdowns">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <TextField id="outlined-basic" label="Comment" variant="standard" />
      </FormControl>
        </div>
    </div>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            
            <TableRow>
            <TableCell/>
            {row1[0].map((v:any) => (
            // console.log(v,"THIS IS V")
                <TableCell align="right">{v}</TableCell>

           ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {row1.map((row) => (
              <Row  key={row[0]} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    );
  }