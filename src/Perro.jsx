import React from 'react'

export const Perro = ({perro,contrato}) => {
  console.log(contrato);
  return (
    <>
    <li>{perro} <button onClick={()=>{}}>Adoptar</button></li>
    <br />
    </>
  )
}
