import React from 'react'
import { useLocation , useNavigate  } from "react-router-dom" ;

export default function AboutPage() {
    const location = useLocation() ;
    console.log(`Estamos en la ruta : ${location.pathname}`)

    const navegate = useNavigate ();

    const Navegate = (path) =>{
        navegate( path )
    }

    const goBack = () =>{
        navegate(-1);
    }

    const goAdelante = () =>{
        navegate(+1);
    }

  return (
    <div>
        <h1> About | Faqs Page </h1>
        <div>
            <button onClick={() => Navegate('/')}>
                Go to Home
            </button>
            <button onClick={goBack}>
                Go back
            </button>
            <button onClick={goAdelante}>
                Next
            </button>
        </div>
    </div>
  )
}
