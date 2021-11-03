import React, { useState, useEffect } from 'react';
import SliderMovie from '../Slider';
import './style.css';
import { getMoviesRealiseList } from '../../APIs/GetMovie';

function Realeases() {   
    const [moviesRealiseList, setMoviesRealiseList] = useState([]);

    async function handleGetRealiseList() {
        const movies = await getMoviesRealiseList();
        setMoviesRealiseList(movies.data.data.results);
    }

    useEffect(() => {
        handleGetRealiseList();
    }, []);

    return (
        <section className="main-realeases">
            <h1 className="title">
                Realeases
            </h1>

            {moviesRealiseList.length != 0 && (
                <div className="slider">
                <SliderMovie movies={moviesRealiseList} /> 
                </div>
            )}

        </section>
    );
};

export default Realeases