/* eslint-disable react-hooks/exhaustive-deps */

import './App.scss';  
import { Header } from './Components/Header/Header'; 
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';   
import { Router } from './Pages/Router'; 
import { Dialogs } from './Components/Dialogs/Dialogs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './State/store';
import { useEffect } from 'react'; 
import account from './State/account/asyncReducers'

const App:React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(account.check())
  }, []);
  
  return (
    <main className='App'>
      <BrowserRouter>
        <Header className="App__header" />
        <Router className="App__content" /> 
        <Dialogs className="App__dialogs" />
        <Footer className="App__footer" />
      </BrowserRouter>
    </main> 
  );
}
export default App;
