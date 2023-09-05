import React , { useState } from 'react' ;

//Definiendo estilos en constantes 


// ? Estilos para usuarios Logueados
const loggedStyle = {
    color: "white"
};

// ? Estilos para usuarios No logieados
const unloggedStyle = {
    color: "tomato",
    fontWeight : 'bold'
};


export default function GreetingStyled( props ) {

    //Se genera un estado para el componente
    //Para controlar si el usuario esta o no logueado

    const[ logged , setLogged ] = useState(false) ;

    const greetinUser = (<p> Hola , soy {props.name} y estoy logeado</p>) ;
    const pleaseLoguin = (<p> Usuario desconocido, inicia Sesion </p>)  ;

  return (

    <div style= { logged ? loggedStyle : unloggedStyle}>

                { logged ?  greetinUser  : pleaseLoguin  }

       
        <button onClick={ ()=>{
            console.log("Buton Pulsado");
            setLogged( !logged );
        }}> 
            { logged ? 'Logout' : 'Login'}
        </button>
    </div>
  )
}
