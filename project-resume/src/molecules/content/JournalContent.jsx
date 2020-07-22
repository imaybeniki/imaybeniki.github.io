import React from 'react';
import './content.css';

/**
 * @summary The homepage renders specified icons into two flexbox rows
 * @property {array} history: the BrowserRouter history
 * @property {string} title: 
 */
export default function JournalContent(props){
  const { body, title } = props;

  return (
    <div className="journal-content-box">
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
  );
}