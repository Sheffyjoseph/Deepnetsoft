import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from '@mui/material'

function createData(name ,price ,quantity ,category ) {
  return { name ,price ,quantity ,category };
}

const rows = [
  createData('product1','price1','quantity1','category1'),
  createData('product2','price2','quantity2','category2'),
  createData('product3','price3','quantity3','category3'),
  
];

export default function Listproducts() {
  return (
      <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price&nbsp;</TableCell>
            <TableCell align="right">Quantity&nbsp;</TableCell>
            <TableCell align="right">Category&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer><br/><br/>
    <TableContainer>
    <Button variant="contained" color="success">Add Product</Button>
    </TableContainer>
    </>
  );
}
