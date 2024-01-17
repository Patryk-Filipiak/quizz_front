/* eslint-disable react-hooks/exhaustive-deps */

import './App.scss'; 
import { Header } from './Components/Header/Header'; 
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';   
import { AppRouter } from './Routers/AppRouter'; 
import { Dialogs } from './Components/Dialogs/Dialogs';
import { checkIsLoggedIn } from './State/account/accountSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './State/store';
import { useEffect } from 'react'; 

const App:React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(checkIsLoggedIn())
  }, []);
  
  return (
    <main className='App'>
      <BrowserRouter>
        <Header className="App__header" />
        <AppRouter className="App__content" /> 
        <Dialogs className="App__dialogs" />
        <Footer className="App__footer" />
      </BrowserRouter>
    </main> 
  );
}
export default App;
