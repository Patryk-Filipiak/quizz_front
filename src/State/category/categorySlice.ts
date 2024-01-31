import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryState } from "./types"; 
import { asyncReducers } from './asyncReducers';

export const initialState: CategoryState = {
    loading: true, 
    exhausted: false, 
    current: null,
    questions: [],
}


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: { 
        any: (state:CategoryState, action: PayloadAction<string>) => {  
        // state.data.username = action.payload;
    },
    },

    extraReducers: (builder) => {
        asyncReducers.forEach((reducer) => reducer.cases(builder));
    }
}); 


export const { any } = categorySlice.actions;
export default categorySlice.reducer;