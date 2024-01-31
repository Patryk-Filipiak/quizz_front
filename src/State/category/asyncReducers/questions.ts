import { ActionReducerMapBuilder, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryState, QuestionData } from "../types";
import { CategoriesApi } from "../../../API/Categories";
import { DialogInterface } from "../../../Context/types";

const reducer = {
    name: 'questions',
    thunk: createAsyncThunk(
        "category/questions",
        async ({ id, dialog }: { id: number, dialog: DialogInterface }, thunkAPI) => {
            const { data } = await CategoriesApi.questions(id); 
    
            return data;
        }
    ),
    
    cases: (builder: ActionReducerMapBuilder<CategoryState>) => builder
    .addCase(reducer.thunk.pending, (state) => { 
        state.loading = true; 
        state.questions = null;
    }).addCase(reducer.thunk.rejected, (state) => { 
        state.loading = false; 
    }).addCase(reducer.thunk.fulfilled, (state, action: PayloadAction<QuestionData[]>) => {
        state.loading = false; 
        state.questions = action.payload;
        console.log('Odebrano questiony:', action.payload)
    }),
}

export default reducer;