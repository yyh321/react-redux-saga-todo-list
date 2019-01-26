import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import reducer from './reducer'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(reducer, enhancer)

sagaMiddleware.run(mySaga)
export default store