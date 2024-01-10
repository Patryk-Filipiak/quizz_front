import { Layout } from './Components/Layout/Layout';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Footer } from './Components/Footer/Footer';
import './App.scss';

const App:React.FC = () => <Layout
  className='App'
  theme='app'
  template={{
    header: <Header 
    
    />,

    main: <Main 
    
    />,

    footer: <Footer 
    
    />,
  }}
/>

export default App;
