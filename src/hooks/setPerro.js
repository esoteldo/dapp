import { useEffect } from "react";


 const adoptarPerro=(contrato,indice,setDataPerros)=>{
        contrato.adoptar(indice).then(async()=>{
        
                return await contrato.getPerrosAdoptados()    
                }
            
                ).then(perros=>{
                         console.log(perros)
                        setDataPerros(perros)   
                      
                }
                )
 }


 const setPerro = (contrato,indice,setDataPerros) => {

    useEffect(() => {
         
            adoptarPerro(contrato,indice,setDataPerros);
            
    }, [])
    return 
}


export default setPerro;