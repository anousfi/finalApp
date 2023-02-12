import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const displayOffers=createAsyncThunk('/offers?user',async ({user})=>{
    return axios.
    get(`http://localhost:9000/offers${user}`)
    .then(res=>{
        return res.data
    })
    .catch(err=>{
        return err.data.message
    })
})

const reducer2=createSlice({
    name:'Offers',
    initialState:{
        list:[],
        prix:0,
        prixLocation:0,
        quartier:"",
        surface:0
    },
    status:'',
    error:'',
    reducers:{},
    extraReducers:{
        [displayOffers.fulfilled]:(state,action)=>{
            if (typeof(action.payload)==='object') {
                state=action.payload
                localStorage.setItem('user',JSON.stringify(action.payload))
                state.status='élements chargés avec succès!!'
            } else {
                state.error=action.payload
                state.status='failed to connect!!'
            }
        },
        [displayOffers.rejected]:(state,action)=>{
            state.error=action.payload
            state.status='Not Found!!'
        },
        [displayOffers.pending]:(state)=>{
            state.status='En cours de chargement...'
        }
    }
})

export default reducer2.reducer