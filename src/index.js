import React from 'react';
import ReactDOM from 'react-dom';
import { ParamsItemContext } from './context/paramsContext';
import './index.css';
import { Root } from './Root';

ReactDOM.render(
  <React.StrictMode>
    <ParamsItemContext>
      <Root />
    </ParamsItemContext>
  </React.StrictMode>,
  document.getElementById('root')
);

