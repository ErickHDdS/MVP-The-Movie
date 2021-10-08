import { GetMoviesGenre } from '../Repository/Repository';

class GenreMovieService {
    async getMovieListGenre(genres:string){
        const repositoryResponse = await GetMoviesGenre(genres);
        if(repositoryResponse.status){
            return repositoryResponse;
        };
        return {message: "Failed to make the request"};
    };
};

export default GenreMovieService;