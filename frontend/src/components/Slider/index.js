import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import { getMoviesRealiseList, getMovieDetail, getMovieVideo } from '../../APIs/GetMovie';
import './style.css';

let quantSlides = 5;
let limite = 15;

function SliderMovie() {

    const [moviesRealiseList, setMoviesRealiseList] = useState([]);
    const [moviesInfos, setMoviesInfos] = useState([]);
    const [moviesVideos, setMoviesVideos] = useState([]);
    const [moviesInfosComplete, setMoviesInfosComplete] = useState([]);

    async function handleGetRealiseList() {
        const movies = await getMoviesRealiseList();
        setMoviesRealiseList(movies.data.data.results);
    }

    async function handleGetMovieDetail() {
        let data;
        let movieInfo = [];
        let initial = Math.floor(Math.random() * limite);

        if (moviesRealiseList.length > 0) {
            for (var i = 0; i < quantSlides; i++, initial++) {
                data = await getMovieDetail(moviesRealiseList.at(initial).id);
                movieInfo.push(data);
            }
            setMoviesInfos(movieInfo);
        }
    }

    async function handleGetMovieVideo() {
        let data;
        let movieVideo = [];
            for (var i = 0; i < moviesInfos.length; i++) {
                data = await getMovieVideo(moviesInfos.at(i).data.data.id);
                movieVideo.push(data.data.data.results.at(0).key);
            }
            setMoviesVideos(movieVideo);
    }

    function updateInfos() {
        let movie = [];
        var data;

        if(moviesInfos.length > 0) {
            movie = moviesInfos;
            for(var i=0; i<quantSlides; i++) {
                data = moviesVideos.at(i);
                movie.at(i).video = data
            }
        }
        console.log("COMPLETE",movie)
        setMoviesInfosComplete(movie)
    }

    useEffect(() => {
        handleGetRealiseList();
    }, []);

    useEffect(() => {
        handleGetMovieDetail();
    }, [moviesRealiseList]);

    useEffect(() => {
        handleGetMovieVideo();
    }, [moviesInfos]);

    useEffect(() => {
        updateInfos();
    }, [moviesVideos]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <Slider {...settings}>
            {console.log("TESTE", moviesInfosComplete)}
            {moviesInfosComplete.map((movie) => (
                <section className="main-slider">
                    <div className="movie" >
                            <iframe className="movie-video"
                                width="800"
                                height="500"
                                src={`https://www.youtube.com/embed/${movie.video}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />

                        <div className="movie-infos" >
                            <div className="movie-title" >
                                <h1>{movie.data.data.title}</h1>
                            </div>

                            <div className="movie-detail" >
                                <TextareaAutosize
                                    maxRows={7}
                                    disabled
                                    defaultValue={"Synopsis: "+movie.data.data.overview}
                                    style={{ width: 850 }}
                                    />
                                <p></p><strong>
                                    Original Title: 
                                </strong> 
                                    {" "+movie.data.data.title} 

                                <p></p><strong>
                                    Genre:
                                </strong> 
                                    {movie.data.data.genres.map((genresList) => 
                                        " "+genresList.name + " |"
                                    )}

                                <p></p><strong>
                                    Premiere:
                                </strong> 
                                    {" "+movie.data.data.release_date}
                                
                                <p></p><strong>
                                    Adult content:
                                </strong> 
                                    {movie.data.data.adult == false ? (" False") : (" True")}
                                <strong className="movie-duration">
                                    Duration:
                                </strong> 
                                {" "+`${parseInt(movie.data.data.runtime / 60)}h ${movie.data.data.runtime % 60}min`}
                                
                                <p></p><strong className="movie-avaliation">
                                    <Stack spacing={3}>
                                    <Rating name="stars" value={movie.data.data.vote_average / 2} precision={0.5} readOnly />
                                    </Stack>
                                </strong> 
                            </div>
                        </div>
                    </div>  
                </section>
            ))}
        </Slider> 
    );
}
export default SliderMovie;