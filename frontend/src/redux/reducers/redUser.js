import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const ConnectUser=createAsyncThunk('/users/signin',async (user)=>{
    return axios.
    post('http://localhost:9000/users/signin',user)
    .then(res=>{
        return res.data
    })
    .catch(err=>{
       return  err.data.message
    })
})

export const SetBudget=createAsyncThunk('/users?user/budget',async ({user,budget})=>{
    return axios.
    post(`http://localhost:9000${user}/budget`,budget)
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        return err.data.message
    })
})

const reducer1=createSlice(
    {
        name:"USERS",
        initialState:{
            user:{
                userMail:'',
                userPassword:'',
                budget:0
            },
            status:'',
            error:'',
        },
        reducers:{},
        extraReducers:{
        [ConnectUser.fulfilled]:(state,action)=>{
            if (typeof(action.payload)==='object') {
                state.user=action.payload
                localStorage.setItem('user',JSON.stringify(action.payload))
                state.status='Connected with success!!'
            } else {
                state.error=action.payload
                state.status='failed to connect!!'
            }
        },
        [ConnectUser.rejected]:(state,action)=>{
            state.status='request rejected!!!'
            state.error=action.payload
        },
        [ConnectUser.pending]:(state)=>{
            localStorage.setItem('user','')
            state.status='loading....'
        },
        [SetBudget.fulfilled]:(state,action)=>{
            state.budget=action.payload.budget
            state.status='chargé avec succès!!'
        },
        [SetBudget.rejected]:(state,action)=>{
            state.error=action.payload
            state.status='Failure!!'
        },
        [SetBudget.pending]:(state)=>{
            state.status='Pending...'
        }
        }
})
export default reducer1.reducer