/**
 * 
 * Ejemplo de uso de ciclo de vida
 * en componente clase
 * 
 * Ejemplo de uso de Hook de ciclo de vida
 * en componente funcional
 * 
 */

import React, { Component  , useEffect } from 'react'

export class DidMount extends Component {

  componentDidMount(){
    console.log("Comportamiento antes de que el componente sea añadido al DOM ( Renderizado )")
  }

  render() {
    return (
      <div>
        <h1> DidMount </h1>
      </div>
    )
  }
}



export const DidMountHook = () => {


  useEffect(() => {
    console.log("Comportamiento antes de que el componente sea añadido al DOM ( Renderizado )");
    }, [] )

    return (
      <div>
        <h1> DidMount </h1>
      </div>
    ) 
  }
