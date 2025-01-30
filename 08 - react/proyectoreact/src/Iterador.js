import './Iterador.css';
import {useRef, useState} from 'react';

function Iterador() { //el nombre de la fucnion siempre tiene que ser el nombre del archivo
  {/*Aqui van los script*/}

  const cajaIterador = useRef(); //Se le añade una referencia al div
  const[inicio, setInicio]  = useState();

  const sumar = (e) => {
    e.target.innerHTML++; //funcion Number si hubiese que castear
  }

  const reiniciar = (e) => {
    cajaIterador.current.innerHTML = 0;
    //Como en react se trabaja con estados, hay que indicar que vamos a usar el actual (current)
  }

  const iniciarNum = (e) => {
    cajaIterador.target.innerHTML=e.target.value;
  }


  return ( //el return, si tiene más de un objeto, da error. Si tenemos varios, hay que usar un contenedor
    <> {/*contenedor*/}
      <div ref={cajaIterador} className="iterador" onClick={sumar}>
        0
      </div>
      <button onClick={reiniciar}>Reiniciar</button>
      
      <br/><br/>

      Iniciar el iterador con <input value={inicio} type="number" onChange={iniciarNum}/>
    </>
  );
}

export default Iterador;
