import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi } from "../../../API/Auth";
import { AccountData, AccountState } from "../types";

const reducer = {
    name: 'check',
    thunk: createAsyncThunk(
        "account/check",
        async () => {
            const { data } = await AuthApi.check(); 
    
            return data;
        }
    ),
    
    cases: (builder: ActionReducerMapBuilder<AccountState>) => builder
        .addCase(reducer.thunk.rejected, (state) => { 
            state.loading = false;
            state.isLoggedIn = false;
        }).addCase(reducer.thunk.fulfilled, (state, action: PayloadAction<AccountData>) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.data = action.payload;
    }),
}

export default reducer;