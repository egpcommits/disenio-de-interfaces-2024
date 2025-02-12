import React from "react";
import Mensaje from "./Mensaje";
import Puntuacion from "./Puntuacion";

export default function Index({mensaje, puntuacion, puntajeAlto}) {
  return (
    <div className="score-section">
      <br />
      <Mensaje mensaje={mensaje}/>
      <br />
      <Puntuacion etiqueta="Puntuacion: " valor={puntuacion} id="score"/>
      <Puntuacion etiqueta="Puntaje Alto: " valor={puntajeAlto} id="highscore"/>
    </div>
  );
}
