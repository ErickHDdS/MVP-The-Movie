import { GetMoviesGenre, GetMoviesDetails, GetMoviesRealiseList, GetVideoMovie } from '../Repository/Repository';

class MovieService {
    // movie genre list
    async getMovieListGenre(genres:string) {
        const repositoryResponse = await GetMoviesGenre(genres);
        if(repositoryResponse.status){
            return repositoryResponse;
        };
        return {message: "Failed to make the request"};
    };

    // movie details
    async getMovieDetail(movieId:number) { 
        const repositoryResponse = await GetMoviesDetails(movieId);
        if(repositoryResponse.status){
            return repositoryResponse;
        };
        return {message: "Failed to make the request"};
    };

    // movie realise list
    async getMovieRealiseList() {
        const repositoryResponse = await GetMoviesRealiseList();
        if(repositoryResponse.status) {
            return repositoryResponse;
        };
        return {message: "Failed to make the request"};
    };

    // movie video
    async getMovieVideo(movieId:number) {
        const repositoryResponse = await GetVideoMovie(movieId);
        if(repositoryResponse.status){
            return repositoryResponse;
        };
        return {message: "Failed to make the request"};
    };
};

export default MovieService;