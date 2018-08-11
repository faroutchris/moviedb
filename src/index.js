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
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers';
import rootSaga from './sagas';

injectGlobal`${globalStyles}`;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
