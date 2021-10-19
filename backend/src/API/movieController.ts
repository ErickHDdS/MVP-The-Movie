import { Request, Response } from 'express';
import MovieService from '../Domain/MovieService';

class MovieController {
    // movie genre controllers
    async getMovieList (request: Request, response:Response) {
        try {
            const genreMovieData = new MovieService();
            const genres = request.params.genre;
            const genreMovie = await genreMovieData.getMovieListGenre(genres);

            if(Number.isInteger(parseInt(genres)) && genreMovie != null){
                return response.send(genreMovie)
            };

            return response.status(500).send({ err: 'Err' });
        } catch(err) {
            throw err;
        };
    };

    // movie detail controllers
    async getMovieDetail (request: Request, response:Response) {
        try {
            const movieDetailData = new MovieService();
            const movie = request.params.movie;
            const movieDetail = await movieDetailData.getMovieDetail(parseInt(movie));

            if(Number.isInteger(parseInt(movie)) && movieDetail != null){
                return response.send(movieDetail)
            };

            return response.status(500).send({ err: 'Err' });
        } catch(err) {
            throw err;
        };
    };
    
    // movie similiar controllers
    async getMovieSimiliar (request: Request, response:Response) {
        try {
            const movieDetailData = new MovieService();
            const movie = request.params.movie;
            const movieSimiliar = await movieDetailData.getMovieSimiliarList(parseInt(movie));

            if(Number.isInteger(parseInt(movie)) && movieSimiliar != null){
                return response.send(movieSimiliar)
            };

            return response.status(500).send({ err: 'Err' });
        } catch(err) {
            throw err;
        };
    };
};

export default MovieController;