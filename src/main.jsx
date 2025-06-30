import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </Router>
  </Provider>
);
