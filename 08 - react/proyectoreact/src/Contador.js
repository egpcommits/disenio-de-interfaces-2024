import {useRef, useState} from 'react';

function Contador() {

    const cajaContador = useRef();

    function aniadir (e) {
        cajaContador.current.innerHTML++;
        if (cajaContador.current.innerHTML == 8) {
            cajaContador.current.style.backgroundColor = "red";            
        } else {
            cajaContador.current.style.backgroundColor = "white";
        }
        
        if (cajaContador.current.innerHTML == 10) {
            cajaContador.current.innerHTML = 1;
        }
        
    }



  return ( 
    <>
      <div ref={cajaContador}>
        1
      </div>
      <button onClick={aniadir}>Añadir</button>
    </>
  );
}

export default Contador;
