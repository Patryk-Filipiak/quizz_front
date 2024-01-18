import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AccountState } from "./types";
import { asyncReducers } from './asyncReducers';

export const initialState: AccountState = {
    loading: true,
    isLoggedIn: false,
    exhausted: false,
    data: {
        username: '',
        flags: 0,
    }
}


const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setUsername: (state:AccountState, action: PayloadAction<string>) => {  
            state.data.username = action.payload;
        },
    },

    extraReducers: (builder) => {
        asyncReducers.forEach((reducer) => reducer.cases(builder));
    }
}); 


export const { setUsername } = accountSlice.actions;
export default accountSlice.reducer;