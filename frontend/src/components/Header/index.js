import React from 'react';
import Link from '@mui/material/Link';
import './style.css';
import {ReactComponent as LogoIcon} from '../../assets/erick_logo.svg';
import { FaSearch } from "react-icons/fa";

function Header() {
    return (
       <header className="main-header">
            <Link href="http://localhost:3000/" underline="hover" className = "header-icon-logo" color="#515151">
                {<LogoIcon />}
            </Link>

            <div className="menu-links">
                Releases | Highlights 
            </div>

            <div className="search">
                <FaSearch color="#E2E8EB" className = "searchIcon"/>
                <input type="text" color="#E2E8EB" placeholder="Movie" className="search-input"></input>
            </div>
       </header>
    );
}

export default Header;