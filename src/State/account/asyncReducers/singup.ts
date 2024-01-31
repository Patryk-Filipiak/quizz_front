import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AppContextInterface, DialogInterface } from "../../../Context/types";
import { AuthApi } from "../../../API/Auth";
import { AccountState } from "../types"; 

const reducer = {
    name: 'singup',

    thunk: createAsyncThunk(
        "account/singup",
        async ({ username, password, email }: { username: string, password: string; email: string; dialog: DialogInterface }, thunkAPI) => {   
            if( !password || !username || password.trim().length < 6 || username.trim().length < 3) {
                throw new Error('Wpisz poprawne dane...');
            }
    
            const singup = await AuthApi.singup(username.trim(), password.trim(), email.trim()); 

            return singup.data;
        }
    ),
    
    cases: (builder: ActionReducerMapBuilder<AccountState>) => builder
        .addCase(reducer.thunk.fulfilled, (state, action) => { 
            const { username, password, dialog } = action.meta.arg; 
            dialog.toast.send('Konto zostało utworzone :) ');
            // setTimeout(() => dialog.dispatch(account.login({ username, password, dialog })), 100);
        }).addCase(reducer.thunk.pending, (state) => {
            state.exhausted = true;  
        }).addCase(reducer.thunk.rejected, (state, action) => {
            state.exhausted = false; 
            const { dialog } = action.meta.arg; 
            // return dialog.showToast('Nazwa użytkownika lub adres email są już używane.');
        })
}

export default reducer;