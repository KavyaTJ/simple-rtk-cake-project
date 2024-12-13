import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { ordered as cakeOrdered } from "../cake/cakeSlice"

type initialState={
    numofIcecreams:number
}

const initialState :initialState ={
    numofIcecreams:10
}

const IcecreamSlice =createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numofIcecreams--
        },
        restocked:(state,actions:PayloadAction<number>)=>{
        state.numofIcecreams += actions.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
          state.numofIcecreams--;
        });
      },

})

export default IcecreamSlice.reducer
export const {ordered,restocked}=IcecreamSlice.actions
