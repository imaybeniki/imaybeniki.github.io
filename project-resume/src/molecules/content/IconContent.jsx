import React from "react";
import PropTypes from 'prop-types';
import Title from "../../atoms/Title/Title";
import './content.css';
import Icons from "../icons/Icons";
import Paragraph from "../../atoms/Paragraph/Paragraph";

/**
 * @summary The homepage renders specified icons into two flexbox rows
 * @property {string} body: the string text representing the content
 * @property {string} history: the React Router history object
 * @property {string} iconName: the name of the icon to render
 * @property {string} title: the title of the content
 */
export default function IconContent(
  { 
    body, 
    history,
    iconName,
    title,
  }
){

  return (
      <div className="outer-content-box">
          <Title title={title} />
          <div className="icon-content-box">
              <Icons 
                icons={[iconName]}
                history={history}
              />
              <Paragraph body={body} />
          </div>
      </div>
    )
}

IconContent.propTypes = {
  body: PropTypes.string,
  history: PropTypes.object.isRequired,
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string,
}

IconContent.defaultProps = {
  body: '',
  title: '',
}