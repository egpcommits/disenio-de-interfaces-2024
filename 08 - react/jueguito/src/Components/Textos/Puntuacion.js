import React from 'react'

export default function Puntuacion({etiqueta, valor, id}) {
  return (
    <div>
      <p>{etiqueta} <span id={id}>{valor}</span></p>
    </div>
  )
}