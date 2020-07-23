import React from 'react';
import PropTypes from 'prop-types';
import { NavButton } from '../../atoms/NavButton/NavButton';
import Header from '../../organisms/header/Header'
import './homepage.css';

/**
 * @summary The homepage renders specified icons into two flexbox rows
 * @property {array} history: the BrowserRouter history
 */
export default function Homepage(props){
  const { history } = props;

  return (
    <div className="full-page">
      <Header stickyHeaderText="Home" unstickyHeaderText="Nicole May"/>
      <div className="homepage-outer-flexbox">
        <div className="homepage-row-one">
          <NavButton 
            icon="timeline"
            history={history}
          />
          <NavButton 
            icon="me" 
            history={history}
          />
          <NavButton 
            icon="learn" 
            history={history}
          />
        </div>
        <div className="homepage-row-two">
          <NavButton 
            icon="meta" 
            history={history}
          />
          <NavButton 
            icon="projects" 
            history={history}
          />
          <NavButton 
            icon="education" 
            history={history}
          />
        </div>
      </div>
    </div>
  );
}

Homepage.propTypes = {
  history: PropTypes.array.isRequired,
}