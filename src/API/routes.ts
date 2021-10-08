import { Router } from 'express';
const router = Router();
import { GenreController, GenreMovieController } from './api';

const GenreList = new GenreController();
const GenreMovieList = new GenreMovieController();

router.get('/genreList', GenreList.getGenreList);
router.get('/movieList/:genre', GenreMovieList.getMovieList);

export default router;