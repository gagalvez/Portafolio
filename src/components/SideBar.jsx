import "../css/SideBar.css";

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="side-bar-photo">
        <img src="#" alt="#" />
      </div>
      <div className="side-bar-info">
        <h1>Gabriel Galvez Valenzuela</h1>
        <p>Analista Programador en formacion</p>
      </div>
      <div className="side-bar-nav">
        <ul>
          <li>
            <a href="linkedin.com/in/ggalvezv">LinkedIn</a>
          </li>
          <li>
            <p>Descargar CV</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
