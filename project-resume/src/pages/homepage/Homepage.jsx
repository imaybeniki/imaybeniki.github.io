import React, { useState, useEffect } from 'react';
import { NavButton } from '../../atoms/NavButton/NavButton';

export function Homepage(props) {
  const { selection } = props;

  return (
    <div className="homepage-outer-flexbox">
      <div className="homepage-row-one">
        <NavButton icon="timeline"/>
        <NavButton icon="me"/>
      </div>
      <div className="homepage-row-two">>
        <NavButton icon="projects"/>
        <NavButton icon="education"/>
      </div>
      <div className="homepage-row-three">>
        <NavButton icon="meta"/>
        <NavButton icon="learn"/>
      </div>
    </div>
  );
}