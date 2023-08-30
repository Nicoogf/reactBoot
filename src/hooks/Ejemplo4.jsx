/**
 * Ejemplo de props.children
 */

import React from 'react'

const Ejemplo4 = ( props ) => {
  return (
    <div>
        <h1> *** Ejemplo de Children Props *** </h1>

            <h2>
                nombre : { props.nombre }
            </h2>

        {/** 
         * Props children va a pintar todos los elementos que se encuentren
         * entre la apertura y cierre del componente de origen superior
        */}
        
            { props.children }

    </div>
  )
}


export default Ejemplo4 ;