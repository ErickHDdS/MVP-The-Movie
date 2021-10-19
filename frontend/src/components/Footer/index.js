import React from 'react';
//import './style.css';/../assets
import {ReactComponent as CommitJr} from'../../assets/commitjr.svg';
import {ReactComponent as GitHubIcon} from '../../assets/github.svg'

function Footer() {
    return (
    <footer className="main-footer">

            Made by Erick Henrique<br></br>
            <div className="footer-icons">
                <a href="https://github.com/ErickHDdS" target="_new">
                    <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/company/commitjr/?originalSubdomain=br" target="_new">
                    <CommitJr />
                </a>
            </div>
        </footer>
    );
}

export default Footer;