import React from 'react';
import Timeline from '../ImageFiles/timeline';

export function NavButton(props) {

    const { icon } = props;

    const svgOptions = {
        timeline: Timeline
    }

    const Icon = svgOptions[icon];
    return <Icon icon={`${icon}`} />
}