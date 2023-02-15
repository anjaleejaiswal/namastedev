import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice =createSlice({
    name : "sideBarToogle",
    initialState : {
        isMenuOpen : true
    },
    reducers : {
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },

        closeSideBarMenu : (state) => {
            state.isMenuOpen = false
        }


    }
})

export const {toggleMenu, closeSideBarMenu} = sidebarSlice.actions;

export default sidebarSlice.reducer;