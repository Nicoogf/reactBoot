import React from 'react' ; 
import { Task } from "../../models/task.class" ;
import { LEVELS } from '../../models/levels.enum' ;
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

  const defaultTask = new Task( "Ejemplo" , "Descripcion por defecto" , true , LEVELS.NORMAL )

  const changeState = ( id ) =>{
    console.log("TODO:Cambiar estado de una tarea")
  } 
  
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
