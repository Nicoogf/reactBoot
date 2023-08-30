
import './App.css' ;
import TaskListComponent from './components/container/task_list' ;
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';

function App() {
  return (
    <div className="App">

      {/** Componente del listado de Tareas
       * 
       *  <TaskListComponent />  
       * 
       * **/}         

      {/*Ejemplo 1 - Hook */ }   
        <Ejemplo1 />

        <hr />

        <Ejemplo2 />
      
        <hr />

        <Ejemplo3 />
        
    </div>
  );
}

export default App;
