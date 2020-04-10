import React, { useState, useEffect } from 'react';
import { NavButton } from '../../atoms/NavButton/NavButton';

export function Homepage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="homepage-outer-flexbox">
      <div className="homepage-row-one">
        <NavButton />
        <NavButton />
      </div>
      <div className="homepage-row-two">>
        <NavButton />
        <NavButton />
      </div>
      <div className="homepage-row-three">>
        <NavButton />
        <NavButton />
      </div>
    </div>
  );
}