import { ICurrent } from "./../types";
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk-recursion-detect";
import currentReducer from "./reducers/current";
let composeEnhancers;

if (
  process.env.NODE_ENV !== "production" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

export const store = createStore<ICurrent, any, any, any>(
  currentReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
