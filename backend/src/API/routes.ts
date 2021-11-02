import { Router } from 'express';
const router = Router();
import GenreController from './genreController';
import MovieController from './movieController';

const Genre = new GenreController();
const Movie = new MovieController();

router.get('/genres', Genre.getGenreList);
router.get('/movie/realise', Movie.getMoviesRealiseList);
router.get('/movie/:movie', Movie.getMovieDetail);
router.get('/movie/similiar/:movie', Movie.getMovieSimiliar);
router.get('/movie/list/:genre', Movie.getMovieList);
router.get('/video/:movie', Movie.getMovieVideo);

export default router;