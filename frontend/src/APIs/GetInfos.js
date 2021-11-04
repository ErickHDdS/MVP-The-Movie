import api from "./baseAPI";

async function getSearch(query) {
    const response = await api.get(`/${query}`);
    if (response.status === 200) {
        const result = response.data;
        return ({
            data: result,
            status: true,
        });
    };

    return ({
        data: response.data,
        status: false
    });
};

export default getSearch;