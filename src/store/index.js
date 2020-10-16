import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleware = [sagaMiddleware];

const composedMiddlewares = process.env.NODE_ENV !== 'production'
  ? compose(applyMiddleware(...middleware), console.tron.createEnhancer())
  : compose(applyMiddleware(...middleware));

const store = createStore(reducers, composedMiddlewares);

sagaMiddleware.run(sagas);

export default store;
