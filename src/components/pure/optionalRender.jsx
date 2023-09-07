import React , { useState } from 'react' ;


let red = 0 ;
let green = 200 ;
let blue = 150 ;

const loggedStyle = {
    color: "white" ,
    backgroundColor: `rgb(${red},${green},${blue})`,
    fontWeight : 'bold'
};

// ? Estilos para usuarios No logieados
const unloggedStyle = {
    color: "white",
    backgroundColor: "tomato",
    fontWeight : 'bold'
};


//Loguin Logout Buttons
const LogInButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}> Loguear </button>
    )
}

const LogOutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={logoutAction}> Desloguear </button>
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
        optionalButton = <LogOutButton propStyle={ unloggedStyle } logoutAction= { logoutAction } />
    }else{
        optionalButton = <LogInButton  propStyle={ loggedStyle } loginAction ={ loginAction } />
    }


    // Mensajes sin Leer

    let addMessages = () => {
        setCantMensaje( cantMensage + 1 )
    }




  return (
    <div>
        {/* optional Button */}
        { optionalButton }

        {/* Mensajes sin leer 
         { cantMensage === 0 && <p className='blanco'> No hay mensajes sin leer </p> }
        { cantMensage === 1 && <p className='blanco'> Nuevo Mensaje Recibido </p> }
        { cantMensage > 1 && <p className='blanco'> Tienes { cantMensage } sin leer ... </p> }
        */}    
       


        {/* Operador Ternario*/}

        { acceso ? (
            <div>
             { 
                cantMensage > 0  ? 
                    <p className='blanco'> 
                    Nuevo {cantMensage > 1 ? 's ' : ""} 
                    Mensaje {cantMensage > 1 ? 's ' : ""} 
                    Recibido {cantMensage > 1 ? 's ' : ""}  
                    </p> 
                        : 
                    <p className='blanco'> No hay mensajes sin leer </p>
                }
      

                <button onClick={ addMessages }> { cantMensage === 0 ? 'Mandar el primer mensaje' : 'Mandar nuevamente'}  </button>
            </div>
        ) 
        :  null } 
    
     
    </div>
  )
};


export default OptionalRender ;