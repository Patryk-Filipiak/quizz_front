/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";  
import { AppDispatch, RootState } from "../../State/store"; 
import category from '../../State/category/asyncReducers'
import { DialogInterface } from "../types"; 
import { useSelector } from "react-redux";

export const useCategories = (dispatch: AppDispatch, dialog: DialogInterface) => { 
    const state = useSelector((state:RootState) => state.category);
    useEffect(() => {
        if (!state.current?.id) {
            return; 
        }
        dispatch(category.questions({ id: state.current?.id, dialog }))
    }, [state.current]);

    return { 
        state, 
        get: (slug: string = '') => {dispatch(category.get({ slug, dialog }))},
        question: (id: number) => {dispatch(category.questions({ id, dialog }))},
        create: (title: string, parentId?: number) => {dispatch(category.create({ title, parentId,dialog }))},
        delete: (categoryId: number) => {dispatch(category.remove({ categoryId, dialog }))},
    }
}


