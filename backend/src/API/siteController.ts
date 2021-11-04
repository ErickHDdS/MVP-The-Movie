import { Request, Response } from 'express';
import SiteService from '../Domain/SiteService';

class SiteController {
    async getSearchList (request: Request, response:Response) {
        try {
            const searchDetailData = new SiteService();
            const search = (request.url);
            const searchDetail = await searchDetailData.getSearchList(search);
            if(searchDetail != null){
                return response.send(searchDetail)
            };

            return response.status(500).send({ err: 'Err' });
        } catch(err) {
            console.error({err});
        };
    };
}

export default SiteController;