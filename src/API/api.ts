import { Request, Response } from 'express';
import GenreService from '../Domain/GenreService';
import GenreMovieService from '../Domain/GenreMovieService';
import { GetGenresList } from '../Repository/Repository';

class GenreController {
    async getGenreList (request: Request, response: Response) {
        try {
            const genreData = new GenreService();
            const genreList = await genreData.getGenreList();

            if(genreList != null) {
                return response.send(genreList);
            };

            return response.send({ err: 'Err'});
        } catch (err) {
            throw err;
        };
    };
};

class GenreMovieController {
    async getMovieList (request: Request, response:Response) {
        try {
            const genreData = new GenreMovieService();
            const genres = request.params.genre;
            const genreMovie = await genreData.getMovieListGenre(genres);

            if(Number.isInteger(parseInt(genres)) && genreMovie != null){
                return response.send(genreMovie)
            };

            return response.send({ err: 'Err' });
        } catch(err) {
            throw err;
        };
    };
};


export {GenreController, GenreMovieController };