import {useRef, useState} from 'react';

function Sumar() {

    const[num1, setNum1] = useState();
    const[num2, setNum2] = useState();
    const[suma, setSuma] = useState(); //el set es la unica forma en la ue vamos a poder cambiar el valor

    const cambiarNum1 = (e) => {
        setNum1(e.target.value);
    }

    const cambiarNum2 = (e) => {
        setNum2(e.target.value);
    }

    const realizarSuma = () => {
        //suma.current.innerHTML= refNum1.target.value + refNum2.target.value;
        setSuma(Number(num1) + Number(num2));
    }

  return ( 
    <>
      <input type='text' onChange={cambiarNum1}/>+
      <input type='text' onChange={cambiarNum2}/>=
      <input type='text' value={suma} readOnly/>
      <button onClick={realizarSuma}>Sumar</button>
    </>
  );
}

export default Sumar;
