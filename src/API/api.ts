import { Request, Response } from 'express';
import GenreService from '../Domain/GenreService';
import { GenreMovieService, MovieDetailService, MovieSimiliarListService } from '../Domain/MovieService';

// genre controllers
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

// movie genre controllers
class GenreMovieController {
    async getMovieList (request: Request, response:Response) {
        try {
            const genreMovieData = new GenreMovieService();
            const genres = request.params.genre;
            const genreMovie = await genreMovieData.getMovieListGenre(genres);

            if(Number.isInteger(parseInt(genres)) && genreMovie != null){
                return response.send(genreMovie)
            };

            return response.send({ err: 'Err' });
        } catch(err) {
            throw err;
        };
    };
};


// movie detail controllers
class MovieDetailController {
    async getMovieDetail (request: Request, response:Response) {
        try {
            const movieDetailData = new MovieDetailService();
            const movie = request.params.movie;
            const movieDetail = await movieDetailData.getMovieDetail(parseInt(movie));

            if(Number.isInteger(parseInt(movie)) && movieDetail != null){
                return response.send(movieDetail)
            };

            return response.send({ err: 'Err' });
        } catch(err) {
            throw err;
        };
    };
};

// movie similiar controllers

class MovieSimiliarController {
    async getMovieSimiliar (request: Request, response:Response) {
        try {
            const movieDetailData = new MovieSimiliarListService();
            const movie = request.params.movie;
            const movieSimiliar = await movieDetailData.getMovieSimiliarList(parseInt(movie));

            if(Number.isInteger(parseInt(movie)) && movieSimiliar != null){
                return response.send(movieSimiliar)
            };

            return response.send({ err: 'Err' });
        } catch(err) {
            throw err;
        };
    };
};

export {GenreController, GenreMovieController, MovieDetailController, MovieSimiliarController };