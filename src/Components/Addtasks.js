import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtasks } from '../Redux/taskSlice';

const Addtasks = () => {
  const dispatch=useDispatch();
  const [newtasks, setnewtasks] = useState(
    {
name:""

    }

  )
  return (
    <div>
      <input type='text' placeholder='your task'  onChange={(e)=> setnewtasks( {name:e.target.value})} />
      <button onClick={()=>dispatch(addtasks(newtasks))}> ADD Task</button>
    </div>
  )
}

export default Addtasks
