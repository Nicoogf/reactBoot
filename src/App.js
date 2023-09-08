
import './App.css' ;
import './styles/task.scss'
import TaskListComponent from './components/container/task_list' ;
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from "./components/pure/greetingStyled" ;
import OptionalRender from './components/pure/optionalRender';
import LoginForm from './components/pure/forms/loginForm';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">

      {/** Componente del listado de Tareas
       * 
       *  <TaskListComponent />  
       * 
       * **/}         

      {/*Ejemplo 1 - Hook */ }   

      { /**
       *  <Ejemplo1 />

              <hr />

              <Ejemplo2 />
            
              <hr />

              <Ejemplo3 />

              <hr />

              <Ejemplo4 nombre = "Carlos Props" >
                <h4 className="task-name"> Este es el contenido que se va a renderizar con el props.children </h4>
              </ Ejemplo4>

              <TaskListComponent />
              <GreetingStyled name="Juan"></GreetingStyled>    
      * 
      * 
      * 
      */}


      {/*     <OptionalRender></OptionalRender>  */}
      {/* Ejemplo de Renderizado Condicional */}

      {/* Ejemplo de Formik y Yup
        <LoginFormik></LoginFormik>
      */ }
      

     {/*   <TaskListComponent> </TaskListComponent>*/}

     <RegisterFormik className="blanco"></RegisterFormik>
    
    </div>
  );
}

export default App;
