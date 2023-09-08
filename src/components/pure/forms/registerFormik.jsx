import React from 'react' ;
import { Formik , Field , Form , ErrorMessage } from "formik" ;
import * as Yup from "yup" ; 

//Model
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/user.enum';

const registerFormik = () => {

  let user = new User() ;

  const initialValues = {
    username : '',
    email : '' ,
    password: '',
    confirm: '' ,  //no puede ser solo obligatorio
    role : ROLES.USER
  }

  const registerScheema = Yup.object().shape(
    { 
        username : Yup.string()
                   .min( 6 , 'Es muy corto')
                   .max( 12 , 'Es muy largo')
                   .required('El username es Obligatorio'),

        email :  Yup.string()
                .email( 'Formato invalido')
                .required('El emali es obligatorio'),

        password : Yup.string()
                   .required('La contraseña es obligatoria')
                   .min( 6 , 'Contraseña corta'),

        confirm : Yup.string()
                   .when( 'password' , {
                    is: value =>( value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                       [Yup.ref('password')]
                        )
                   })            
                   
                
                   
    }
  )

  const submit = ( values ) => {
    alert( 'Register user')
  }

  return (

    <div>registerFormik</div>
  )
}
