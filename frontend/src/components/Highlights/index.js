import React, { useEffect, useState } from "react";
import './style.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Cards from '../Cards';
import Button from '@mui/material/Button';

import getGenre from '../../APIs/GetGenre';
import { getMovieListOfGenre, getMovieDetail } from '../../APIs/GetMovie';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

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

let quantCards = 3;
let limite = 18;

function Highlights() {
  const [genresList, setGenres] = useState([]);
  const [moviesListOfGenre, setMoviesOfGenre] = useState([]);
  const [moviesInfos, setMoviesInfos] = useState([]);
  const [genreSelect, setgenreSelect] = useState(28);

  async function handleGetGenre() {
    const genres = await getGenre();
    setGenres(genres.data.data.genres);
  }

  async function handleGetMovieList() {
    const moviesOfGenre = await getMovieListOfGenre(genreSelect);
    setMoviesOfGenre(moviesOfGenre.data.data.results);
  }

  async function handleGetMovieDetail() {
    let data;
    let movieInfo = [];
    let initial = Math.floor(Math.random() * limite);

    if ((moviesListOfGenre.length > 1 && quantCards === 3) 
        || (moviesListOfGenre.length > 4 && quantCards === 6)
        || (moviesListOfGenre.length > 7 && quantCards === 9)
        || (moviesListOfGenre.length > 10 && quantCards === 12)
        || (moviesListOfGenre.length > 13 && quantCards === 15)
        || (moviesListOfGenre.length > 16 && quantCards === 18)) {
      for (var i = 0; i < quantCards; i++, initial++) {
        data = await getMovieDetail(moviesListOfGenre.at(initial).id);
        movieInfo.push(data);
      }
      setMoviesInfos(movieInfo);
    }
  }

  useEffect(() => {
    handleGetGenre();
  }, []);

  useEffect(() => {
    handleGetMovieList();
  }, [genreSelect]);

  useEffect(() => {
    handleGetMovieDetail();
  }, [moviesListOfGenre]);

  const handleChange = (event) => {
    setgenreSelect(event.target.value);
  };

  function control() {
    if(limite > 4) {
      quantCards = quantCards+3;
      limite = limite-3;
    }
    else {
      quantCards = quantCards-3;
      limite = limite+3
    }
    handleGetMovieDetail();
  }

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
            size="24px"
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

      {moviesInfos.length > 0 && (
        <div className="cards">
          {moviesInfos.map((movie) => (
            <Cards movies={movie} />
          ))}
        </div>
      )}

      {limite > 4 ? (<div className="button-load-more">        
        <Button variant="outlined"
          color="inherit"
          onClick={control}
          size="24px"
          startIcon={<AiOutlinePlus />}>More movies</Button>

      </div>) : (
      <div className="button-load-more">
        <Button variant="outlined"
          color="inherit"
          onClick={control}
          size="24px"
          startIcon={<AiOutlineMinus  />}>Less movies</Button>

      </div>
      )}            
    </section>
  );
}

export default Highlights;
