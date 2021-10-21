import React from 'react';
import Pull from '../../assets/pull_colorida.png';
import './style.css';

function Cards() {
    return (
        <div className="cards">
            <a href="https://github.com/ErickHDdS" target="_new">
                <img src={Pull} alt="Pull, a Arara" width="170px"/>   
            </a>
        </div> 
    )
};

export default Cards;