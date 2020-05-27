import React from 'react';
import me from'./me.png';

/**
 * @param {string} className the name of the class to style the png image 
 */
export function Me(props) {

    const { className } = props;

    return (
        <nav className={className}>
        <div className="container">
            <img  src={me} alt="me"/>
        </div>
        </nav>
    );
}