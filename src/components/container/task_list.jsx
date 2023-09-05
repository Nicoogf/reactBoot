import React, { useEffect, useState } from 'react' ; 
import { LEVELS } from '../../models/levels.enum' ;
import { Task } from "../../models/task.class" ;
import TaskComponent from '../pure/task';

// Estilos
import "../../styles/task.scss";

const TaskListComponent = () => {

  const defaultTask = new Task( "Ejemplo" , "Descripcion por defecto" , true , LEVELS.NORMAL );


  // Estado del Componente

  const [ task , setTask ] = useState( [defaultTask] ) ;
  const [ loading , setLoading ] = useState( true ) ;



  // Control del ciclo de vida

  useEffect(()=>{
      console.log("Modificacion de tarea") ;
      setLoading( false ) ;

  return () => {
      console.log("Desaparece la lista de tareas")
    }

  }, [ task ]);


  

  const changeCompleted = ( id ) =>{
    console.log("TODO: Cambiar estado de una tarea ")
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
                    {/* Iterar sobre una lista de tareas */}
                    <TaskComponent task={defaultTask} /> 
                 </tbody>
              </table>
                  
            </div>
       </div>

               

            </div>

            
        </div>
    );
};

export default TaskListComponent ;
