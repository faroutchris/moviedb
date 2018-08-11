import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/app.container';
import registerServiceWorker from './registerServiceWorker';
/**
 * Resources
 */
import { injectGlobal } from 'styled-components';
import { globalStyles } from './components/layout';

injectGlobal`${globalStyles}`;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
