import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk(
    "tasks/fetchAll",
    async (controller, thunkAPI) => {
    try {
        const responce = await axios.get('/tasks', {
            signal: controller.signal
        })
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    })

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (text, thunkAPI) => {
        try {
            const responce = await axios.post('/tasks', { text })
            return responce.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
    
export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (taskId, thunkAPI) => {
        try {
            const responce = await axios.delete(`/tasks/${taskId}`)
            return responce.data            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const toggleTask = createAsyncThunk(
    'tasks/toggleTask', 
    async (task, thunkAPI) => {
        try {
            console.log(task);
            const responce = await axios.put(`/tasks/${task.id}`, {
                completed: !task.completed
            })
            return responce.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)