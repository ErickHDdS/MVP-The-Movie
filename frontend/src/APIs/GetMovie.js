import api from "./baseAPI";

async function getMovieListOfGenre(genre) {
    const response = await api.get(`/movie/list/${genre}`);
    if (response.status === 200) {
        const movies = response.data;
        return ({
            data: movies,
            status: true,
        });
    };

    return ({
        data: response.data,
        status: false
    });
};

async function getMovieDetail(movie) {
    const response = await api.get(`/movie/${movie}`);
    if (response.status === 200) {
        const movies = response.data;
        return ({
            data: movies,
            status: true,
        });
    };

    return ({
        data: response.data,
        status: false
    });
};

async function getMovieSimiliar(movie) {
    const response = await api.get(`/movie/similiar/${movie}`);
    if (response.status === 200) {
        const movies = response.data;
        return ({
            data: movies,
            status: true,
        });
    };

    return ({
        data: response.data,
        status: false
    });
};

async function getMoviesRealiseList() {
    const response = await api.get("/movie/realise");
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

async function getMovieVideo(movie) {
    const response = await api.get(`/video/${movie}`);
    if (response.status === 200) {
        const movies = response.data;
        return ({
            data: movies,
            status: true,
        });
    };

    return ({
        data: response.data,
        status: false
    });
};

export { getMovieListOfGenre, getMovieDetail, getMovieSimiliar, getMoviesRealiseList, getMovieVideo };