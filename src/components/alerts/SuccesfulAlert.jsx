import * as React from 'react';
import Alert from '@mui/material/Alert';


export default function SuccesfulAlert(params) {
    let severity = ''
    if(params.status === 200){
      severity= 'success'
    }else{
      severity = 'error'
    }
    return (

      <Alert severity={severity}>{params.message}</Alert>

  );
}
