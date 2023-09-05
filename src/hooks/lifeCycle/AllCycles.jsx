import React , { useEffect } from 'react' ;

const AllCycles = () => {

    useEffect( () => {
        
      console.log ( "Componente Creado / Actualizado" )

      const intervalId = setInterval( () =>{
        document.title = `${new Date()}` ;
        console.log( "Actualizacion del Componente" )
      } , 1000 ) 
    
      return () => {
        console.log( "Componente va a desaparecer ") ;
        document.title = "El cambio se detuvo" ;
        clearInterval( intervalId ) ; 
      }
    }, [] )

    
  return (
    <div>

    </div>

  ) ;
} ;


export default AllCycles ;