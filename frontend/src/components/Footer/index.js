import React from 'react';
import './style.css';
import {ReactComponent as CommitJr} from'../../assets/commitjr_new_cinza.svg';
import {ReactComponent as GitHubIcon} from '../../assets/github.svg';
import {ReactComponent as LogoIcon} from '../../assets/erick_logo.svg';

function date() {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-icon-developer">
                Developed by <a href="https://www.linkedin.com/in/erickhenriquedds/">Erick Henrique</a><br></br><br></br>
                <a href="https://github.com/ErickHDdS" target="_new">
                    <GitHubIcon /><br></br><br></br>   
                </a>
                Copyright © {date()}
            </div>
            <div className="footer-icon-commit">
                <a href="https://www.linkedin.com/company/commitjr/?originalSubdomain=br" target="_new">
                    <CommitJr />
                </a>
            </div>
            <div className="footer-icon-logo">
                <a href="http://localhost:3000/" target="_new">
                    <LogoIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer;