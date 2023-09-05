import React , { useState } from 'react' ;

//Definiendo estilos en constantes 


// ? Estilos para usuarios Logueados
const loggedStyle = {
    color: "blue"
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

  return (
    <div style={ logged ? loggedStyle : unloggedStyle}>

        <p>Hola , { props.name }</p>
        <button onClick={ ()=>{
            console.log("Buton Pulsado");
            setLogged( !logged );
        }}> 
            { logged ? 'Logout' : 'Login'}
        </button>
    </div>
  )
}
