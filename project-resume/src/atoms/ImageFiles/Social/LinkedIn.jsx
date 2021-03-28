import React from 'react';
import logo from'./linkedin.png';
import './social.css';

/**
 * @summary renders the Email icon
 */
export function LinkedIn(){

    return (
        <nav id="linkedin">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicole-may-b5a6a0126/">
            <img id="social"  src={logo} alt="linkedin-logo" />
        </a>
        </nav>
    );
}