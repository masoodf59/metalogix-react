import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function ColorAlerts() {
  return (
    <>
    <Alert severity="success" color="info">
      This is a success alert — check it out!
    </Alert>

    {/* <button className='btn btn-success' onClick={handleClick()}>Alert</button> */}

    </>

   
  );
}