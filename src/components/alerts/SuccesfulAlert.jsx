import * as React from 'react';
import Alert from '@mui/material/Alert';


export default function SuccesfulAlert(params) {
    return (

      <Alert severity={params.severity}>{params.message}</Alert>

  );
}
