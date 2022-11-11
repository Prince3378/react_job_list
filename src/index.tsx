import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { api } from './api/generalApi';
import App from './App';

import { LocProvider } from './context/ReactContext';
import './index.css';

ReactDOM.render(
  <ApiProvider api={api}>
    <Router>
      <LocProvider>
        <App />
      </LocProvider>
    </Router>
  </ApiProvider>,

  document.getElementById('root'),
);
