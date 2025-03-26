import "../css/Home.css";
import Badges from "./Badges";

function Home() {
  return (
    <div className="main-content">
      <div className="info-box">
        <h1>Bla bla</h1>
        <p>
          Apasionado por la tecnología y el aprendizaje continuo, busco
          constantemente nuevos desafíos que impulsen mi desarrollo. Me adapto
          con facilidad a distintos entornos y colaboro eficazmente en equipos
          diversos.
        </p>
      </div>

      <div className="badge-box">
          <Badges />
      </div>
    </div>
  );
}

export default Home;
