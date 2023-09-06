import React, { useEffect } from 'react' ; 
import PropTypes from 'prop-types' ; 
import { Task } from '../../models/task.class';

// Estilos
import '../../styles/task.scss' ;
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task , complete }) => {

  useEffect( ()=>{
     console.log("Tarea Creada") ;
    return () =>{
      console.log(`La tarea ${ task.name } va a desaparecer`) ;
      }
    } , [ task ] 
  );


 /**
  * Funcion para setear prioridad
  */

  function taskLevelBadge(){
    switch ( task.level ) {
      case LEVELS.NORMAL:
        return(
          <h6 className='mb-0'> 
            <span className='badge bg-primary'> 
              { task.level } 
            </span> 
          </h6>)
      case LEVELS.URGENT:
        return(
          <h6 className='mb-0'> 
            <span className='badge bg-warning'> 
              { task.level } 
            </span> 
          </h6>) 
      case LEVELS.BLOCKING:
        return(
          <h6 className='mb-0'> 
            <span className='badge bg-danger'> 
              { task.level } 
            </span> 
          </h6>)
       default:
        break;     
    }
  }
  
   /**
  * Funcion para setear Estado
  */

  function taskIconCompleted(){
      if(task.completed){
        return (<i onClick= { ()=> complete( task )} className='bi-toggle-on task-action' style={{ color : 'green' , fontWeight: 'bold'}}/>)
      }else{
        return (<i onClick= { ()=> complete( task )} className='bi-toggle-off task-action'style={{ color : 'grey' , fontWeight: 'bold'}} />) 
      }
  }



  return (
    <tr className='fw-normal'>

      <th> 
        <span className='m-2'> { task.name }  </span> 
      </th>

      <td className='align-middle'>
        <span > { task.description } </span>
      </td>

      <td className='align-middle'>
        {/* Ejecucion de la funcion para retornar elementos*/}
        { taskLevelBadge() }
      </td>

      <td className='align-middle'>
        
         { taskIconCompleted() }

         <i className='bi-trash task-action' style={{ color : 'tomato' , fontSize: '20px'}}/>

      </td>
    </tr>
  ) ;
};

TaskComponent.propTypes = {
  task : PropTypes.instanceOf( Task ).isRequired ,
  complete : PropTypes.func.isRequired
};

export default TaskComponent ; 
