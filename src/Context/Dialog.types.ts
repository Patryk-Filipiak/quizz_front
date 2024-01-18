import { ReactNode } from "react";  
import { AppDispatch } from "../State/store";
import { AccountState } from "../State/account/types";

export interface Toast {
    id: string;
    content: string | ReactNode;
  }
  
  export interface DialogContextInterface { 
    toasts: Toast[];
    popup: (ReactNode | null);
    showToast: (message: string | ReactNode, time?:number) => void;
    showPopup: (content: ReactNode) => void;
    dispatch: AppDispatch;
    account: AccountState;
  }