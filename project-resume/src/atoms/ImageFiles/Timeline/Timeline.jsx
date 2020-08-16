import React from 'react';
import timeline from'./timeline.png';
import '../image.css';

/**
 * @summary renders the Timeline icon
 */
export function Timeline(props) {
    return (
        <nav>
            <div className="container">
                <img  src={timeline} alt="timeline"/>
                <h3>Timeline</h3>
            </div>
        </nav>
    );
}