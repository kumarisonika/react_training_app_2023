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
import { RowData } from '../../Types'
 

export default  function Row(props: { row: any }) {
    const { row } = props;
    // const row1=  ['Apple', '120 kgs', 'Sweet', 'Winter']
      

    const [open, setOpen] = React.useState(false);
  
    return (
        <>
      {/* <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="right">{row.apr}</TableCell>
          <TableCell align="right">{row.may}</TableCell>
          <TableCell align="right">{row.jun}</TableCell>
          <TableCell align="right">{row.jul}</TableCell>
          <TableCell align="right">{row.aug}</TableCell>
          <TableCell align="right">{row.sep}</TableCell>
          <TableCell align="right">{row.oct}</TableCell>
          <TableCell align="right">{row.nov}</TableCell>
          <TableCell align="right">{row.dec}</TableCell>
          <TableCell align="right">
            <TextField
            className="textbox_table" 
            defaultValue={String(row.jan)}
            variant="standard"
            />
          </TableCell>
          <TableCell align="right">
            <TextField
            className="textbox_table" 
            defaultValue={String(row.feb)}
            variant="standard"
            />
          </TableCell>
          <TableCell align="right">
            <TextField
            className="textbox_table" 
            defaultValue={String(row.mar)}
            variant="standard"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow: any) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                          {Math.round(historyRow.amount * row.jan * 100) / 100}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment> */}


      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          
          {/* <TableCell component="th" scope="row">
            {row.name}
          </TableCell> */}
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          {row.map((v:any) => (
            // console.log(v,"THIS IS V")
                <TableCell align="right">{v}</TableCell>

           ))}
          {/* <TableCell align="right">{row[0]}</TableCell>
          <TableCell align="right">{row.may}</TableCell>
          <TableCell align="right">{row.jun}</TableCell>
          <TableCell align="right">{row.jul}</TableCell>
          <TableCell align="right">{row.aug}</TableCell>
          <TableCell align="right">{row.sep}</TableCell>
          <TableCell align="right">{row.oct}</TableCell>
          <TableCell align="right">{row.nov}</TableCell>
          <TableCell align="right">{row.dec}</TableCell>
          <TableCell align="right">
            <TextField
            className="textbox_table" 
            defaultValue={String(row.jan)}
            variant="standard"
            />
          </TableCell>
          <TableCell align="right">
            <TextField
            className="textbox_table" 
            defaultValue={String(row.feb)}
            variant="standard"
            />
          </TableCell>
          <TableCell align="right">
            <TextField
            className="textbox_table" 
            defaultValue={String(row.mar)}
            variant="standard"
            />
          </TableCell> */}
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                   {/*  {row.history.map((historyRow: any) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                          {Math.round(historyRow.amount * row.jan * 100) / 100}
                        </TableCell>
                      </TableRow>
                    ))} */}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
      </>
    );
  }


 