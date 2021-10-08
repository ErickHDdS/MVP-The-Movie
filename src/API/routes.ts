import { Router } from 'express';
const router = Router();
import GenreController from './api';

const GenreList = new GenreController();

router.get('/genreList', GenreList.getGenreList);

export default router;