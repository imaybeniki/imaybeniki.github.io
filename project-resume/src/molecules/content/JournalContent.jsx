import React from "react";
import PropTypes from 'prop-types';
import Title from "../../atoms/Title/Title";
import './content.css';
import Paragraph from "../../atoms/Paragraph/Paragraph";

/**
 * @summary The Journal content box represents a 
 * @property {array} history: the BrowserRouter history
 * @property {string} title: 
 */
export default function JournalContent(props){
  const { body, title } = props;

  return (
    <div className="outer-content-box">
      <Title title={title} />
      <Paragraph />
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