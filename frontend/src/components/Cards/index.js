import Card from 'react-bootstrap/Card'
import Link from '@mui/material/Link';
import './style.css';

function Cards(movie) {
    console.log("MOVIE CARD",movie) 
    return (      
        <div className="cards">
            <Card style={{ width: '17rem' }}>
                <Link href={movie.movies.data.data.homepage} color="#515151" underline="hover"> 
                <Card.Img variant="top" />
                <img src={"https://image.tmdb.org/t/p/w200" + movie.movies.data.data.poster_path} alt={movie.movies.data.data.title} width="250px"/> 
                <Card.Body> <br></br>
                <Card.Title>{movie.movies.data.data.title}</Card.Title>
                </Card.Body>
                </Link>
            </Card>
        </div>        
    )
};

export default Cards;