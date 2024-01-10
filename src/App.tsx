import React from 'react'; 
import './App.scss';
import { Layout } from './Components/Layout/Layout';

const App:React.FC = () => <Layout
  className='App'
  theme='app'
  template={{
    header: <p>Header</p>,
    main: <p>Main</p>,
    footer: <p>Footer</p>,
  }}
/>

export default App;
