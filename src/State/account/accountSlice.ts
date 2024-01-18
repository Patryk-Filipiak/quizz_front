import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../../API/Auth";
import { RootState } from "../store";  
import { DialogContextInterface } from "../../Context/Dialog.context"; 
export interface AccountData {
    username: string;
    flags: number;
}

export interface AccountState {
    loading: boolean;
    isLoggedIn: boolean;
    exhausted: boolean;
    data: AccountData;
}

const initialState: AccountState = {
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
            console.log('Change username')
            state.data.username = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(checkIsLoggedIn.rejected, (state) => { 
                state.loading = false;
                state.isLoggedIn = false;
        }).addCase(checkIsLoggedIn.fulfilled, (state, action: PayloadAction<AccountData>) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.data = action.payload;
        });

        builder.addCase(accountLogin.fulfilled, (state, action: PayloadAction<AccountData>) => { 
            state.data = action.payload;
            state.isLoggedIn = true; 
        }).addCase(accountLogin.pending, (state) => {
            state.exhausted = true; 
        }).addCase(accountLogin.rejected, (state, action) => {
            state.exhausted = false;
            const { dialog } = action.meta.arg; 
            return dialog.showToast(action.error && action.error.name === 'Error' ? action.error.message || '' : 'Niepoprawne dane logowania.');
        }); 

        builder.addCase(accountLogout.fulfilled, (state) => {
            state.data = initialState.data;
            state.isLoggedIn = false;
        }).addCase(accountLogout.rejected, (state, action) => {
            const { dialog } = action.meta.arg; 
            return dialog.showToast('Błąd wylogowywania? Albo masz problem z internetem, albo już się wylogowałeś na innej karcie :)');
        })
    }
});

export const checkIsLoggedIn = createAsyncThunk(
    "account/checkIsLoggedIn",
    async () => {
        const { data } = await AuthApi.check(); 

        return data;
    }
);

export const accountLogin = createAsyncThunk(
    "account/accountLogin",
    async ({ password }: { password: string; dialog: DialogContextInterface }, thunkAPI) => { 
        const { account } = thunkAPI.getState() as RootState; 

        if( !password || !account.data.username || password.trim().length < 6 || account.data.username.trim().length < 3) {
            throw new Error('Wpisz poprawne dane...');
        }

        const { data } = await AuthApi.login(account.data.username.trim(), password.trim()); 
 
        return data;
    }
);

export const accountLogout = createAsyncThunk(
    "account/accountLogout",
    async (_: { dialog: DialogContextInterface }, thunkAPI) => (await AuthApi.logout()).data);


export const { setUsername } = accountSlice.actions;
export default accountSlice.reducer;