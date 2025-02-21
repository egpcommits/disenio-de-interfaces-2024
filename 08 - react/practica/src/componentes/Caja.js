import React from 'react'

export default function Caja({nombre, apellido, color, cambiar}) {

    const seleccionar = (e) => {
        let texto = e.target.parentNode.textContent.split("S");
            //Si no hago el split tambien sale el Seleccionar del boton, asi que divido por ahi y 
            //me quedo con la primera mitad, que tendra nombre y apellido
            console.log(texto[0]);
            //cambiar(texto[0]);
            e.target.parentNode.style.display = "none";
    }

  return (
    <>
      <div className='cajas' style={{backgroundcolor: {color}}}>
        <p>{nombre} {apellido}</p>
        <button onClick={seleccionar}>Seleccionar</button>
      </div>
      
    </>
  )
}
