import React from 'react'
import { Perro } from './Perro'

export const ListaPerros = ({dataperros,contrato,redrawlist}) => {
  
  return (
    <>
    <ul>
    {

        dataperros.map((perro,index)=>(
            <Perro key={index} perro={perro} contrato={contrato} indice={index} redrawlist={redrawlist} />
          ))
    }
    </ul>
    </>
  )
    
}
