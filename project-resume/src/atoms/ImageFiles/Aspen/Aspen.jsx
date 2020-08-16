import React from 'react';
import aspen from'./aspen.png';
import '../image.css';

/**
 * @summary renders the Learn image 
 */
export function Aspen() {
    return (
        <nav>
            <div className="container">
                <img  src={aspen} alt="aspen-dog"/>
            </div>
        </nav>
    );
}