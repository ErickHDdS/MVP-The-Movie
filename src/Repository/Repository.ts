import api from '../config/axios';
import api_key from '../config/env';

async function GetGenresList() {
    try {
        const response = await api.get(`/3/genre/movie/list?api_key=${api_key}&language=en-US`);
        if(response.status >= 200 && response.status < 300) {
            const genreList = response.data;
            return {
                status: true,
                data: genreList,
            };
        };

        return {
            status: false,
            data: "Failed the request"
        };
    } catch(err) {
        throw (err);
    };
};

async function GetMoviesGenre(genres:string) {
    try {
        const response = await api.get(`/3/discover/movie?api_key=${api_key}&language=en-US&year=2021&with_genres=${genres}`);
        if(response.status >= 200 && response.status < 300) {
            const genreMovieList = response.data;
            return {
                status: true,
                data: genreMovieList,
            };
        };
        return {
            status: false,
            data: "Failed the request"
        };
    } catch(err) {
        throw (err);
    };
};

async function GetMoviesDetails(movieId:number) {
    try {
        const response = await api.get(`/3/movie/${movieId}?api_key=${api_key}&language=en-US`);
        if(response.status >= 200 && response.status < 300) {
            const movieDetails = response.data;
            return {
                status: true,
                data: movieDetails,
            };
        };
        return {
            status: false,
            data: "Failed the request"
        };
    } catch(err) {
        throw (err);
    };
};

async function GetSimiliarMoviesList(movieId:number) {
    try {
        const response = await api.get(`/3/movie/${movieId}/similar?api_key=${api_key}&language=en-US&page=1`);
        if(response.status >= 200 && response.status < 300) {
            const movieSimiliar = response.data;
            return {
                status: true,
                data: movieSimiliar,
            };
        };
        return {
            status: false,
            data: "Failed the request"
        };
    } catch(err) {
        throw (err);
    };
};

export { GetGenresList, GetMoviesGenre, GetMoviesDetails, GetSimiliarMoviesList };