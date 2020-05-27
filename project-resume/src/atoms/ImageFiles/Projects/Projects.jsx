import React from 'react';
import projects from'./projects.png';

/**
 * @param {string} className the name of the class to style the png image 
 */
export function Projects(props) {

    const { className } = props;

    return (
        <nav className={className}>
        <div className="container">
            <img  src={projects} alt="projects"/>
        </div>
        </nav>
    );
}