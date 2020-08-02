import React from 'react';
import education from'./education.png';
import '../image.css';

/**
 * @summary renders the Education icon
 */
export function Education(props) {
    return (
        <nav>
            <div className="container">
                <img  src={education} alt="education"/>
            </div>
        </nav>
    );
}