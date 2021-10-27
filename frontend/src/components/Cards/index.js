import React from 'react';
import Pull from '../../assets/pull_colorida.png';
import './style.css';

function Cards(card) {
    return (
        <div className="cards">
            <img src={Pull} alt="Pull, a Arara" width="170px"/>   
        </div> 
    )
};

export default Cards;