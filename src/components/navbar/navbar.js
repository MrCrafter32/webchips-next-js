import React, { memo } from 'react';
import styles from './navbar.css';

export const Navbar = memo(function Navbar({}) {
    return (
        <div className='full'>
                <div className='half b'>
                    <a className='web'>WEB</a>
                    <a className='chips'>CHIPS</a>
                </div>
                <div className='half a'>
                    <a href='./' className='home buttons'>Home</a>
                    <a href='/services' className='ourservices buttons'>Our Services</a>
                    <a href='/portfolio' className='portfolio buttons'>Portfolio</a>
                    <a href='/about' className='about buttons'>About</a>
                    <a href='/contact' className='contact buttons'>Contact</a>
                </div>
            </div>
    );
});
    