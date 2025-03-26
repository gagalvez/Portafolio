import React from "react";

// eslint-disable-next-line no-unused-vars
const ButonComponent = ({ href, icon: Icon, text }) => {
  return (
    <a
      href={href}
      className="cv-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="cv-icon-size" /> {text}
    </a>
  );
};

export default ButonComponent;
