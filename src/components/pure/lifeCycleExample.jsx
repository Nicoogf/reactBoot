import React, { Component } from 'react' ;
import PropTypes from 'prop-types' ;


class lifeCycleExample extends Component {
  constructor (props) {
    super(props)
    console.log("Cuando se instancia el componente") ;
  } ; 


    componentWillMount(){
        console.log( "WillMount : Antes del montaje del Componente" ) ;
    }

    componentDidMount(){
        console.log( "DidMount : Justo al acabar el montaje del Componente  y Antes de pintarlo" ) ;
    }

    componentWillReceiveProps( nextProps ){
        console.log( "WillReceiveProps : Si va a recibir nuevas Props" ) ;
    }

    shouldComponentUpdate( nextProps , nextState ){
        // Puede retornar True o False 
        // Sirve para controlar si el componente debe o no actualizarse 
    }

    componentWillUpdate( nextProps , nextState ){
        console.log( "componentWillUpdate : Punto justo de actualizarse") ;
    }

    componentWillUnmount() {
        console.log( "WillUnmount : Justo antes de desaparecer ")
    }




  render() {
    return (
      <div>

        
      </div>
    )
  }
}
