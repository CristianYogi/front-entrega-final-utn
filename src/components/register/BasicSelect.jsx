import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(params) {
  const [ubicacion, setUbicacion] = React.useState('');
  // const {ubicacion, setUbicacion} = params

  const handleChange = (event) => {
    setUbicacion(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ubicacion</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ubicacion}
          label="Ubicacion"
          onChange={handleChange}
        >
          <MenuItem value={'Villa Urquiza'}>Villa Urquiza</MenuItem>
          <MenuItem value={'Villa Luro'}>Villa Luro</MenuItem>
          <MenuItem value={'Recoleta'}>Recoleta</MenuItem>
          <MenuItem value={'Flores'}>Flores</MenuItem>
          <MenuItem value={'Caballito'}>Caballito</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
