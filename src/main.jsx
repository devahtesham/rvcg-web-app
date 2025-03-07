import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store/index.js"
import { PropertyContextProvider } from './context/PropertyContext.jsx';
import ModalContextProvider from './context/ModalContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <ModalContextProvider>
        <PropertyContextProvider>
          <App />
        </PropertyContextProvider>
      </ModalContextProvider>
    </Provider>
  </BrowserRouter>,
)
