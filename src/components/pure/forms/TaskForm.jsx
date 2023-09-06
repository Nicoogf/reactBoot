import React , { useRef } from 'react' ;
import PropTypes from "prop-types" ;
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm= ( { add }) => {

  const nameRef = useRef("") ;
  const descripcionRef = useRef("") ;
  const levelRef = useRef(LEVELS.NORMAL) ;

  function addTask ( e ){
    e.preventDefault() ;
    const newTask = new Task(
      nameRef.current.value,
      descripcionRef.current.value,
      false,
      levelRef.current.value
    )
    add( newTask )
  }

  return (
    <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4'>
        <div className='form-outline flex-fill'>
          <input placeholder="Ingresar Tarea" ref={ nameRef } id='inputName' type='text' className='form-control form-control-lg' required autoFocus/>
          <input placeholder="Ingresar Descripcion" ref={ descripcionRef } id='inputDescription' type='text' className='form-control form-control-lg' required />
          <label htmlFor="selectLevel" className='sr-only'> Prioridad </label>

          <select name="" id="" ref={ levelRef } defaultValue={LEVELS.NORMAL} id='selectLevel'>

            <option value={LEVELS.NORMAL}> Normal </option>
            <option value={LEVELS.URGENT}> Urgente </option>
            <option value={LEVELS.BLOCKING}> Bloqueante </option>

          </select>

        </div>

        <button type="submit" className='btn btn-success btn-lg ms-1'>Add</button>
    </form>
  )
}

TaskForm.Prototype = {
  add : PropTypes.func.isRequired
}

export default TaskForm ; 