import React, { useState, useEffect } from 'react';
import { NavButton } from '../../atoms/NavButton/NavButton';
import './homepage.css';

export function Homepage(props) {

  return (
    <div className="homepage-outer-flexbox">
      <div className="homepage-row-one">
        <NavButton 
          icon="timeline"
        />
        <NavButton 
          icon="me" 
        />
        <NavButton 
          icon="learn" 
        />
      </div>
      <div className="homepage-row-two">
        <NavButton 
          icon="meta" 
        />
        <NavButton 
          icon="projects" 
        />
        <NavButton 
          icon="education" 
        />
      </div>
    </div>
  );
}