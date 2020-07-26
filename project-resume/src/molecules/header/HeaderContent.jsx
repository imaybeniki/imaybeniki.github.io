import React from "react";
import './headerContent.css';

export default function HeaderContent(props) {
  const { headerTitle } = props;
  return (
    <div className="header-content">
      <div className="header-title">       
        {headerTitle}
      </div>
        <div className="url-list">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicole-may-b5a6a0126/">LinkedIn</a>
          {" | "}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/imaybeniki">GitHub</a>
        </div>
    </div>
  );
}
