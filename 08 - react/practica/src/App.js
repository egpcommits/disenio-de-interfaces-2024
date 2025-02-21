import { useState } from 'react';
import './App.css';
import Titulo from './componentes/Titulo';
import Contenedor from './componentes/Contenedor';

function App() {
  const [valor, setValor] = useState(0);
  const [persona, setPersona] = useState("nadie")

  //para traermelo de caja.js y cambiar el valor
  const cambiarPersona = (aniadirPersona) => {
    setPersona(aniadirPersona);
  }


  //para traermelo de caja.js y cambiar el valor
  const cambiarValor = (aniadirValor) => {
    setValor(aniadirValor);
  }


  return (
    <div className="App">
      <Titulo persona={persona} valor={valor}/>
      <Contenedor/>
    </div>
  );
}

export default App;
