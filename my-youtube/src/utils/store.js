import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";

const store = configureStore({
    reducer : {
        sideBarToogle : sideBarSlice
    }
});


export default store;