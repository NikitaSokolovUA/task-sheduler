import { createSlice } from "@reduxjs/toolkit";
import { registration, logIn, logOut, refreshUser } from "./operations";



const authSlice =  createSlice({
    name: ' auth',
    initialState: {        
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
    },
    extraReducers: {
        [registration.fulfilled](state, action) {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        [logIn.fulfilled](state, action) {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        [logOut.fulfilled](state) {
            state.isLoggedIn = false
            state.user = { name: null, email: null }
            state.token = null            
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true
        },
        [refreshUser.fulfilled](state, action) {
            state.isRefreshing = false
            state.isLoggedIn = true
            state.user = action.payload
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false
        },
    }
})

export const authReduser = authSlice.reducer