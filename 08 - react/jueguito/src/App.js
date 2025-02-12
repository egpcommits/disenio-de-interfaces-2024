import './App.css';
import BotonReiniciar from './Components/BotonReiniciar';
import Adivina from './Components/Adivina';
import Index from './Components/Textos/index';
import Formulario from './Formulario';
import { useState } from 'react';

function App() {

  const generarNumeroSecreto = () => {
    return Math.trunc(Math.random() * 20) + 1;
  }

  const [numSecreto, setNumSecreto]=useState(generarNumeroSecreto);
  const [mensaje, setMensaje] = useState("Empieza a adivinar");
  const [puntuacion, setPuntuacion] = useState(20);
  const [puntajeAlto, setPuntajeAlto] = useState(0);

  const reiniciar = () => {
    setNumSecreto(generarNumeroSecreto);
    setMensaje("Empieza a adivinar...");
    setPuntuacion(20);
  }

  const comparar = (num) => {
    if (!num) {
      setMensaje("Escribe un numero")
    } else {
      if (Number(num) == numSecreto) {
        //l usuario gana
        setMensaje("Has ganado!");
        document.body.style.backgroundColor="green";

        if (puntuacion > puntajeAlto) {
          setPuntajeAlto(puntuacion);
        }
      } else {
        if (puntuacion > 1) {
          //el numero sea mayor o menor
          if (Number(num) > numSecreto) {
            setMensaje("Tu numero es alto");
          } else {
            setMensaje("Tu numero es bajo");
          }
          setPuntuacion(puntuacion - 1);

        } else {
          setMensaje("Has perdido...");
        }
      }
    }
  }

  return (
    <div className="container">
    <BotonReiniciar reiniciar = {reiniciar}/>
    <h1>¡Adivina mi número entre 1 y 20!</h1>
    <Adivina/>
    <br/>
    
    <Formulario comparar={comparar}/>
    
    <Index mensaje={mensaje} puntuacion ={puntuacion} puntajeAlto={puntajeAlto}/>
  </div>
  );
}

export default App;
