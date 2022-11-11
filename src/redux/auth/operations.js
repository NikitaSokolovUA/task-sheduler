import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'
// axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

const setAuthToken = (token) => {
    axios.defaults.headers.common['Authorization'] = token
}

const clearAuthToken = () => {
    axios.defaults.headers.common['Authorization'] = ''
}

export const registration = createAsyncThunk(
    'auth/registration',
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/signup', credentials)
            setAuthToken(responce.data.token)
            return responce.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logIn = createAsyncThunk(
    'auth/logIn',
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/login', credentials)
            setAuthToken(responce.data.token)
            return responce.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout')
           clearAuthToken()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)




export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {      
        const state = thunkAPI.getState()
        const persistToken = state.auth.token


        if (persistToken === null) {            
            return thunkAPI.rejectWithValue('no token to do fetch')
        }

        try {
            setAuthToken(persistToken)
            const responce = await axios.get('/users/current')
            console.log(responce.data);
            return responce.data
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)