import UsersReducer from '../reducers/redUser'
import OffersReducer from '../reducers/redOffers'
import { configureStore } from "@reduxjs/toolkit";
const Mystore=configureStore({
    reducer:{
        Users:UsersReducer,
        Offers:OffersReducer
    }
})
export default Mystore ;