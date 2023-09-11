import React from 'react' ;
import { useNavigate } from "react-router-dom" ; 

const ProfilePage = ( {user} )=> {

    const history = useNavigate() ;

    const Navegate = ( path ) =>{
        history( path )
    }

    const goBack = () =>{
        history(-1)
     }

  return (
    <div>
        Perfil del Usuario
        <button onClick={ () => Navegate('/task') }> Ir a tareas </button>
        <button onClick={ goBack }>Ir Atras </button>
        
    </div>
   
  )
}

export default ProfilePage ;