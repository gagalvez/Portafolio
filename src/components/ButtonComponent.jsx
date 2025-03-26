import React from "react";

const ButtonComponent = ({ href, icon: Icon, text }) => {
  return (
    <a href={href} className="cv-icon" target="_blank"> 
      <Icon className="cv-icon-size" /> {text}
    </a>
  );
};

export default ButtonComponent;
