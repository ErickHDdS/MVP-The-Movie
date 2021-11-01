import Card from 'react-bootstrap/Card'
//import Pull from '../../assets/commitjr_old.svg';
import './style.css';

function Cards(movie) {
    return (        
        <div className="cards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <img src={movie} alt="Text" width="170px"/> 
                <Card.Body> <br></br>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
          </div>

        /*{ <div className="cards">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <img src={movie.poster_path} alt="" width="170px"/> 
            <Card.Body> <br></br>
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
            </Card.Body>
        </Card>
        </div> }*/
    )
};

export default Cards;