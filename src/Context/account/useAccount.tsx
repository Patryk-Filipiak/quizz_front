/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"; 
import { AppDispatch, RootState } from "../../State/store";
import account from '../../State/account/asyncReducers'
import { DialogInterface } from "../types";
import { useSelector } from "react-redux";

export enum FLAGS {
    'IS_ACTIVE' = 1,
    'CAN_SEE_PANEL' = 2,
}

export const hasFlag = (userFlag: number, flag: number): boolean => {
    let maxFlag: number = 0;
    let userFlags: number = userFlag;
    let currentFlag: number = 1;
    const FLAGS: number[] = [];
  
    do {
      maxFlag = currentFlag;
      currentFlag *= 2;
    } while (currentFlag < userFlags);
  
    while (userFlags >= 0) {
      if (maxFlag === 0) return FLAGS.includes(flag);
      if (userFlags >= maxFlag) {
        userFlags -= maxFlag;
        FLAGS.push(maxFlag);
      }
      maxFlag = Math.floor(maxFlag / 2);
    }

    return false;
}

export const useAccount = (dispatch: AppDispatch, dialog: DialogInterface) => { 
    useEffect(() => {
        dispatch(account.check());
    }, []);
    
    const state = useSelector((state:RootState) => state.account);

    const profile = { 
        state, 
        login: (username:string, password:string) => { dispatch(account.login({ username, password, dialog })) },
        singup: (username:string, password:string, email:string) => { dispatch(account.singup({ username, password, email, dialog })) },
        logout:() => { dispatch(account.logout({ dialog })) },
        hasFlag: (...flags:number[]) => {
            if(!state.isLoggedIn || state.loading) {
                return false;
            } 
            return flags.every(flag => hasFlag(state.data.flags, flag));
        },
        anyFlag: (...flags:number[]) => {
            if(!state.isLoggedIn || state.loading) {
                return false;
            }
            return flags.some(flag => hasFlag(state.data.flags, flag));
        }
    }
    
    return profile;
}


