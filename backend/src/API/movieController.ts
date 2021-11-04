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
            console.error({err});
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
            console.error({err});
        };
    };

    // movie realise list
    async getMoviesRealiseList (request: Request, response: Response) {
        try {
            const moviesRealiseData = new MovieService();
            const moviesRealiseList = await moviesRealiseData.getMovieRealiseList();

            if(moviesRealiseList != null) {
                return response.send(moviesRealiseList);
            };

            return response.status(500).send({ err: 'Err'});
        } catch (err) {
            console.error({err});
        };
    };

    // movie video
    async getMovieVideo (request: Request, response:Response) {
        try {
            const movieVideoData = new MovieService();
            const movie = request.params.movie;
            const movieVideo = await movieVideoData.getMovieVideo(parseInt(movie));

            if(Number.isInteger(parseInt(movie)) && movieVideo != null){
                return response.send(movieVideo)
            };

            return response.status(500).send({ err: 'Err' });
        } catch(err) {
            console.error({err});
        };
    };

};

export default MovieController;