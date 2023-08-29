import React , { useState , useRef , useEffect } from 'react' ;


/**
 * Uso de 
 *  useState ()
 *  useRef   ()
 *  useEfect ()
 */


const Ejemplo2 =() => {

    const valorInicial = 0 ;

    //  Se crean dos Contadores distintos
    
    const [ contadorUno , setContadorUno ] = useState(valorInicial) ;
    const [ contadorDos , setContadorDos ] = useState(valorInicial) ;
    
    //  Se crea una Referencia para asociar una variable con un elemento del DOM
    //  En este caso miRef hace referencia al elemento   
    
    const miRef = useRef() ;
    
    
    //  Funciones del contador
    
    function AumentarContadorUno(){
        setContadorUno( contadorUno + 1)
    } ;
    
    function AumentarContadorDos(){
        setContadorDos( contadorDos + 2)
    } ;
    
    
    
    //  useEfect --Primer caso -- Se ejectuta siempre que haya un cambio en el estado del componente 


        /*    
        useEffect(() => {
          console.log( "El componente cambio de estado" ) ;
          console.log( "Mostrando referencia al elemento del DOM" ) ; 
          console.log( miRef ) ;
        })
        */

    
    //  useEfect --Segundo Caso -- Se ejectuta unicamente cuando haya un cambio en el contador 1     

        /*
        useEffect(() => {
            console.log( "Contador 1 cambio de estado" ) ;
            console.log( "Mostrando referencia al elemento del DOM" ) ; 
            console.log( miRef ) ;
        } , [ contadorUno ] )
        */
    
    //  useEfect --Tercer Caso -- Se ejectuta  cuando haya un cambio en el contador 1 o 2  
    
        useEffect(() => {
            console.log( "Contador 1 cambio de estado" ) ;
            console.log( "Mostrando referencia al elemento del DOM" ) ; 
            console.log( miRef ) ;
        } , [ contadorUno , contadorDos] )


  return (

    <div>
        <h1> *** Ejemplo de useState() , useRef() , useEfect ***</h1>

        <h2>Contador Uno : { contadorUno } </h2>
        <button onClick={ AumentarContadorUno }> Contador Uno </button>

        <hr />

        <h2>Contador Dos : { contadorDos } </h2>
        <button onClick={ AumentarContadorDos }> Contador Dos </button>

        <hr />

        <h4 ref={ miRef }> Elemento Referenciado </h4>

    </div>

  );
};


export default Ejemplo2 ;