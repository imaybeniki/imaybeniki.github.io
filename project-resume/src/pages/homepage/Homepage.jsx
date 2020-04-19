import React, { useState, useEffect } from 'react';
import { NavButton } from '../../atoms/NavButton/NavButton';

export function Homepage(props) {
  const { selection } = props;

  return (
    <div className="homepage-outer-flexbox">
      <div className="homepage-row-one">
        <NavButton 
          icon="timeline"
          height={20}
          width={20}
        />
        <NavButton 
          icon="me" 
          height={20}
          width={20}
        />
      </div>
      <div className="homepage-row-two">
        <NavButton 
          icon="projects" 
          height={20}
          width={20}
        />
        <NavButton 
          icon="education" 
          height={20}
          width={20}
        />
      </div>
      <div className="homepage-row-three">
        <NavButton 
          icon="meta" 
          height={20}
          width={20}
        />
        <NavButton 
          icon="learn" 
          height={20}
          width={20}
        />
      </div>
    </div>
  );
}