import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice.js'
import dataReducer from '../features/data/dataSlice.js'




export const store = configureStore({
    reducer: {
        cart: cartReducer,
        data:dataReducer
    }
})