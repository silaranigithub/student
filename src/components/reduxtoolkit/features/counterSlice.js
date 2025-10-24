import { createSlice } from "@reduxjs/toolkit"

// const initialstate={
//     count:0
// }

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{return{count:state.count+1}},
        decrement:(state)=>{return{count:state.count-1}},
        reset:(state)=>{return{count:0}},

    }
})

export const {increment,decrement,reset}=counterSlice.actions

export default counterSlice.reducer


















// in redux we call reducer but in reduxtoolkit we call counterSlice