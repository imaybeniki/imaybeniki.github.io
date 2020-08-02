import React from 'react';
import PropTypes from 'prop-types';
import { NavButton } from '../../atoms/NavButton/NavButton';
import './icons.css';

/**
 * @summary The homepage renders specified icons into a given number of columns
 * @prop {array} icons: the list of strings representing icons to render
 * @prop {array} history: the history object for routing
 */
export default function Icons(props){
  const { history, icons } = props;

  return icons.map(icon => (
    <NavButton
      icon={icon}
      history={history}
      key={icon}
    />
  ));
}

Icons.propTypes = {
  icons: PropTypes.array.isRequired,
  history: PropTypes.array.isRequired,
}