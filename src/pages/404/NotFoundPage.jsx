import React from 'react' ;
import { useNavigate } from 'react-router-dom';

const  NotFoundPage = () => {

  const history = useNavigate() ; 

  const Navegate = ( path ) =>{
      history( path )
  }

  return (
    <div>
        <h1> Pagina  </h1>
        <h2> No funciona </h2>
        <button onClick={() => Navegate('/')}>
                Go to Home
            </button>
    </div>
    
  )
}

 export default  NotFoundPage ;