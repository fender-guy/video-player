import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import './index.css';
import {App} from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
