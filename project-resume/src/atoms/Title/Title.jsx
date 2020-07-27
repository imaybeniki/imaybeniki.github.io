import React from "react";
import PropTypes from 'prop-types';
import './title.css';

/**
 * @summary Renders a title for content
 * @property {string} title: the title of the content
 * @property {string} body: the string text representing the content
 */
export default function Title(props){
  const { title } = props;
  return ( title ? <h1><span>{title}</span></h1> : null );
}

Title.propTypes = {
  title: PropTypes.string,
}

Title.defaultProps = {
  title: '',
}