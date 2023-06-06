import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartBox : [],
        amount : 0,
    },

    reducers : {
        add : (state,action) => {
            state.cartBox.push(action.payload);
        },
        remove : (state,action) => {
            state.cartBox = state.cartBox.filter((item,index) => index !== action.payload);
        },
        calculateTotal : (state) => {
            state.cartBox.forEach(item =>{
                state.amount += item.price
            });
        }
    },

});

export const {add,remove,calculateTotal} = CartSlice.actions;
export default CartSlice.reducer;