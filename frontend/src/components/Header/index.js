import React from 'react';
import './style.css';
import {ReactComponent as LogoIcon} from '../../assets/erick_logo.svg';
import {ReactComponent as SearchIcon} from '../../assets/search_24px_outlined.svg';


function Header() {
    return (
       <header className="main-header">
            <a href="http://localhost:3000/" target="_new" className = "header-icon-logo">
                    <LogoIcon />
            </a>
            
            <div className="menu-links">
                Releases | Highlights 
            </div>

            <div className="search">
                <SearchIcon className = "searchIcon"/>
                <input type="text" placeholder="Movie" className="search-input"></input>
            </div>
       </header>
    );
}

export default Header;