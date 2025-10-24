import reducer from "../features/counterSlice";

const {configureStore}=require("@reduxjs/toolkit");

import  counterReducer from "../features/counterSlice"


export const store=configureStore({
    reducer:{
        counterReducer
 }


})
 