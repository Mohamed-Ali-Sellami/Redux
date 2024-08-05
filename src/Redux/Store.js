import { configureStore } from '@reduxjs/toolkit'
import  TaskSlice  from './taskSlice'

export const store = configureStore({
  reducer: {tasks:TaskSlice},
})