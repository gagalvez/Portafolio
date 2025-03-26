import "../css/SideBar.css";
import { PiFileArchiveThin } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import React from "react";
import ButonComponent from "./ButonComponent";

const butonProperties = [
  {
    id: "github",
    href: "https://github.com/gagalvez",
    icon: VscGithubAlt,
    text: "GitHub",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com",
    icon: CiLinkedin ,
    text: "LinkedIn",
  },
  {
    id: "cv",
    href: "/assets/Gabriel_Galvez_CV.pdf",
    icon: PiFileArchiveThin,
    text: "LinkedIn",
    download: true,
  },
];

const Sidebar = () => (
  <div className="side-bar">
    <div className="side-bar-photo">
      <img src="#" alt="Profile" />
    </div>
    <div className="side-bar-info">
      <h1>Gabriel Gálvez Valenzuela</h1>
      <p>Analista Programador Computacional</p>
    </div>
    <div className="side-bar-nav">
      <ul>
        {butonProperties.map(({ id, href, icon, text, download }) => (
          <li key={id}>
            {download ? (
              <a href={href} download={"Gabriel_Galvez_CV.pdf"}>
                <ButonComponent icon={icon} text={text} />
              </a>
            ) : (
              <ButonComponent href={href} icon={icon} text={text} />
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Sidebar;
