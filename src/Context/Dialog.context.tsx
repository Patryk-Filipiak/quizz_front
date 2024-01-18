import React, { ReactNode, useState } from 'react';  
import { DialogContextInterface, Toast } from './Dialog.types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../State/store';



export const DialogContext = React.createContext<DialogContextInterface | null>(null);

export const DialogProvider = ({ children }: {
    children: React.ReactNode;
}) => { 
 
  const [toastList, setToastList] = useState<Toast[]>([]);
  const [popup, setPopup] = useState<ReactNode | null>(null);
  const dispatch = useDispatch<AppDispatch>(); 
  
  return (
    <DialogContext.Provider value={{ 
      toasts: toastList,
      popup: popup,
      account: useSelector((state:RootState) => state.account),
      
      showToast: (content: string | ReactNode, time:number = 3000) => {
        const id = String(Date.now() + Math.random());
        const toast:Toast = { 
          id,
          content: content,
        } 
        setToastList(list => [toast, ...list]);
        setTimeout(() =>  setToastList(list => list.filter((toast) => toast.id !== id)), time);
      },

      showPopup: (content: ReactNode) => {

      },

      dispatch: dispatch,
  
  }}
    >
      {children}
    </DialogContext.Provider>
  );
};