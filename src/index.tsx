import ReactDOM from 'react-dom/client'; 
import { Provider } from "react-redux";
import { store } from './State/store';
import { AppProvider, useAppContext } from './Context/AppContext'; 
import { Layout } from './Components/Layout/Layout'; 
import './Styles/index.scss';
import { BrowserRouter } from "react-router-dom"; 

export const AppLayout = () => {
  const context = useAppContext(); 
  return <Layout context={context } />
}

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </BrowserRouter>
  </Provider>
); 