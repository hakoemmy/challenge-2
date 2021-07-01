import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

ReactDOM.render(
<Provider store={store}>
  <React.StrictMode>
    <Home />
  </React.StrictMode>
 </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
