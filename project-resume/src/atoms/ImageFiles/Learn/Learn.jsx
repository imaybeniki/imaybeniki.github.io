import React from 'react';
import learn from'./learn.png';

/**
 * @param {string} className the name of the class to style the png image 
 */
export function Learn(props) {

    const { className } = props;

    return (
        <nav className={className}>
        <div className="container">
            <img  src={learn} alt="learn"/>
        </div>
        </nav>
    );
}