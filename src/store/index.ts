import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

const store = createStore(rootReducer, composedEnhancers)

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
