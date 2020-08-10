import React from 'react';
import PropTypes from 'prop-types';
import ContentFilter from '../../organisms/content/ContentFilter';
import Header from '../../organisms/header/Header';
import * as formatter from '../../content/contentFormatters';
import './contentContainer.css';

/**
 * @summary Renders an array of Content boxes from an array of JSON objects
 * @property {array} location: location coming from react router
 * @property {array} history: hisotry coming from react router
 */
export default function ContentContainer(props){
    const { history, location } = props;
    const headerText = formatter.formatHeaderText(location.pathname);
    return (
        <div className="content-container">
            <Header history={history} unstickyHeaderText={headerText} stickyHeaderText={headerText}/>
            <ContentFilter {...props} />
        </div>
    );
}

ContentContainer.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }
