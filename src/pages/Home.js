import React from "react";
import "./styles.css";

function Home() {
  return (
    <div className="page-container home-container">
      <h1>Bienvenido</h1>
      <p>Explora el contenido.</p>
      <a href="https://drive.google.com/drive/folders/1l12zJYch3312E1tzOQEFi2dwV3cWM66K?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button>Explorar</button>
      </a>
    </div>
  );
}

export default Home;
