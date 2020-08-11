import React from "react";
import PropTypes from 'prop-types';
import Title from "../../atoms/Title/Title";
import './content.css';
import Icons from "../icons/Icons";

/**
 * @summary The homepage renders specified icons into two flexbox rows
 * @property {string} title: the title of the content
 * @property {string} body: the string text representing the content
 */
export default function IconContent(props){
  const { body, title } = props;

  return (
    <div className="outer-content-box">
        <Title title={title} />
        <div className="content-box">
            <Icons icons={["aspen"]}/>
            <p>{body}</p>
        </div>
    </div>
  );
}

IconContent.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string,
}

IconContent.defaultProps = {
  body: '',
  title: '',
}