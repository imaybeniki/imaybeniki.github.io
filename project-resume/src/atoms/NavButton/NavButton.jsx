import React from 'react';
import { Timeline } from '../ImageFiles/Timeline/Timeline';
import { Education } from '../ImageFiles/Education/Education';
import { Learn } from '../ImageFiles/Learn/Learn';
import { Me } from '../ImageFiles/Me/Me';
import { Meta } from '../ImageFiles/Meta/Meta';
import { Projects } from '../ImageFiles/Projects/Projects';

export function NavButton(props) {

    const { history, icon } = props;

    const svgOptions = {
        timeline: Timeline,
        education: Education,
        learn: Learn,
        me: Me,
        meta: Meta,
        projects: Projects,
    }

    const Icon = svgOptions[icon];
    return (
        <div
            onClick={() => history.push(icon)}
            onButtonPress={() => history.push(icon)}
        >
            <Icon icon={`${icon}`} />
        </div>          
    )
}