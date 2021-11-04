import React from 'react';
import Link from '@mui/material/Link';
import './style.css';
import {ReactComponent as CommitJr} from'../../assets/commitjr_new_cinza.svg';
import {ReactComponent as LogoIcon} from '../../assets/erick_logo.svg';

import { GoMarkGithub } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";

function date() {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <footer className="main-footer">

            <div className="footer-icon-commit">
                <Link href="https://www.linkedin.com/company/commitjr/?originalSubdomain=br" underline="hover">
                    {<CommitJr />}
                </Link>
            </div>

            <div className="footer-icon-developer">
                Developed by 
                <Link 
                    href="https://www.linkedin.com/in/erickhenriquedds/" underline="hover" color="#515151"> Erick Henrique
                </Link><br></br><br></br>

                <Link href="https://github.com/ErickHDdS" className="github-icon" color="#515151"> 
                    {<GoMarkGithub />} 
                </Link> <tab></tab>

                <Link href="https://www.linkedin.com/in/erickhenriquedds/" className="linkedin-icon" color="#515151"> 
                    {<FaLinkedinIn />}<br></br>
                </Link>   
                
                Copyright © {date()}
            </div>

            <div className="footer-icon-logo">
                <Link href="http://localhost:3000/" underline="hover">
                        {<LogoIcon />}
                </Link>
            </div>
            
        </footer>
    );
}

export default Footer;