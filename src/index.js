import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
/**
 * Resources
 */
import { injectGlobal } from 'styled-components';
import { globalStyles } from './components/Layout';

/**
 * Redux
 */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

injectGlobal`${globalStyles}`;

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
