import React, { useEffect, useState } from 'react' ; 
import { LEVELS } from '../../models/levels.enum' ;
import { Task } from "../../models/task.class" ;
import TaskComponent from '../pure/task';

// Estilos
import "../../styles/task.scss";


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

                  { task.map( ( task , index )=>{
                    return(
                      <TaskComponent 
                          key={index} 
                          task={task} >
                            
                      </TaskComponent>
                    )
                  })}


                  
                 </tbody>
              </table>
                  
            </div>
       </div>

               

            </div>

            
        </div>
    );
};

export default TaskListComponent ;
