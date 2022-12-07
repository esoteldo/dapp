import React from 'react';
import { getContract } from './hooks/getContract';



export const PerrosAdoptados = () => {
 
  const {address,contract,pending}=getContract();
  
  return (
    <>
    {
      !pending && (<h2>Direccion: {address}</h2>)
      
    }
    {
      !pending && (<h2>Contrato: {contract.address}</h2>)
      
    }
    </>
  )
}
