import React from 'react';
import Link from '@mui/material/Link';
import Pull from '../../assets/pull_colorida.png';
import './style.css';

function Cards() {
    return (
        <div className="cards">
            <Link href="https://github.com/ErickHDdS" underline="hover">
                <img src={Pull} alt="Pull, a Arara" width="170px"/>   
            </Link>
        </div> 
    )
};

export default Cards;