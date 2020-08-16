import React from 'react';
import me from'./me.png';
import '../image.css';

/**
 * @summary renders the Me icon
 */
export function Me(props) {
    return (
        <nav>
            <div className="container">
                <img  src={me} alt="me"/>
                <h3>About Me</h3>
            </div>
        </nav>
    );
}