import React from 'react';
import './style.css';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Cards from '../Cards';

import Button from '@mui/material/Button';
import {ReactComponent as AddIcon} from'../../assets/add.svg';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Highlights() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
   

    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setPersonName(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
       <section className="main-highlights">
           <h1 className="title">
                Highlights
            </h1>

            <div className="button-genres-movie" >
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-controlled-open-select-label">Genres</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                    >
                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                </Select>    
            </FormControl>
            </div>

            <div className="cards">
                <Cards /> <Cards /> <Cards /> <Cards />
            </div> 

            <div className="button-load-more">
                <Button variant="outlined" 
                    color="inherit" 
                    fontSize="18px"
                    startIcon={<AddIcon />}>More movies</Button>
            </div>
       </section>
    );
}

export default Highlights;