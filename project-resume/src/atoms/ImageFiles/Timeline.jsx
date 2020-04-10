import React from 'react';

export function Timeline(props) {

    const { className, height, width } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            className={className}
        >

        </svg>
    )
}