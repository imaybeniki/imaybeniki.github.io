import React from "react";
import './footerContent.css';

export default function FooterContent() {
  return (
    <div className="header-content">
        <div className="url-list">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicole-may-b5a6a0126/">LinkedIn</a>
          {" | "}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/imaybeniki">GitHub</a>
          {" | "}
          <a target="_blank" rel="noopener noreferrer" href="mailto: nicole.may.14@cnu.edu">Email</a>
        </div>
    </div>
  );
}
