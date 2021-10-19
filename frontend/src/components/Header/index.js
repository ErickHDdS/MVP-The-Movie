import React from 'react';
import './style.css';
import {ReactComponent as LogoIcon} from '../../assets/erick_logo.svg';
import {ReactComponent as SearchIcon} from '../../assets/search_24px_outlined.svg';


function Header() {
    return (
       <header className="main-header">
            <LogoIcon className = "logoIcon"/>
            <div className="menu-links">
                <span> Releases </span>
                <span> | </span>
                <span> Highlights </span>
            </div>

            <div className="search">
                <SearchIcon className = "searchIcon"/>
                <input type="text" placeholder="Search" className="search-input"></input>
            </div>
       </header>
    );
}

export default Header;