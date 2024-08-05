import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Addtasks from './Addtasks'
import { deleteTask, updateTask } from '../Redux/taskSlice'

const Home = () => {
  const lestask=useSelector((store)=>store.tasks)
  console.log(lestask)

const [ticket, setticket] = useState(false)
const dispatch=useDispatch()
const [showinput, setshowinput] = useState(false)
const [update, setupdate] = useState({
  name: ""
})



  return (
    <div>
      <h1>This is my task</h1>
        <Addtasks/>
        {lestask.map((el)=>(
      <div className='boxitask'>
          {ticket? <h1 style={{textDecoration:"line-through"}}>{el.name}</h1>:<h1>{el.name}</h1> }
        <i class="fa-solid fa-check"  onClick={()=>setticket(true)} ></i>
        <i class="fa-solid fa-pen" onClick={()=>setshowinput(true)}></i>
        <i class="fa-solid fa-trash" onClick={()=>dispatch(deleteTask(el))}  ></i>
       {showinput?
       (
<>
<input type='text' placeholder='name' onChange={(el)=>setupdate({name:el.target.value})}/>
<button onClick={()=>dispatch(updateTask({el,update}))}>Ok</button>

</>
       ):null
      }
</div>
))}
       
</div>
  )
}

       
        


export default Home
