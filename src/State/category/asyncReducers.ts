import get from './asyncReducers/get';  
import questions from './asyncReducers/questions';  
import create from './asyncReducers/create'; 
import remove from './asyncReducers/remove'; 

export const asyncReducers = [
    get, 
    questions,
    create, 
    remove,
]
 

export const reducers = {
    get: get.thunk, 
    questions: questions.thunk,
    create: create.thunk, 
    remove: remove.thunk
}



export default reducers;