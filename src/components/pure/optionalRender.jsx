import React , { useState } from 'react' ;

//Loguin Logout Buttons
const LogInButton = ( { loginAction } ) =>{
    return(
        <button onClick = { loginAction } > Desloguear </button>
    )
}

const LogOutButton = ( logoutAction ) =>{
    return(
        <button onClick = { logoutAction } > Desloguear </button>
    )
}


//( expresion true) && elemento => se renderiza la expresion
//( expresion false) && elemento => no renderiza la expresion



const OptionalRender = () => {

    const [ acceso , setAcceso] = useState( true ) ;
    const [ cantMensage, setCantMensaje ] = useState(0) ;

    const updateAcces = () => {
        setAcceso( !acceso )
    }

    const loginAction = () =>{
        setAcceso( true )
    }

    const logoutAction = () =>{
        setAcceso( false )
    }


    //OpcionalButton

    let optionalButton ;

    if( acceso ){
        optionalButton = <LogOutButton logoutAction= { logoutAction } />
    }else{
        optionalButton = <LogInButton loginAction ={ loginAction } />
    }


    // Mensajes sin Leer

    let addMessages = () => {
        setCantMensaje( cantMensage + 1 )
    }




  return (
    <div>
        {/* optional Button */}
            { optionalButton }

        {/* Mensajes sin leer */}    
        { cantMensage === 0 && <p className='blanco'> No hay mensajes sin leer </p> }
        { cantMensage === 1 && <p className='blanco'> Nuevo Mensaje Recibido </p> }
        { cantMensage > 1 && <p className='blanco'> Tienes { cantMensage } sin leer ... </p> }


        {/* Operador Ternario*/}
    
        { 
        cantMensage > 0 && cantMensage === 1 ? 
            <p className='blanco'> Nuevo Mensaje Recibido </p> 
                : 
            <p className='blanco'> No hay mensajes sin leer </p>
        }

        <button onClick={ addMessages }> { cantMensage === 0 ? 'Mandar el primer mensaje' : 'Mandar nuevamente'}  </button>
    </div>
  )
};


export default OptionalRender ;