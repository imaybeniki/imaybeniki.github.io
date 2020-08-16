import React from 'react';
import home from'./home.png';
import '../image.css';

/**
 * @summary renders the Learn image 
 */
export function Home() {
    return (
        <nav>
            <div className="home-container">
                <img  src={home} alt="home"/>
            </div>
        </nav>
    );
}