import React from 'react';
import './Header.css';
import image from '../../images/shefat_circle_image.png';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h2>Knowledge Universe</h2>
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/login">Login</a>
                <img className='nav-image' src={image} alt="" />
            </div>
        </nav>
    );
};

export default Header;