import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom"

export default function AddNewProduct() {
  return (
      <Link to={'/new-product'}>
        <Fab id='newProduct-link' color="primary" aria-label="add">
            <AddIcon />
        </Fab>
      </Link>
  );
}
