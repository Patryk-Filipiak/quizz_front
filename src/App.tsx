
import './App.scss';
import { Layout } from './Components/Layout/Layout';
import { Header } from './Components/Header/Header'; 
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';   
import { AppRouter } from './Routers/AppRouter'; 
import { Dialogs } from './Components/Dialogs/Dialogs';

const App:React.FC = () => {
  return (
    <BrowserRouter>
        <Layout
          className='App'
          theme='app' 
        >
          <Header />
          <AppRouter /> 
          <Dialogs />
          <Footer />
        </Layout>
    </BrowserRouter>
  );
  
}
export default App;
