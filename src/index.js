import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.container';
import registerServiceWorker from './registerServiceWorker';

/**
 * Resources
 */
import { injectGlobal } from 'styled-components';
import { globalStyles } from './components/layout';

dotenv.config();

injectGlobal`${globalStyles}`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
