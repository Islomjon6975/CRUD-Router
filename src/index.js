import React from 'react';
import ReactDOM from 'react-dom';
import { DataItemContext } from './context/data';
import { ParamsItemContext } from './context/paramsContext';
import './index.css';
import { Root } from './Root';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ParamsItemContext>
      <DataItemContext>
        <Root />
      </DataItemContext>
    </ParamsItemContext>
  </React.StrictMode>,
  document.getElementById('root')
);

