import React from 'react';
import '../../styles/Footer.css';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
// import { MdPersonPinCircle } from 'react-icons/md';

function Footer() {
    return (
        <footer>
            <div className="content-row">
                <p>Jacob Krol {(new Date().getFullYear()).toString()}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</p>
                <a href="https://github.com/jacobkrol" target="_blank" rel="noopener noreferrer"><AiFillGithub title="github" /></a>&nbsp;
                <a href="https://linkedin.com/in/JacobSKrol" target="_blank" rel="noopener noreferrer"><AiFillLinkedin title="linked in" /></a>&nbsp;
                <Link to="/contact"><MdEmail title="email" /></Link>
            </div>
        </footer>
    )
}

export default Footer;
