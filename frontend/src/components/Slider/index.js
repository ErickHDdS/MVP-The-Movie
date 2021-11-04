import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import { getMovieDetail, getMovieVideo } from '../../APIs/GetMovie';
import './style.css';

let quantSlides = 5;
let limite = 15;

function SliderMovie(moviesInput) {
    const [moviesInfos, setMoviesInfos] = useState([]);
    const [moviesVideos, setMoviesVideos] = useState([]);
    const [moviesInfosComplete, setMoviesInfosComplete] = useState([]);

    async function handleGetMovieDetail() {
        let data;
        let movieInfo = [];
        let initial = Math.floor(Math.random() * limite);

        if (moviesInput.movies.length > 0) {
            for (var i = 0; i < quantSlides; i++, initial++) {
                data = await getMovieDetail(moviesInput.movies.at(initial).id);
                movieInfo.push(data);
            }
            setMoviesInfos(movieInfo);
        }
    }

    async function handleGetMovieVideo() {
        let dataMovie;
        let movieVideo = [];
            if(moviesInfos.length !== moviesInput.movies.length ) {
                for (var i = 0; i < moviesInfos.length; i++) {
                    dataMovie = await getMovieVideo(moviesInfos.at(i).data.data.id);
                    if(dataMovie.data.data.results.at(0)!=null)
                    movieVideo.push(dataMovie.data.data.results.at(0).key);
                }
                setMoviesVideos(movieVideo);
            }
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
        setMoviesInfosComplete(movie)
    }

    useEffect(() => {
        handleGetMovieDetail();
    }, [moviesInput]);

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
            {moviesInfosComplete.map((movie) => (
                <section className="main-slider">
                    <div className="movie" >
                            <iframe className="movie-video"
                                width="900"
                                height="562"
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
                                    style={{ width: 750 }}
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
                                    {movie.data.data.adult === false ? (" False") : (" True")}
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