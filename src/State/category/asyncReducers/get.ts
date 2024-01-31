import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryData, CategoryState } from "../types";
import { CategoriesApi } from "../../../API/Categories";
import { DialogInterface } from "../../../Context/types";

const reducer = {
    name: 'get',
    thunk: createAsyncThunk(
        "category/get",
        async ({ slug, dialog }: { slug: string, dialog: DialogInterface }, thunkAPI) => {
            const { data } = await CategoriesApi.get(slug || ''); 
    
            return data;
        }
    ),
    
    cases: (builder: ActionReducerMapBuilder<CategoryState>) => builder
    .addCase(reducer.thunk.pending, (state) => { 
        state.loading = true; 
        state.questions = null;
    }).addCase(reducer.thunk.rejected, (state) => { 
        state.loading = false; 
    }).addCase(reducer.thunk.fulfilled, (state, action: PayloadAction<CategoryData>) => {
        state.loading = false; 
        state.current = action.payload; 
    }),
}

export default reducer;