import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:"user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
            console.log(action.payload)
        },
        removeUser(state, action) {
            // state.pop(state,action) to pop the last entry FIFO
            state.splice(state.payload, 1)
            console.log("hi", action.payload)
        },
        clearAllUsers(){
            console.log("Hi from clearALL")
            return [];
        },
    }
})


console.log(userSlice.actions.addUser ,"THIS IS ACTION")
export  default  userSlice.reducer;
export const {addUser, removeUser, clearAllUsers} = userSlice.actions;
