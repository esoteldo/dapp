import React from 'react';
import { useRef } from 'react';
import { getContract } from './hooks/getContract';
import { ListaPerros } from './ListaPerros';



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
      !pending && (
      
            <ListaPerros dataperros={dataperros} contrato={contract}/>
         
      )
      
    }
  
    </>
  )
}
