import React from "react";
import "./styles.css"; // Importando estilos

import devImage from "./dev.png";
import babellImage from "./babell.png";

export default function App() {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img src={babellImage} alt="Imagem 1" />
      </div>
      <div className="image-wrapper">
        <img src={devImage} alt="Imagem 2" />
      </div>
    </div>
  );
}
