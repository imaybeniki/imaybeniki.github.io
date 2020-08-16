import React from 'react';
import PropTypes from 'prop-types';
import { Timeline } from '../ImageFiles/Timeline/Timeline';
import { Education } from '../ImageFiles/Education/Education';
import { Learn } from '../ImageFiles/Learn/Learn';
import { Me } from '../ImageFiles/Me/Me';
import { Meta } from '../ImageFiles/Meta/Meta';
import { Projects } from '../ImageFiles/Projects/Projects';
import { Home } from '../ImageFiles/Home/Home';

/**
 * @summary renders a single icon
 * @prop {object} history from react router
 * @prop {string} icon the name of the icon to render
 */
export function NavButton({ history, icon }) {

    const pngOptions = {
        timeline: Timeline,
        education: Education,
        learn: Learn,
        me: Me,
        meta: Meta,
        projects: Projects,
        home: Home,
    }

    const Icon = pngOptions[icon];
    return (
        <div
            onClick={() => history.replace(`/${icon}`)}
            onKeyPress={() => history.replace(`/${icon}`)}
        >
            <Icon icon={`${icon}`} />
        </div>          
    )
}

NavButton.propTypes = {
    history: PropTypes.object.isRequired,
    icon: PropTypes.string
}