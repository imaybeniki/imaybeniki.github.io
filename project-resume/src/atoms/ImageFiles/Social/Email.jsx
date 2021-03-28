import React from 'react';
import email from'./email.png';
import './social.css';

/**
 * @summary renders the Email icon
 */
export function Email(){

    return (
        <nav>
        <a target="_blank" rel="noopener noreferrer" href="mailto: nicole.may.14@cnu.edu">
            <img id="social" src={email} alt="email"/>
        </a>
        </nav>
    );
}