import React, { useEffect, useState } from "react";
import './style.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Cards from '../Cards';
import Button from '@mui/material/Button';
import {ReactComponent as AddIcon} from'../../assets/add.svg';

import getGenre from '../../APIs/GetGenre';
import {getMovieList, getMovieDetail, getMovieSimiliar} from '../../APIs/GetMovie';
import _default from "@mui/utils/elementTypeAcceptingRef";


import Pull from '../../assets/commitjr_old.svg';

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

function Highlights() {
    const [genresList, setGenres] = useState([]);
    const [genreSelect, setGenreSelect] = React.useState([]);
    const [moviesList, setMovies] = useState([]);
    
    async function handleGetGenre() {
      const genres = await getGenre();
      setGenres(genres.data.data.genres);
    }

    async function handleGetMovieListOfGenre() {
      console.log("MOVIES",genresList);
      const movies = await getMovieList(genresList.map((genresList) => (
          //if(genresList.name === genreSelect) 
            genresList.id
      )));
      //const movies = await getMovieList(genresList.id);
      console.log("MOVIES OF GENRE",movies);
      // setMovies(genres.data.data.genres);
    }
    
    useEffect(() => {
      handleGetGenre();
    }, []);

    useEffect(() => {
      handleGetMovieListOfGenre();
    }, []);

    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setGenreSelect(
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
                    value={genreSelect}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                    >
                    {genresList.map((genresList) => (
                        <MenuItem value={genresList.id}>
                          {genresList.name}
                        </MenuItem>
                    ))}
                </Select>    
            </FormControl>
            </div>

            <div className="cards">
              <Cards cards={Pull}/> 
              <Cards card={Pull}/> 
              <Cards card={Pull}/> 
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