import React from 'react'
import setPerro from './hooks/setPerro'

export const Perro = ({perro,contrato,indice,setDataPerros}) => {
  
  return (
    <>
    <li>{perro} <button onClick={()=>{
      setPerro(contrato,indice,setDataPerros);
    }}>Adoptar</button></li>
    <br />
    </>
  )
}
