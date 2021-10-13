import { GetMoviesGenre, GetMoviesDetails, GetSimiliarMoviesList } from '../Repository/Repository';

/*interface Movie {
    original_title: string;
    overview: string;
    release_date: string;
    runtime: number;
    tagline: string;
}*/

// movie genre list
class GenreMovieService {
    async getMovieListGenre(genres:string) {
        const repositoryResponse = await GetMoviesGenre(genres);
        if(repositoryResponse.status){
            return repositoryResponse;
        };
        return {message: "Failed to make the request"};
    };
};

// movie details
class MovieDetailService {
    async getMovieDetail(movieId:number) {
        const repositoryResponse = await GetMoviesDetails(movieId);
        if(repositoryResponse.status){
            return repositoryResponse;
            //  return show({
            //      original_title: repositoryResponse.data['original_title'],
            //      overview: repositoryResponse.data['overview'],
            //      release_date: repositoryResponse.data['release_date'],
            //      runtime: repositoryResponse.data['runtime'],
            //      tagline: repositoryResponse.data['tagline'],
            //  });
        };
        return {message: "Failed to make the request"};
    };
};

// movie similiar list
class MovieSimiliarListService {
    async getMovieSimiliarList(movieId:number) {
        const repositoryResponse = await GetSimiliarMoviesList(movieId);
        if(repositoryResponse.status){
            return repositoryResponse;
        };
        return {message: "Failed to make the request"};
    };
};

/*function show({original_title, overview, release_date, runtime, tagline}: Movie) {
    const movieDatail = {
        original_title: original_title,
        overview: overview,
        release_date: release_date,
        runtime: runtime,
        tagline: tagline,
    };
    return movieDatail;
}*/

export { GenreMovieService, MovieDetailService, MovieSimiliarListService };