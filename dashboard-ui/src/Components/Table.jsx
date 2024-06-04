import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, '-', 4.0),
  createData('Ice cream sandwich', 237, 9.0, '-', 4.3),
  createData('Eclair', 262, 16.0, '-', 6.0),
  // createData('Cupcake', 305, 3.7, '-', 4.3),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ width: '90%', overflowX: 'auto', margin: 'auto' }}>
      <Table sx={{ minWidth: 1200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Dessert (100g serving)</TableCell>
            <TableCell align="center">Calories</TableCell>
            <TableCell align="center">Fat&nbsp;(g)</TableCell>
            <TableCell align="center">Carbs&nbsp;(g)</TableCell>
            <TableCell align="center">Protein&nbsp;(g)</TableCell>
            <TableCell align="center">Protein&nbsp;(g)</TableCell>
            <TableCell align="center">Protein&nbsp;(g)</TableCell>
            <TableCell align="center">Protein&nbsp;(g)</TableCell>
            <TableCell align="center">Protein&nbsp;(g)</TableCell>
            <TableCell align="center">Protein&nbsp;(g)</TableCell>
            <TableCell align="center">Protein&nbsp;(g)</TableCell>
            <TableCell align="center">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: '1px solid #ccc' } }}
            >
              <TableCell component="th" scope="row" sx={{ border: '1px solid #ccc', textAlign: 'center' }}>
                {row.name}
              </TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{row.calories}</TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{row.fat}</TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{row.carbs}</TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{row.protein}</TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{row.protein}</TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{row.protein}</TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{row.protein}</TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{row.protein}</TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{row.protein}</TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{row.protein}</TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
