import React from 'react' ; 
import PropTypes from 'prop-types' ; 
import { Task } from '../../models/task.class';

const TaskComponent = ({ task }) => {
  return (
    <div>
        <h2>
           Nombre : { task.name }
        </h2>

        <h3>
            Descripcion : { task.description }
        </h3>

        <h4>
            Estado : { task.completed ? "Tarea Completada" : "Tarea Pendiente" }
        </h4>
        
        <h5>
            Prioridad : { task.level }
        </h5>
    </div>
  )
};

TaskComponent.propTypes = {
  task : PropTypes.instanceOf( Task ) 
};

export default TaskComponent ; 
