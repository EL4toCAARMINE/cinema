import {createSlice} from '@reduxjs/toolkit';

// Definimos el estado inicial puede ser un arreglo o un objeto
const initState = {
    id: null,
    session: false,
    token: null,
    user: ""
};

// Actions
export const authSlice = createSlice({
    // Nombre por el que accedemos al slice
    name:'auth',
    // Estado inicial que funcionara como state en los reducers
    initialState:initState,
    // Actions que reciben el estado inicial como state y los parametros como action.payload
    reducers:{
        logIn: (state,action)=>{
            // Asignando nuevo valor
            return {...state, ...action.payload}
        },
        logOut: (state,action)=>{
            return {...state, ...action.payload}
        },
    }
});

export const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;