import React, { useEffect, useState } from 'react' ; 
import { LEVELS } from '../../models/levels.enum' ;
import { Task } from "../../models/task.class" ;
import TaskComponent from '../pure/task';

// Estilos
import "../../styles/task.scss";
import TaskForm from '../pure/forms/TaskForm';


const TaskListComponent = () => {

  const defaultTask1 = new Task( "Ejemplo1" , "Desc Uno" , true , LEVELS.NORMAL );
  const defaultTask2 = new Task( "Ejemplo2" , "Desc Dos" , false  , LEVELS.URGENT );
  const defaultTask3 = new Task( "Ejemplo3" , "Desc Tres" , false  , LEVELS.BLOCKING );

  // Estado del Componente

  const [ task , setTask ] = useState([ defaultTask1 , defaultTask2 ,  defaultTask3 ]) ;
  const [ loading , setLoading ] = useState( true ) ;



  // Control del ciclo de vida

  useEffect(()=>{
      console.log("Modificacion de tarea") ;
      setLoading( false ) ;

  return () => {
      console.log("Desaparece la lista de tareas")
    }

  }, [ task ]);


  function completeTask( task ) {
    console.log(` Complete this Task : ${ task } `)
    const index = task.indexOf( task );
    const tempTask = [...task];
    tempTask[index].completed = !tempTask[index].completed ;
      //Actualizacoin del etado del componente y actualizacion del iterador de tareas en orden de vista 
      setTask( tempTask )
  } ;

  

return (
    <div>
      <div className='col-12'>
        <div className='card '>

            {/* Card Header - Titulo */}
            <div className='card-header p-3'>
              <h5>Your Task :</h5>
            </div>

            {/* Card Body - Contenido */}
            <div 
              className='card-body' 
              data-mbd-perfect-scrollbar='true'  
              style={{ position: 'relative' , height : '400px' }}
            >
                
              <table>
                <thead>
                  <tr>
                    <th scope='col'> Titulo </th>
                    <th scope='col'> Descripcion </th>
                    <th scope='col'> Prioridad </th>
                    <th scope='col'> Accion </th>
                  </tr>
                 </thead> 
                 <tbody>

                  { task.map( ( task , index )=>{
                    return(
                      <TaskComponent 
                          key={index} 
                          task={task} 
                          complete={ completeTask }>
                            
                      </TaskComponent>
                    )
                  })}
                  
                  </tbody>
                </table>                  
              </div>
            <TaskForm> </TaskForm>
          </div>             
        </div>
      </div>

    );
};

export default TaskListComponent ;
