import React from 'react';
import logo from'./github.png';
import './social.css';

/**
 * @summary renders the GitHub icon
 */
export function GitHub(){

    return (
        <nav>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/imaybeniki">
            <img id="social" src={logo} alt="github-logo"/>
        </a>
        </nav>
    );
}