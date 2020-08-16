import React from "react";
import PropTypes from 'prop-types';
import './paragraph.css';

/**
 * @summary Renders a paragraph
 * @property {string} body: the string text representing the content
 */
export default function Paragraph( { body } ) {

  return (
      <div className="content-box">
          <p>{body}</p>
      </div>
  );
}

Paragraph.propTypes = {
  body: PropTypes.string,
}

Paragraph.defaultProps = {
  body: '',
}