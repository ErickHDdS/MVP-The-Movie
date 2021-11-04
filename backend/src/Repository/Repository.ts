import api from '../config/axios';
import api_key from '../config/env';

async function GetGenresList() {
    const response = await api.get(`/3/genre/movie/list?api_key=${api_key}&language=en-US`);
    if (response.status >= 200 && response.status < 300) {
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
};

async function GetMoviesGenre(genres: string) {
    const response = await api.get(`/3/discover/movie?api_key=${api_key}&language=en-US&year=2021&with_genres=${genres}`);
    if (response.status >= 200 && response.status < 300) {
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
};

async function GetMoviesDetails(movieId: number) {
    const response = await api.get(`/3/movie/${movieId}?api_key=${api_key}&language=en-US`);
    if (response.status >= 200 && response.status < 300) {
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
};

async function GetMoviesRealiseList() {
    const response = await api.get(`/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`);
    if (response.status >= 200 && response.status < 300) {
        const moviesRealise = response.data;
        return {
            status: true,
            data: moviesRealise,
        };
    };

    return {
        status: false,
        data: "Failed the request"
    };
};

async function GetVideoMovie(movieId: number) {
    const response = await api.get(`/3/movie/${movieId}/videos?api_key=${api_key}&language=en-US`);
    if (response.status >= 200 && response.status < 300) {
        const movieVideo = response.data;
        return {
            status: true,
            data: movieVideo,
        };
    };
    return {
        status: false,
        data: "Failed the request"
    };
};

async function GetSearchResults(query: string) {
    const response = await api.get(`/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${query}`);
   
    if (response.status >= 200 && response.status < 300) {
        const resultSearch = response.data;
        return {
            status: true,
            data: resultSearch,
        };
    };
    return {
        status: false,
        data: "Failed the request"
    };
};

export { GetGenresList, GetMoviesGenre, GetMoviesDetails, GetMoviesRealiseList, GetVideoMovie, GetSearchResults};