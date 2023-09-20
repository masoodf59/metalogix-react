import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


export default function BasicTable() {
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    apiData()
  }, [])

  const apiData = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users').then((resp) => setData(resp.data));
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Comapny</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>


            {data?.map((row, i) => (

              <>

                <TableRow

                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell  >
                    {row.username}
                  </TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.address.street +" "+ row.address.city}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">{row.company.name}</TableCell>

                </TableRow>

              </>

            ))
            }


          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}