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
            <div>
                <h1>Listado de Tareas</h1>
            </div>

            <TaskComponent task={defaultTask} /> 
        </div>
    );
};

export default TaskListComponent ;
