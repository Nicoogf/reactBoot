import React from 'react' ;
import { useLocation , useNavigate } from "react-router-dom" ; 

const  HomePage = () => {

  const location = useLocation() ;
  console.log(`Estamos en la ruta : ${location.pathname}`)

  const navegate = useNavigate ();

  const Navegate = (path) =>{
    navegate( path )
  }



  return (
    <div>
        <h1> HomePage </h1>
        <h2> Dashboard </h2>
        <div>
            <button onClick={() => Navegate('/profile')}>
                ir al perfil
            </button>
        </div>
    </div>
    
  )
}

export default HomePage ;