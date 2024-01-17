import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../../API/Auth";
import { RootState } from "../store";
interface AccountData {
    username: string;
    flags: number;
}

interface AccountState {
    loading: boolean;
    isLoggedIn: boolean;
    data: AccountData;
}

const initialState: AccountState = {
    loading: true,
    isLoggedIn: false,
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
            console.log('Chcesz zmienic username', state, action)
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
        }).addCase(accountLogin.rejected, (state, error) => {
            console.log('Error logowania.', state, error);
        }); 
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
    async (password: string, thunkAPI) => {
        const { account } = thunkAPI.getState() as RootState; 
        const { data } = await AuthApi.login(account.data.username.trim(), password.trim());
        
        return data;
    }
);



export const { setUsername } = accountSlice.actions;
export default accountSlice.reducer;