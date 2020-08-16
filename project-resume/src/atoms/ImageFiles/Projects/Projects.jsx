import React from 'react';
import projects from'./projects.png';
import '../image.css';

/**
 * @summary renders the Projects icon
 */
export function Projects(props) {
    return (
        <nav>
            <div className="container">
                <img  src={projects} alt="projects"/>
                <h3>Projects</h3>
            </div>
        </nav>
    );
}