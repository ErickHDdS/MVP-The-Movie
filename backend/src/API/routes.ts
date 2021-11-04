import { Router } from 'express';
const router = Router();
import GenreController from './genreController';
import MovieController from './movieController';
import SiteController from './siteController';

const Genre = new GenreController();
const Movie = new MovieController();
const Site = new SiteController();

router.get('/genres', Genre.getGenreList);
router.get('/movie/realise', Movie.getMoviesRealiseList);
router.get('/movie/:movie', Movie.getMovieDetail);
router.get('/movie/list/:genre', Movie.getMovieList);
router.get('/video/:movie', Movie.getMovieVideo);
router.get('/:query', Site.getSearchList);

export default router;