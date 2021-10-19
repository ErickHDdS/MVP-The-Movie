import React from 'react';
//import './style.css';
import {ReactComponent as MovieIcon} from '../../assets/movie-svgrepo-com.svg'


function Header() {
    return (
       <header className="header-initial">
            <MovieIcon/>
            <div className="menu-links">
                <span> Releases </span>
                <span> | </span>
                <span> Highlights </span>
            </div>

            <input type="text" placeholder="Search" className="search-input"></input>
       </header>
    );
}

export default Header;