import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/header/Header'
import Icons from '../../molecules/icons/Icons';
import homepage from './homepageDetails.json';
import './homepage.css';

/**
 * @summary The homepage renders specified icons into two flexbox rows
 * @property {array} history: the BrowserRouter history
 */
export default function Homepage(props){
  const { history } = props;

  return (
    <div className="full-page">
      <Header unstickyHeaderText="Nicole May"/>
      <Icons icons={homepage.icons}/>
    </div>
  );
}

Homepage.propTypes = {
  history: PropTypes.array.isRequired,
}