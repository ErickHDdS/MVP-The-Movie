import React from 'react';
import Link from '@mui/material/Link';
import './style.css';
import {ReactComponent as LogoIcon} from '../../assets/erick_logo.svg';
import { FaSearch } from "react-icons/fa";
import { Button } from '@mui/material';

var capturando = "";
function capturar() {
    capturando = document.getElementById('valor').value;
    console.log(capturando)
}
function Header() {
    return (
       <header className="main-header">
            <Link href="http://localhost:3000/" underline="hover" className = "header-icon-logo" color="#515151">
                {<LogoIcon />}
            </Link>

            <div className="menu-links">
                Releases | Highlights 
            </div>

            <form className="search">
                <Button> <FaSearch color="#E2E8EB" className = "searchIcon" onClick={capturar}/> </Button>
                <input type="text" color="#E2E8EB" placeholder= "Movie | Genre" className="search-input" id="valor"></input>
            </form>
       </header>
    );
}

export default Header;