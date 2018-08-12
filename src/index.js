import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import {appHistory} from "./history";
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
  <Router history={appHistory}>
      <Provider store={store}>
          <App />
      </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
