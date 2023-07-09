import { createSlice } from '@reduxjs/toolkit';

const storageData = !!localStorage.getItem("shoppingCart") ? JSON.parse(localStorage.getItem("shoppingCart")) : [];

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartBox: storageData,
        searchProduct: "",
    },

    reducers: {
        add: (state, action) => {
            const item = state.cartBox.find((card) => card.id === action.payload.id);

            if (!!item) {
                item.quantity += action.payload.quantity;
            } else {
                state.cartBox.push(action.payload);
            }
            localStorage.setItem("shoppingCart", JSON.stringify(state.cartBox));
        },
        
        remove: (state, action) => {
            state.cartBox = state.cartBox.filter((card) => card.id !== action.payload);
            localStorage.setItem("shoppingCart", JSON.stringify(state.cartBox));
        },
        searchQuery: (state, action) =>{
            state.searchProduct = action.payload;
        }
    },


});

export const { add, remove, searchQuery } = CartSlice.actions;
export default CartSlice.reducer;