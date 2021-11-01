import Card from 'react-bootstrap/Card'
import './style.css';

function Cards(movie) {
    return (      
        <div className="cards">
            <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" />
                <img src={"https://image.tmdb.org/t/p/w200" + movie.movies.poster_path} alt={movie.movies.title} width="250px"/> 
                <Card.Body> <br></br>
                <Card.Title>{movie.movies.title}</Card.Title>
                </Card.Body>
            </Card>
        </div>        
    )
};

export default Cards;