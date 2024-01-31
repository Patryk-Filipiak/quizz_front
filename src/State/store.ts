import { configureStore } from '@reduxjs/toolkit';
import accountReducer from "./account/accountSlice"; 
import categoryReducer from "./category/categorySlice"; 

export const store = configureStore({
    reducer: {
        account: accountReducer, 
        category: categoryReducer, 
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
