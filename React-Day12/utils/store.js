import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        cart : cartSlice
    }
});

export default store;




/* 
-create store
    -configureStore() - RTK

-Provide my store to app
    -<Provider store={store} /> --react-redux

-create a slice 
    -createSlice -RTK
        -name
        -initialState
        -reducers (addItem : (state,action) => {..}, removeItem..)

        -export const {addItem, removeItem} = cartSlice.actions;
        export default cartSlice.reducer

- put the slice in store
    configureStore({
        reducer : {
            cart : cartSlice,
            user : userSlice
        }
    })



*/