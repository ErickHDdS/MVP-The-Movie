import { GetSearchResults } from '../Repository/Repository';

class SiteService {
    // search list
    async getSearchList(query: string) {
        const repositoryResponse = await GetSearchResults(query);
        if(repositoryResponse.status){
            return repositoryResponse;
        };
        return {message: "Failed to make the request"};
    };
};

export default SiteService;