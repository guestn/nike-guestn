import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from "./reducers/index";

let middlewares = [];

middlewares.push(thunkMiddleware);

if (process.env.NODE_ENV != 'production') {
  const logger = createLogger();
  middlewares.push(logger);
}

let middleware = applyMiddleware(...middlewares);

if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

const store = createStore(rootReducer, middleware);

export { store };