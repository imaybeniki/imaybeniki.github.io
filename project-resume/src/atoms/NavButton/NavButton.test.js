import React from 'react';

/**
 * @summary a wrapper for all SVG files to have onclick handling as well as props to adjust size, color, etc
 * @prop the name of the svg image to be rendered
 * @prop the name of the alt text to render with the svg image
 */

 class NavButton extends React.Component {
     render () {
         const {svg, name} = this.props;
         const selections = {
             
         };

         const Selection = selections[svg];
         return <Selection name={name} {...this.props} />
     }
 }