import React from 'react' ;
import { Formik , Field , Form , ErrorMessage } from "formik" ;
import * as Yup from "yup" ; 

//Model
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/user.enum';

const RegisterFormik = () => {

  let user = new User() ;

  const initialValues = {
    username : '',
    email : '' ,
    password: '',
    confirm: '' ,  //no puede ser solo obligatorio
    roles : ROLES.USER
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
                       [Yup.ref('password')], 'la contraseña no coincide'
          )
       }).required(' Necesitas confirmar la contraseña'),

         roles   : Yup.string()
                  .oneOf([ ROLES.ADMIN , ROLES.USER] , 'Debes selecionar un Rol') 
                  .required('El rol es requerido')          
    }
  )

  const submit = ( values ) => {
    alert( 'Register user')
  }

  return (

    <div>
        <h4> Register Formik </h4>

        <Formik 
            initialValues = { initialValues }
            onSubmit={async (values) => {
                       await new Promise((r) => setTimeout(r, 2000));
                       alert(JSON.stringify(values, null, 2));
                    }}
            validationSchema={ registerScheema }
        >

            {({ values ,
                touched , 
                errors , 
                isSubmitting ,
                handleChange , 
                handleBlur }) => (
                    <Form className='blanco'>
                         <label htmlFor="username">Username</label>
                         <Field id="username" type='text' name="username" placeholder="Ingresar Username" />

                         {/* ERRORES DE USERNAME*/}
                            {
                        errors.username && touched.username && 
                             (                                                    
                                <ErrorMessage name="username" component='div' />     
                             )                        
                            }



                         <label htmlFor="email">Email</label>
                         <Field id="email" type='email' name="email" placeholder="Ingresar Email" />                   

                         {/* ERRORES DE EMAIL*/}
                            {
                        errors.email && touched.email && 
                             (                                                    
                                <ErrorMessage name="email" component='div' />     
                             )                        
                            }

                            
                        <label htmlFor="password">Password</label>
                          <Field id="password" name="password" placeholder="password" type="password" />

                          {/* ERRORES DE CONTRASEÑA*/}
                          {
                            errors.password && touched.password && 
                             (                                                    
                                <ErrorMessage name="password" component='div' />     
                             )                        
                          }

                        <label htmlFor="password">Confirmar Contraseña</label>
                          <Field id="confirm" name="confirm" placeholder="Confirmar contraseña" type="password" />

                          {/* ERRORES DE CONTRASEÑA*/}
                          {
                            errors.confirm && touched.confirm && 
                             (                                                    
                                <ErrorMessage name="confirm" component='div' />     
                             )                        
                          }


                         <button type="submit">Registrar Usuario </button>
                                {isSubmitting ? ( <p>Creando usuario...</p> ) : null}

                    </Form>
            )}
        
        
         
        </Formik>
    </div>
  )
}


export default RegisterFormik ;