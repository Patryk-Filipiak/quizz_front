import { Layout } from './Components/Layout/Layout';
import { Header } from './Components/Header/Header';
import { MainContent } from './Components/MainContent/MainContent';
import { Footer } from './Components/Footer/Footer';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

const App:React.FC = () => (
  <BrowserRouter>
    <Layout
    className='App'
    theme='app'
    template={{
      header: <Header />,

      main: <MainContent />,
      
      footer: <Footer />,
    }}
  />
  </BrowserRouter>
);

export default App;
