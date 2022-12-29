import React, { useEffect, useState } from 'react';
import { getContract } from './hooks/getContract';
import { ListaPerros } from './ListaPerros';

const getLista=async(contrato)=>{
  if(contrato==true){
  return await contrato.getPerrosAdoptados();
  }else return []
  }

export const PerrosAdoptados = () => {
  const [dataperros,setDataPerros]=useState([]);
  const [click,setClick]=useState(0);
  
  const {address,contract,pending}=getContract(setDataPerros);
  useEffect(() => {
    console.log(click)
    if(contract==true){
      setDataPerros[getLista(contract)]
    }
  }, [click])
  
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
      
            <ListaPerros dataperros={dataperros} contrato={contract} click={click} setClick={setClick}/>
         
      )
      
    }
  
    </>
  )
}
