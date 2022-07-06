import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middlewares = [thunk];
const rootReducer = combineReducers({
  ...reducers,
});

const store = createStore(
  rootReducer,
  compose(
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension && process.env.NODE_ENV === "development"
        ? window.devToolsExtension()
        : (f) => f
    )
  )
);

export { store };
