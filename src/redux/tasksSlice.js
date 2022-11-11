import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleTask } from "./operations";

const handlePending = (state) => {
    state.isActive = true
}

const handleRejected = (state, action) => {    
             state.isActive = false;
             state.error = action.payload;    
         }



 const tasksSlice = createSlice({
    name: 'tasks',
     initialState: {
         items: [],
         isActive: false,
         error: null,
    },
     extraReducers: {
         [fetchTasks.pending]: handlePending,
         [addTask.pending]: handlePending,
         [deleteTask.pending]: handlePending,
         [toggleTask.pending]: handlePending,

         [fetchTasks.rejected]: handleRejected, 
         [addTask.rejected]: handleRejected,         
         [deleteTask.rejected]: handleRejected,         
         [toggleTask.rejected]: handleRejected,
         
         [addTask.fulfilled](state, action) {
             state.isActive = false;
             state.error = null;
             state.items.push(action.payload)
         },
         [toggleTask.fulfilled](state, action) {
             state.isActive = false;
             state.error = null;
             const index = state.items.findIndex(item => item.id === action.payload.id)
             state.items.splice(index, 1, action.payload)
         },
         [fetchTasks.fulfilled](state, action) {
             state.isActive = false;
             state.error = null;
             state.items = action.payload;         
         },
         [deleteTask.fulfilled](state, action) {
             state.isActive = false;
             state.error = null;
             const index = state.items.findIndex(item => item.id === action.payload.id)
             state.items.splice(index, 1)
         },
         
    }
 })


export const tasksReducer = tasksSlice.reducer;
 
