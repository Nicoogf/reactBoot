import React, { useEffect } from 'react' ; 
import PropTypes from 'prop-types' ; 
import { Task } from '../../models/task.class';

// Estilos
import '../../styles/task.scss' ;

const TaskComponent = ({ task }) => {

  useEffect( ()=>{
     console.log("Tarea Creada") ;
    return () =>{
      console.log(`La tarea ${ task.name } va a desaparecer`) ;
      }
    } , [ task ] 
  );


  return (
    <tr className='fw-normal'>
      <th> 
        <span className='m-2'> { task.name }  </span> 
      </th>

      <td className='align-middle'>
        <span > { task.description } </span>
      </td>

      <td className='align-middle'>
        {/* Sustituir por un badge*/}
        <span> { task.level } </span>
      </td>

      <td className='align-middle'>
        {/* Sustituir por iconos*/}
        <span> { task.completed } </span>
      </td>
      
    </tr>
  )
};

TaskComponent.propTypes = {
  task : PropTypes.instanceOf( Task ) 
};

export default TaskComponent ; 
