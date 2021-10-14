import { GetMoviesGenre, GetMoviesDetails, GetSimiliarMoviesList } from '../Repository/Repository';

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

    // movie similiar list
    async getMovieSimiliarList(movieId:number) {
        const repositoryResponse = await GetSimiliarMoviesList(movieId);
        if(repositoryResponse.status){
            return repositoryResponse;
        };
        return {message: "Failed to make the request"};
    };
};

export default MovieService;