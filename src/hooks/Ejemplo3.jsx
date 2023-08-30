/**
 * Ejemplo de Hooks 
 * useState ()
 * useContext ()
 */

import React , { useState ,  useContext } from 'react' ;


/**
 * 
 * El componente Uno
 * Tiene un contexto que tiene un valor que recibe desde el padre ( MiComponente )
 */


// Se declara vacio , pero se completa con los datos que le pasa el padre
const miContexto = React.createContext( null ) ;

const ComponenteUno = () => {
  const estado = useContext( miContexto ) ;

  return (
    <div>

        <h1> El Token es { estado.token } </h1>
        <ComponenteDos />

    </div>
  ) ;
} ;


const ComponenteDos = () => {
    const estado = useContext( miContexto ) ; 

    return (
      <div> 
        <h2> La sesion es { estado.sesion } </h2>
      </div>
    ) ;
  } ;
  

  export default function MiComponenteConContexto() {
    
    const estadoInicial = {
        token : "ABC123" ,
        sesion : 1
    }

    const [ sesionData , setSesionData  ] = useState( estadoInicial ) ;

    function ActualizarSesion(){
        setSesionData( 
           {
            token : "SSS777" ,
            sesion : sesionData.sesion + 1 
           } 
        );
    }; 

    
    return (
      <div>          
        
        <miContexto.Provider value = { sesionData }>
         {/* Todo lo que este dentro del provider va a tener acceso a sesionData */}
         {/* Si se actualizan los componentes , tambien lo actualizan */}
        
            <ComponenteUno />
            <button onClick={ ActualizarSesion }> Actualizar </button>


        </miContexto.Provider>

      </div>
    ) ;
  } ;
  