import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { dashboardReducer, userReducer } from './reducers';
import initSagas from './initSagas';

const getStore = () => {
  const reducers = combineReducers({
    dashboard: dashboardReducer,
    user: userReducer
  });

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(reducers, composeEnhancers(...enhancers));

  initSagas(sagaMiddleware);

  return store;
};

export default getStore;
