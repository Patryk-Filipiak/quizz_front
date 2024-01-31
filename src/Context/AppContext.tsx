import React, { useContext } from 'react';  
import { AppContextInterface } from './types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../State/store'; 
import { useAccount } from './account/useAccount';
import { useDialog } from './useDialog';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCategories } from './categories/useCategories';



export const AppContext = React.createContext<AppContextInterface | null>(null);

export const AppProvider = ({ children }: {
    children: React.ReactNode;
}) => {  
  const [searchParams] = useSearchParams();

  const dialog = useDialog();

  const use = {
    searchParams, 
    navigate: useNavigate(),
    dispatch: useDispatch<AppDispatch>(),
    param: (params: {[key:string]: string}) => {
      const currentParams = new URLSearchParams(window.location.search);
      Object.keys(params).forEach(key => currentParams.set(key, params[key]))
      use.navigate({
          pathname: window.location.pathname,
          search: currentParams.toString()
      });  
    },
    getParam: (name: string) => searchParams.get(name),
    getParamAll: (name: string) => searchParams.getAll(name),
  }

  const profile = useAccount( 
    use.dispatch,
    dialog,
  );


  const categories = useCategories(use.dispatch, dialog);

  const context = {  
    profile,
    dialog,     
    use, 
    dispatch: use.dispatch,
    categories,
}
  
  return (<AppContext.Provider
      value={context}
      children={children} 
    /> );
};

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error('AppContext can be used only in AppProvider!');
  }

  return appContext;
};
