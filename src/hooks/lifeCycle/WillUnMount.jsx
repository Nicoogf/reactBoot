/**
 * Ejemplo de uso del metodo ComponentWillUnMount para componente Clase
 * Ejemplo de uso del Hook para componente funcional
 * ( Cuando el componente va a desaparecer )
 */

import React, { Component, useEffect } from 'react' ;

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log( "Comportamiento antes de que el componente desaparezca" )
    }

  render() {
    return (
      <div>
        <h1> WillUnmount </h1>
      </div>
    )
  }
}



export const WillUnMountHook = () => {

    useEffect(() => {
      // Esta parte no va nada 

      return () => {
            console.log( "Comportamiento antes de que el componente desaparezca" )
      }
    }, []
     //En esta parte queda el array vacio para decir que se ejecute solo una vez
);
   
      return (
        <div>
            <h1>
              WillUnmount
            </h1>
        </div>
      )
    }
