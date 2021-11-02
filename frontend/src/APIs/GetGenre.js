import api from './baseAPI';

async function getGenre() {
    const response = await api.get("/genres");
    if (response.status === 200) {
        const data = response.data;
        return ({
            data: data,
            status: true,
        });
    };

    return ({
        data: response.data,
        status: false,
    });

};

export default getGenre;