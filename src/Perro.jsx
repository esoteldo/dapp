import React, { useEffect } from 'react'

const adoptarPerro=async(contrato,indice)=>{

    await contrato.adoptar(indice)
          
}

const desAdoptarPerro=async(contrato,indice)=>{
  await contrato.desadoptar(indice)
}


export const Perro = ({perro,contrato,indice,click,setClick}) => {
  
 
  return (
    <>
    <li>{perro} <button onClick={()=>{

       adoptarPerro(contrato,indice).then(
        ()=>{
          setClick(click+1)
          console.log(click)
        }
       )

       
       
       
    }}>Adoptar</button>
    <button onClick={()=>{
      desAdoptarPerro(contrato,indice)
    }}>Desadoptar</button>
    </li>
    <br />
    </>
  )
}
