import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";





const url = "https://fakestoreapi.com/products"


const initialState = {
    products: [],
    isLoading:false
}


export const getProducts = createAsyncThunk("data/getProducts", () => { 
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
})


const dataSlice = createSlice({
    name: 'data',
    initialState,
    extraReducers: {
        [getProducts.pending]: (state) => { 
            
            state.isLoading = true
        },
        [getProducts.fulfilled]: (state, action) => { 
            
            state.isLoading = false
            state.products = action.payload
            
        },
        [getProducts.rejected]: (state) => { 
            
            state.isLoading = false
        }


    }
})


export default dataSlice.reducer