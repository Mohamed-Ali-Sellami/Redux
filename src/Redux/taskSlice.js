import { createSlice } from '@reduxjs/toolkit'


const initialState = [





  
]

export const TaskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

    addtasks:(state,action)=>{
      state=state.push(action.payload)
    },
   
    deleteTask:(state,action)=>{
  
   return state = state.filter((el) => el.name !== action.payload.name);
},

updateTask:(state,action)=>{
return state.map((el)=>el.name==action.payload.el.name? el=action.payload.update:el)
}


  }
})

// Action creators are generated for each case reducer function
export const {addtasks,deleteTask,updateTask} = TaskSlice.actions

export default TaskSlice.reducer