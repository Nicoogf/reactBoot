/**
 * Ejemplo de uso de metedo DidUpdate en componente clase
 * y Uso de hook en componente Funcional
*/

import React , { Component  , useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log( "Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado" )
    }

  render() {
    return (
      <div>
        <h1> DidMount </h1>
      </div>
    )
  }
}


export const DidUpdateHook = () =>{

    //  Al no indicar un segundo parametro en el useEfect entre [ ] ,  para que se ejecute cada verz que haya
    //  un cambio en el estado o props
    // Al no pasar como segundo parametro los corchetes se indica que se va a ejcutar despues de cada cambio

    useEffect( ()=> {
        console.log( "Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado" )
    });
    

    return (
        <div>
          <h1> DidMount </h1>
        </div>
    ) ;
}