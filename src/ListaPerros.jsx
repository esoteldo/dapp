import React from 'react'
import { Perro } from './Perro'

export const ListaPerros = ({dataperros,contrato,click,setClick}) => {
  
  return (
    <>
    <ul>
    {

        dataperros.map((perro,index)=>(
            <Perro key={index} perro={perro} contrato={contrato} indice={index} click={click} setClick={setClick} />
          ))
    }
    </ul>
    </>
  )
    
}
