import ReactDOM from 'react-dom/client';
import App from './App';  
import { Provider } from "react-redux";
import { store } from './State/store';
import { DialogProvider } from './Context/Dialog.context'; 
import './Styles/reset.scss';
import './Styles/variables.scss';
import './Styles/fonts.scss';
import './Styles/text.scss';
import './Styles/animations.scss';
import './Styles/mixins.scss'; 

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <Provider store={store}>
    <DialogProvider>
      <App />
    </DialogProvider>
  </Provider>
); 