import api from './baseAPI';

async function getGenre() {
    try {
        const response = await api.get(`/genres`);
            if(response.status === 200){
                const genre = response.data;
                return ({
                    data: genre,
                    status: true,
                });
            };

            return ({
                data: response.data,
                status: false
            });

    } catch(err){
        throw err;
    }
};

export default getGenre;