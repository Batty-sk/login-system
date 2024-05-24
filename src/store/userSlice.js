import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:'user',
    initialState:{
        username:'',
        password:''
    },reducers:{
        updateUsername:(state,action)=>{
            console.log('comming here',action.payload)
            state.username = action.payload
        }

    }
})

export const { updateUsername } = userSlice.actions
export default userSlice.reducer
