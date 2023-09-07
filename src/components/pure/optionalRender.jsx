import React , { useState } from 'react' ;

const OptionalRender = () => {

    const [ acceso , setAcceso] = useState( true ) ;

    const updateAcces = () => {
        setAcceso( !acceso )
    }

    let optionalButton ;

    if( acceso ){
        optionalButton = <button onClick = {updateAcces} > Desloguear </button>
    }else{
        optionalButton = <button onClick = {updateAcces} > Ingresar </button>
    }

  return (
    <div>
            { optionalButton }
    </div>
  )
};


export default OptionalRender ;