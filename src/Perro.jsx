import React from 'react'
import { getContract } from './hooks/getContract';

const adoptarPerro=async(contrato,indice,redrawlist)=>{

    const tx=await contrato.adoptar(indice);
    tx.wait().then(()=>{
      redrawlist()
    })
          
}

const desAdoptarPerro=async(contrato,indice,redrawlist)=>{
 const tx= await contrato.desadoptar(indice);
  tx.wait().then(()=>{
    redrawlist()
  }  
  )
 
}


export const Perro = ({perro,contrato,indice,redrawlist}) => {
  
 
  return (
    <>
    <li>{perro} <button onClick={()=>{

       adoptarPerro(contrato,indice,redrawlist)
  
    }}>Adoptar</button>
    <button onClick={()=>{

      desAdoptarPerro(contrato,indice,redrawlist)
      
    }}>Desadoptar</button>
    </li>
    <br />
    </>
  )
}
