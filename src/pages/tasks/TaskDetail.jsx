import React from 'react'
import { useParams } from "react-router-dom"

const TaskDetail = () => {

    const {id} = useParams() ;

  return (
    <div>Detalle de la tarea - { id } </div>
  )
}

export default TaskDetail ;