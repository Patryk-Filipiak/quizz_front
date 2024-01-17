import ReactDOM from 'react-dom/client';
import App from './App';  
import './index.scss';
import { Provider } from "react-redux";
import { store } from './State/store';
import { DialogProvider } from './Context/Dialog.context';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <Provider store={store}>
    <DialogProvider>
      <App />
    </DialogProvider>
  </Provider>
); 