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
import {getMovieListOfGenre, getMovieDetail, getMovieSimiliar} from '../../APIs/GetMovie';
import { AiOutlineMinus } from "react-icons/ai";

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

var loading = false;
let quantCards = 3;
var limite;

function Highlights() {
    const [genresList, setGenres] = useState([]);
    const [genreSelect, setGenreSelect] = useState(28);
    const [moviesListOfGenre, setMoviesOfGenre] = useState([]);
    const [moviesInfos, setMoviesInfos] = useState([]);
    
    
    async function handleGetGenre() {
      const genres = await getGenre();
      setGenres(genres.data.data.genres);
    }

    async function handleGetMovieList() {
      const moviesOfGenre = await getMovieListOfGenre(genreSelect);
      setMoviesOfGenre(moviesOfGenre.data.data.results);
      handleSetCards();
    }

    function handleSetCards() {
      if(quantCards == 3) {
        limite = 17
      }
      else 
        limite = 14;
      
      var movieInfo = [];
      var initial = Math.floor(Math.random() * limite); 
      for(var i = 0; i < quantCards; i++, initial++) {
        if(moviesListOfGenre.length > 0)
          movieInfo.push(moviesListOfGenre.at(initial));
      }
      setMoviesInfos(movieInfo);
    }    

    useEffect(() => {
      handleGetGenre();
      handleGetMovieList();
    }, []);

    const handleChange = (event) => {
        const {
          target: { value },
          } = event;
          setGenreSelect(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
        handleGetMovieList();
    };

    function check() {
      if(loading==false) {
        handleGetMovieList();
      }
      loading = true;
    }

    function control() {
      if(quantCards == 3) {
        quantCards = 6;
      } 
      else {
        quantCards = 3;
      }
      handleGetMovieList();
    }
    
    window.onload = function() {
      check();
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

              {moviesInfos.length > 0 ? (
                <div className="cards">
                {moviesInfos.map((movie) => (
                  <Cards movies={movie}/>
                  ))}
                </div>
              ) : (<div></div>)}

            <div className="button-load-more">
                <Button variant="outlined" 
                    color="inherit" 
                    fontSize="18px"
                    onClick={control}
                    
                    startIcon={quantCards == 3 ? (<AddIcon /> ) : (<AiOutlineMinus />) }>More movies</Button>
                  
            </div>
       </section>
    );
}

export default Highlights;