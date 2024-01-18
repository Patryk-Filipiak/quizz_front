import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { DialogContextInterface } from "../../../Context/Dialog.types";
import { AuthApi } from "../../../API/Auth";
import { AccountState } from "../types";
import { initialState } from "../accountSlice";

const reducer = {
    name: 'logout',
    thunk: createAsyncThunk(
        "account/logout",
        async (_: { dialog: DialogContextInterface }, thunkAPI) => (await AuthApi.logout()).data
    ),
    
    cases: (builder: ActionReducerMapBuilder<AccountState>) => builder
        .addCase(reducer.thunk.fulfilled, (state) => {
            state.data = initialState.data;
            state.isLoggedIn = false;
        }).addCase(reducer.thunk.rejected, (state, action) => {
            const { dialog } = action.meta.arg; 
            return dialog.showToast('Błąd wylogowywania? Albo masz problem z internetem, albo już się wylogowałeś na innej karcie :)');
        })
}

export default reducer;