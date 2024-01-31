import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DialogInterface } from "../../../Context/types";
import { AuthApi } from "../../../API/Auth";
import { AccountData, AccountState } from "../types";

const reducer = {
    name: 'login',
    thunk: createAsyncThunk(
        "account/login",
        async ({ username, password }: { username: string, password: string; dialog: DialogInterface }, thunkAPI) => {   
            if( !password || !username || password.trim().length < 6 || username.trim().length < 3) {
                throw new Error('Wpisz poprawne dane...');
            }
    
            const { data } = await AuthApi.login(username.trim(), password.trim()); 
     
            return data;
        }
    ),
    
    cases: (builder: ActionReducerMapBuilder<AccountState>) => builder
        .addCase(reducer.thunk.fulfilled, (state, action: PayloadAction<AccountData>) => { 
            state.data = action.payload;
            state.isLoggedIn = true; 
            state.exhausted = false;
        }).addCase(reducer.thunk.pending, (state) => {
            state.exhausted = true; 
        }).addCase(reducer.thunk.rejected, (state, action) => {
            state.exhausted = false;
            const { dialog } = action.meta.arg; 
            return dialog.toast.send(action.error && action.error.name === 'Error' ? action.error.message || '' : 'Niepoprawne dane logowania.');
        })
}

export default reducer;