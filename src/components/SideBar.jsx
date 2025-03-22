import "../css/SideBar.css";
import { PiFileArchiveThin } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import React from "react";
import ButtonComponent from "./ButtonComponent";

function Sidebar() {
  return (
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
          <li>
            <ButtonComponent
              href="https://github.com/gagalvez"
              icon={VscGithubAlt}
              text="GitHub"
            />
          </li>
          <li>
            <ButtonComponent
              href="https://www.linkedin.com"
              icon={CiLinkedin}
              text="LinkedIn"
            />
          </li>
          <li>
            <a
              href="/assets/Gabriel_Galvez_CV.pdf"
              download="Gabriel_Galvez_CV.pdf"
            >
              <ButtonComponent icon={PiFileArchiveThin} text="Descargar CV" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

