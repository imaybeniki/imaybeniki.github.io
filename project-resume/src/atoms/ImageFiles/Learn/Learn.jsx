import React from 'react';
import learn from'./learn.png';
import '../image.css';

/**
 * @summary renders the Learn image 
 */
export function Learn(props) {
    return (
        <nav>
            <div className="container">
                <img  src={learn} alt="learn"/>
                <h3>Learn</h3>
            </div>
        </nav>
    );
}