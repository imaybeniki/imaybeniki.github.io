import React from "react";
import PropTypes from 'prop-types';
import './content.css';

/**
 * @summary The homepage renders specified icons into two flexbox rows
 * @property {string} title: the title of the content
 * @property {string} body: the string text representing the content
 */
export default function Content(props){
  const { body, title } = props;

  return (
    <div className="content-box">
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
  );
}

Content.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string,
}

Content.defaultProps = {
  body: '',
  title: '',
}