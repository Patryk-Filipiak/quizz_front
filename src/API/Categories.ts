import axios from "axios";
import { CategoryData, QuestionData } from "../State/category/types";

const BASE_URL: string = 'http://localhost/api/categories/';

export abstract class CategoriesApi {
    static get = async (slug?: string):Promise<{ data: CategoryData}> => axios.get(BASE_URL + (slug || ''), {
        withCredentials: true,
    });
 
    static questions = async (id?: number):Promise<{ data: QuestionData[]}> => axios.get(BASE_URL + (id || '') + '/questions', {
        withCredentials: true,
    });

    static create = async (title: string, parentId?: number):Promise<{ data: CategoryData}> => axios.post(BASE_URL + (parentId || '') + '', {
        title
    }, {
        withCredentials: true,
    });

    static delete = async (categoryId?: number):Promise<{ data: CategoryData}> => axios.delete(BASE_URL + categoryId, {
        withCredentials: true,
    });
} 