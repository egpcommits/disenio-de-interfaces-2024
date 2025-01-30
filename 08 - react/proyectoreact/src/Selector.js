import './Selector.css';
import {useRef, useState} from 'react';

function Selector() { //El nombre de la funcion tiene que ser igual que el nombre del archivo
  {/*Aqui van los script*/}

  const[selector, setSelector]  = useState();

  const eleccion = (select) => {
    setSelector(select.target.value); //practicamente es un setter que va a cambiar el valor de la variable asociada. arriba cuando se ha definido la constante, estan las dos definidas. Entonces, este set va a hacer referencia a la variable "selector"
  }


  return ( //el return, si tiene más de un objeto, da error. Si tenemos varios, hay que usar un contenedor
    <> {/*contenedor*/}
      <select value={selector} onChange={eleccion}>
        <option value="cero">0</option>
        <option value="uno">1</option>
        <option value="dos">2</option>
        <option value="tres">3</option>
      </select>

      <p>La opcion seleccionada es {selector}</p>
    </>
  );
}

export default Selector;
