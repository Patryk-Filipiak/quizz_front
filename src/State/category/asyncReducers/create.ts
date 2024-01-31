import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DialogInterface } from "../../../Context/types";
import { CategoriesApi } from "../../../API/Categories"; 
import { CategoryData, CategoryState } from "../types";

const reducer = {
    name: 'create',
    thunk: createAsyncThunk(
        "category/create",
        async ({ title, parentId }: { title: string, parentId?: number; dialog: DialogInterface }, thunkAPI) => {     
            const { data } = await CategoriesApi.create(title.trim(), parentId); 
     
            return data;
        }
    ),
    
    cases: (builder: ActionReducerMapBuilder<CategoryState>) => builder
        .addCase(reducer.thunk.fulfilled, (state, action: PayloadAction<CategoryData>) => {  
            if(state.current) state.current.subcategories = [action.payload ,...state.current?.subcategories];   
        }).addCase(reducer.thunk.pending, (state) => {  
        }).addCase(reducer.thunk.rejected, (state, action) => {
            const { dialog } = action.meta.arg; 
            return dialog.toast.send('Błąd podczas dodawania kategorii.');
        })
}

export default reducer;