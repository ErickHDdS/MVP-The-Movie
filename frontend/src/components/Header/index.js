import React, { useEffect, useState } from "react";
import Link from '@mui/material/Link';
import './style.css';
import {ReactComponent as LogoIcon} from '../../assets/erick_logo.svg';
import { FaSearch } from "react-icons/fa";
import { IconButton } from '@mui/material';
import getSearch from '../../APIs/GetInfos';
import SliderMovie from '../Slider';

function Header() {
    let search;
    function capturar() {
    search = document.getElementById('valor').value;
    handleGetResults();
    }

    const [searchResults, setSearchResults] = useState([]);

    async function handleGetResults() {
        const results = await getSearch(search);        
        setSearchResults(results.data.data.results);
    }

    return (
       <header >
        <section className="main-header">
        <Link href="http://localhost:3000/" underline="hover" className = "header-icon-logo" color="#515151">
                {<LogoIcon />}
            </Link>

            <div className="menu-links">
                Releases | Highlights 
            </div>

            <form className="search">
                <IconButton > <FaSearch color="#E2E8EB" className = "searchIcon" onClick={capturar}/> </IconButton >
                <input type="text" color="#E2E8EB" className="search-input" id="valor"></input>
            </form>
        </section>

        <section className="search-results">
            {searchResults.length != 0 && (                
                <div className="slider">
                    <div className = "search-title">
                        Search Results
                    </div>
                    <SliderMovie movies={searchResults} /> 
                </div>
            )}
        </section>

       </header>
        
    );
}

export default Header;