import React from 'react';
import { getContract } from './hooks/getContract';
import { Perro } from './Perro';



export const PerrosAdoptados = () => {
 
  const {address,contract,pending,dataperros}=getContract();
  
  return (
    <>
     {
      pending && (<h2>Direccion: Cargando...</h2>)
      
    }
    {
      !pending && (<h2>Direccion: {address}</h2>)
      
    }
    {
      pending && (<h2>Contrato: Cargando...</h2>)
      
    }
    {
      !pending && (<h2>Contrato: {contract.address}</h2>)
      
    }
    {
      pending && (<h2>Direcciones: Cargando...</h2>)
      
    }
    {
      !pending && (<ul>
        
          {
            dataperros.map((perro,index)=>(
              <Perro key={index} perro={perro} />
            ))
          }
        
      </ul>)
      
    }
    </>
  )
}
