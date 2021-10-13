import { GetGenresList } from '../Repository/Repository';

// genre list
class GenreService {
    async getGenreList() {
        const repositoryResponse = await GetGenresList();
        if(repositoryResponse.status) {
            return repositoryResponse;
        };
        return {message: "Failed to make the request"};
    };
};

export default GenreService;