import { createSlice } from '@reduxjs/toolkit'





const initialState = {
    cartItems: [],
    cartQuantity: 0,
    total: 0,
    isOpen: false, 
}






const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => { 
            state.cartItems = []
        },
        addToCart: (state, { payload }) => { 
            let item = state.cartItems.find(el => el.id === payload)
            if (item) {
                item.quantity += 1
                
            } else { 
                state.cartItems.push({id:payload, quantity:1})
            }
        },
        removeFromCart: (state, { payload }) => { 
            let item = state.cartItems.find(el => el.id === payload)
            item.quantity -= 1
        },
        removeAllcurrItems: (state, { payload }) => { 
            let item = state.cartItems.find(el => el.id === payload)
            state.cartItems = state.cartItems.filter(item => item.id !== payload)
        },
        toggleCart: (state, { payload }) => { 
            state.isOpen = payload
        },


    },

})



export const { clearCart, addToCart,removeFromCart, removeAllcurrItems, toggleCart} = cartSlice.actions;


export default cartSlice.reducer;