import React from "react";
import PropTypes from 'prop-types';
import './content.css';

/**
 * @summary The homepage renders specified icons into two flexbox rows
 * @property {string} title: the title of the content
 * @property {string} body: the string text representing the content
 */
export default function VideoContent(props){
  const { body, title } = props;

  return (
    <div className="short-content-box">
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
  );
}

VideoContent.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
}

VideoContent.defaultProps = {
  body: '',
  title: '',
}