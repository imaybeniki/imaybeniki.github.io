import React from "react";
import PropTypes from 'prop-types';
import Title from "../../atoms/Title/Title";
import './content.css';

/**
 * @summary The homepage renders specified icons into two flexbox rows
 * @property {array} history: the BrowserRouter history
 * @property {string} title: 
 */
export default function JournalContent(props){
  const { body, title } = props;

  return (
    <div className="outer-content-box">
      <Title title={title} />
      <div className="content-box">
          <p>{body}</p>
      </div>
    </div>
  );
}

JournalContent.propTypes = {
    body: PropTypes.string,
    title: PropTypes.string,
}
  
JournalContent.defaultProps = {
    body: '',
    title: '',
}