import login from './asyncReducers/login'; 
import logout from './asyncReducers/logout'; 
import check from './asyncReducers/check';
import singup from './asyncReducers/singup';

export const asyncReducers = [
    login,
    logout,
    check,
    singup,
]
 

export const reducers = {
    login: login.thunk,
    logout: logout.thunk,
    check: check.thunk,
    singup: singup.thunk,
}



export default reducers;