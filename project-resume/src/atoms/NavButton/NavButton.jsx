import React from 'react';
import PropTypes from 'prop-types';
import { Timeline } from '../ImageFiles/Timeline/Timeline';
import { Education } from '../ImageFiles/Education/Education';
import { Learn } from '../ImageFiles/Learn/Learn';
import { Me } from '../ImageFiles/Me/Me';
import { Meta } from '../ImageFiles/Meta/Meta';
import { Projects } from '../ImageFiles/Projects/Projects';
import { Home } from '../ImageFiles/Home/Home';
import { Aspen } from '../ImageFiles/Aspen/Aspen';
import { LinkedIn } from '../ImageFiles/Social/LinkedIn';
import { Email } from '../ImageFiles/Social/Email';
import { GitHub } from '../ImageFiles/Social/GitHub';

/**
 * @summary renders a single icon
 * @prop {object} history from react router
 * @prop {string} icon the name of the icon to render
 */
export function NavButton({ history, icon, onClick }) {

    const pngOptions = {
        aspen: Aspen,
        timeline: Timeline,
        education: Education,
        learn: Learn,
        me: Me,
        meta: Meta,
        projects: Projects,
        home: Home,
        linkedin: LinkedIn,
        email: Email,
        github: GitHub,

    }

    if (!pngOptions[icon]) return <React.Empty />;

    const Icon = pngOptions[icon];
    return (
        <div
            onClick={() => onClick || history.replace(`/project-resume/${icon}`)}
            onKeyPress={() => onClick || history.replace(`/project-resume/${icon}`)}
        >
            <Icon icon={`${icon}`} />
        </div>          
    );
}

NavButton.propTypes = {
    history: PropTypes.object.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func
}