import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DialogInterface } from "../../../Context/types";
import { CategoriesApi } from "../../../API/Categories"; 
import { CategoryData, CategoryState } from "../types";

const reducer = {
    name: 'remove',
    thunk: createAsyncThunk(
        "category/remove",
        async ({ categoryId }: { categoryId: number; dialog: DialogInterface }, thunkAPI) => {     
            const { data } = await CategoriesApi.delete(categoryId); 
     
            return data;
        }
    ),
    
    cases: (builder: ActionReducerMapBuilder<CategoryState>) => builder
        .addCase(reducer.thunk.fulfilled, (state, action) => {  
            if(state.current)
                state.current.subcategories = [...state.current?.subcategories].filter(cat => cat.id !== action.meta.arg.categoryId);   
                
        }).addCase(reducer.thunk.pending, (state) => {  
        }).addCase(reducer.thunk.rejected, (state, action) => {
            const { dialog } = action.meta.arg; 
            return dialog.toast.send('Błąd podczas usuwania kategorii.');
        })
}

export default reducer;