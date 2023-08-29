import React , { useState } from 'react' ;


const Ejemplo1 = () => {

    // Valor Inicial para Contador

    const valorInicial = 0 ;

    const valorInicialPersona =  {
        nombre : "Juan" ,
        email  : "Juan@gmail.com"
    };


    // Los valores iniciales van a ser parte del estado del componente para gestionar su cambio 
    // y este se vea reflejado en la vista del componente 
    
    const [ contador , setContador ] = useState( valorInicial ) ;

    const [ persona , setPersona ]   = useState( valorInicialPersona ) ;



    //Actualizar estado privado que contiene el contador

    function Aumentar () {
        setContador( contador + 1 );
    };



    //Actualizar estado privado que contiene la session Persona

    function ActualizarSesion () {
        setPersona( {
            nombre : "User Default" ,
            email  : "Email Default"
        });
    };
    
    
    //** RETURN **/

  return (
    <div>
        <h1>*** Ejemplo de useState() ***</h1>

        <h2> Contador :  { contador } </h2>
        <button onClick= { Aumentar }> Aumentar </button>

        <hr />

        <h2> Session </h2>
        <h3> Nombre : { persona.nombre } </h3>
        <h3> Email  : { persona.email }  </h3>
        <button onClick={ ActualizarSesion }> Cambiar Session </button>
    </div>
  ) ;
 } ;


export default Ejemplo1 ;
