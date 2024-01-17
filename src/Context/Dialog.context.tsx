import React, { ReactNode, useState } from 'react';  

interface Toast {
  id: string;
  content: string | ReactNode;
}

interface DialogContextInterface { 
  toasts: Toast[];
  popup: (ReactNode | null);
  showToast: (message: string, time?:number) => void;
  showPopup: (content: ReactNode) => void;

}

export const DialogContext = React.createContext<DialogContextInterface | null>(null);

export const DialogProvider = ({ children }: {
    children: React.ReactNode;
}) => { 
 
  const [toastList, setToastList] = useState<Toast[]>([]);
  const [popup, setPopup] = useState<ReactNode | null>(null);

  return (
    <DialogContext.Provider value={{ 
      toasts: toastList,
      popup: popup,
      showToast: (message: string, time:number = 3000) => {
        const id = String(Date.now() + Math.random());
        const toast:Toast = { 
          id,
          content: message,
        } 
        setToastList(list => [toast, ...list]);
        setTimeout(() =>  setToastList(list => list.filter((toast) => toast.id !== id)), time);
      },
      showPopup: (content: ReactNode) => {

      }
    }}
    >
      {children}
    </DialogContext.Provider>
  );
};