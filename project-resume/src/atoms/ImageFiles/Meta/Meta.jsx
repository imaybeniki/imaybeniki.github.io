import React from 'react';
import meta from'./meta.png';
import '../image.css';

/**
 * @summary renders the Meta icon
 */
export function Meta(props) {

    return (
        <nav>
        <div className="container">
            <img  src={meta} alt="meta"/>
        </div>
        </nav>
    );
}