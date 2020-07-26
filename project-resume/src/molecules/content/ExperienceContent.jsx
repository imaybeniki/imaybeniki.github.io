import React from "react";
import PropTypes from 'prop-types';
import './content.css';

/**
 * @summary The homepage renders specified icons into two flexbox rows
 * @property {string} title: the title of the content
 * @property {string} body: the string text representing the content
 */
export default function ExperienceContent(props){
  const { position, employer } = props;

  return (
    <div className="content-box">
        <h2>{position}</h2>
        <p>{employer}</p>
    </div>
  );
}

ExperienceContent.propTypes = {
    employer: PropTypes.string,
    position: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    description: PropTypes.string
}

ExperienceContent.defaultProps = {
    employer: '',
    position: '',
    start: '',
    end: '',
    description: ''
}