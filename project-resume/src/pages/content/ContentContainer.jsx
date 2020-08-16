import React from 'react';
import PropTypes from 'prop-types';
import ContentFilter from '../../organisms/content/ContentFilter';
import Header from '../../organisms/header/Header';
import * as formatter from '../../content/contentFormatters';
import './contentContainer.css';

/**
 * @summary Renders an array of Content boxes from an array of JSON objects
 * @property {array} match: location coming from react router
 * @property {array} history: hisotry coming from react router
 */
export default function ContentContainer(props){
    const { history, match: { params: { type } } } = props;
    const headerText = formatter.formatHeaderText(type);
    return (
        <div className="content-container">
            <Header history={history} unstickyHeaderText={headerText} stickyHeaderText={headerText}/>
            <div className="all-content">
                <ContentFilter {...props} />
            </div>
        </div>
    );
}

ContentContainer.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }
