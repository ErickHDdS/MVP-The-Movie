import { Router } from 'express';
const router = Router();
import { GenreController, GenreMovieController, MovieDetailController, MovieSimiliarController } from './api';

const GenreList = new GenreController();
const GenreMovieList = new GenreMovieController();
const MovieDetail = new MovieDetailController();
const MovieSimiliar = new  MovieSimiliarController();

router.get('/genreList', GenreList.getGenreList);
router.get('/movieList/:genre', GenreMovieList.getMovieList);
router.get('/movieDetail/:movie', MovieDetail.getMovieDetail);
router.get('/movieSimiliar/:movie', MovieSimiliar.getMovieSimiliar);

export default router;