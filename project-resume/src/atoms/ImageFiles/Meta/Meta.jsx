import React from 'react';
import meta from'./meta.png';

/**
 * @param {string} className the name of the class to style the png image 
 */
export function Meta(props) {

    const { className } = props;

    return (
        <nav className={className}>
        <div className="container">
            <img  src={meta} alt="meta"/>
        </div>
        </nav>
    );
}