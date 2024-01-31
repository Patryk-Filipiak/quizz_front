import { ReactNode } from "react";  
import { AppDispatch } from "../State/store";
import { AccountState } from "../State/account/types";
import { NavigateFunction } from "react-router-dom"; 
import { CategoryState } from "../State/category/types";



export interface Toast { 
  content: string | ReactNode;
}

export interface ProfileInterface {
  state: AccountState,
  login: (username: string, password: string) => void;
  singup: (username: string, password: string, email: string) => void;
  logout: () => void;
  hasFlag: (...flags:number[]) => boolean;
  anyFlag: (...flags:number[]) => boolean;
}

export interface CategoriesInterface {  
  state: CategoryState;
  get: (slug?: string) => void;
  create: (title: string, parentId?: number) => void;
  delete: (categoryId: number) => void;
  
}
  
export interface UseInterface {
  searchParams: URLSearchParams;
  navigate: NavigateFunction;
  dispatch: AppDispatch;
  param: (data:{[key:string]: string}) => void;
  getParam: (name: string) => string | null;
  getParamAll: (name: string) => string[];
}

export interface DialogInterface {
    toast: {
      list: Toast[],
      send: (message: string) => void;
    },
    popup: {
      content: ReactNode | null;
      show: (content: ReactNode) => void;
      cancel: () => void;
    },
}
  
export interface AppContextInterface { 
  dialog: DialogInterface;
  profile: ProfileInterface;
  dispatch: AppDispatch; 
  use: UseInterface;
  categories: CategoriesInterface;
}