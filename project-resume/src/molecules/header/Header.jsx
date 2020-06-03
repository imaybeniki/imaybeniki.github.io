import React from 'react';
import './header.css';

/**
 * @summary The header for each page
 * @param {string} primaryTitle the first section of the title, orange
 * @param {string} secondaryTitle the second section of the title, blue
 */
export function Header(props) {

    const { primaryTitle, secondaryTitle } = props;

    return (
        <div className="sidebar">
            <div className="primary">
                {`${primaryTitle || ''}: `}
            </div>
            <div className="secondary">
                {`${secondaryTitle || ''}`}
            </div>
            <ul />
        </div>
    );
}