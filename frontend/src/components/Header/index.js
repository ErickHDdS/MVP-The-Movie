import React from 'react';
import Link from '@mui/material/Link';
import './style.css';
import {ReactComponent as LogoIcon} from '../../assets/erick_logo.svg';
//import {ReactComponent as SearchIcon} from '../../assets/search_24px_outlined.svg';
import { FaSearch } from "react-icons/fa";

function Header() {
    return (
       <header className="main-header">
            <Link href="http://localhost:3000/" underline="hover" className = "header-icon-logo">
                {<LogoIcon />}
            </Link>

            <div className="menu-links">
                Releases | Highlights 
            </div>

            <div className="search">
                <FaSearch color="#515151" className = "searchIcon"/>
                <input type="text" placeholder="Movie" className="search-input"></input>
            </div>
       </header>
    );
}

export default Header;