import api from "./baseAPI";

async function getMovieList(genre) {
    try {
        const response = await api.get(`/movie/list/${genre}`);
            if(response.status === 200){
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

    } catch(err){
        throw err;
    }
};

async function getMovieDetail(movie) {
    try {
        const response = await api.get(`/movie/${movie}`);
            if(response.status === 200){
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

    } catch(err){
        throw err;
    }
};

async function getMovieSimiliar(movie) {
    try {
        const response = await api.get(`/movie/similiar/${movie}`);
            if(response.status === 200){
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

    } catch(err){
        throw err;
    }
};

export {getMovieList, getMovieDetail, getMovieSimiliar};