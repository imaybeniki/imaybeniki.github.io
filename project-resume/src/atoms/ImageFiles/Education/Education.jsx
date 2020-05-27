import React from 'react';
import education from'./education.png';

/**
 * @param {string} className the name of the class to style the png image 
 */
export function Education(props) {

    const { className } = props;

    return (
        <nav className={className}>
        <div className="container">
            <img  src={education} alt="education"/>
        </div>
        </nav>
    );
}