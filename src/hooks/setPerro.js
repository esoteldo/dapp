import { useEffect } from "react";


 const setPerro = (contrato,indice,setDataPerros) => {

    contrato.adoptar(indice).then(async()=>{

    return await contrato.getPerrosAdoptados()    
    }

    ).then(perros=>{
        
            setDataPerros(perros)   
          
    }
    )
    
    
}

export default setPerro;