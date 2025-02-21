import React from 'react'
import Caja from './Caja';

export default function Contenedor() {

    let famosos = [
        {
          nombre: "Pablo",
          apellido: "Alborán",
          color: "red",
          precio: 100
        },
        {
          nombre: "Aitana",
          apellido: "",
          color: "purple",
          precio: 120
        },
        {
          nombre: "Abraham",
          apellido: "Mateo",
          color: "blue",
          precio: 140
        },
        {
          nombre: "Ana",
          apellido: "Mena",
          color: "violet",
          precio: 150
        },
        {
          nombre: "Manuel",
          apellido: "Carrasco",
          color: "green",
          precio: 125
        },
        {
          nombre: "Rosalia",
          apellido: "",
          color: "orange",
          precio: 180
        }
      ];

  return (
    <div className='contenedor'>
        <div><Caja color={famosos[0].color} nombre={famosos[0].nombre} apellido={famosos[0].apellido}/></div>
        <div><Caja color={famosos[0].color} nombre={famosos[1].nombre} apellido={famosos[1].apellido}/></div>
        <div><Caja color={famosos[0].color} nombre={famosos[2].nombre} apellido={famosos[2].apellido}/></div>
        <div><Caja color={famosos[0].color} nombre={famosos[3].nombre} apellido={famosos[3].apellido}/></div>
        <div><Caja color={famosos[0].color} nombre={famosos[4].nombre} apellido={famosos[4].apellido}/></div>
        <div><Caja color={famosos[0].color} nombre={famosos[5].nombre} apellido={famosos[5].apellido}/></div>
    </div>
  )
}
