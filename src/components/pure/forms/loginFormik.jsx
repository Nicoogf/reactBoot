import React from 'react' ;
import { Formik , Field ,Form} from "formik";
import * as Yup from "yup" ;

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                  .email("Formato de Email invalido")
                  .required("Email es Obligatorio"),
        password: Yup.string()
                     .required("La contraseña es obilgatoria")                
    }
)

const LoginFormik = () => {

const initialCredentials = {
    email : '',
    password :''
}
  return (
    <div className='blanco'>
        <h4>Login Form</h4>
        
      <Formik
        initialValues={ initialCredentials }
        /// Validation form con Yup
        validationSchema={ loginSchema }
        onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
       }}>

        <Form>
            <label htmlFor="email">Email</label>
            <Field id="email" type='email' name="email" placeholder="Ingresar Email" />

            <label htmlFor="password">Password</label>
            <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
            />
            <button type="submit">Ingresar</button>
        </Form>

      </Formik>
    </div>
  );
};


export default LoginFormik ;