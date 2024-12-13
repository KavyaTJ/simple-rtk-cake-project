import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
type initialState={
  numCakes:number
}

const initialState:initialState = {
  numCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numCakes -= 1;
    },
    restocked: (state, action:PayloadAction<number>) => {
      state.numCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer
export const {ordered,restocked}=cakeSlice.actions
