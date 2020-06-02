import React from 'react';
import timeline from'./timeline.png';

/**
 * @param {string} className the name of the class to style the png image 
 */
export function Timeline(props) {

    const { className } = props;

    return (
        <nav className={className}>
        <div className="container">
            <img  src={timeline} alt="timeline"/>
        </div>
        </nav>
    );
}