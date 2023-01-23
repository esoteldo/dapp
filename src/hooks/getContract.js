import React, { memo, useCallback, useEffect, useState } from 'react'
import detectEthereumProvider from '@metamask/detect-provider';
import {Contract, ethers} from 'ethers';
import MyContractManifest from '../contracts/ContratoInicial.json';

const getBlockChain=async(setAddress,setContract,setPending,setDataPerros)=>{

  try{
    let provider= await detectEthereumProvider();
  
    if(provider){
       await provider.request({method:'eth_requestAccounts'})
       provider= new ethers.providers.Web3Provider(provider);
       const signer=provider.getSigner();
       
       setAddress(await signer.getAddress());
  
       const myContract=new Contract(
         MyContractManifest.networks[97].address,
         MyContractManifest.abi,
         signer  
       );
        console.log("ejecucion de solicitud");
       setContract(myContract);
       
       setDataPerros(await myContract.getPerrosAdoptados());
       setPending(false);
  
    }else{
  
      setAddress(null);
      setContract(null);
      setPending(false);
    }
  }catch(err){
    console.log(err);
  }
}

 
export const getContract = () => {
    
    const [address,setAddress]=useState(null);
    const [dataPerros,setDataPerros]=useState(null);
    const [contract,setContract]=useState(null);
    const [pending,setPending]=useState(true);

    const redrawlist=()=>{
      getBlockChain(setAddress,setContract,setPending,setDataPerros);
      console.log("ejecucion getblockchain");
    }
  
    
    
    useEffect(() => {

      

      getBlockChain(setAddress,setContract,setPending,setDataPerros);
           
    }, [])
    
    
  return {
    address,
    contract,
    pending,
    dataPerros,
    redrawlist
  }
      
}

