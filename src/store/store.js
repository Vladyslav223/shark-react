import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createRootReducer } from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const history = createBrowserHistory();

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
      )
    )
  );
  return store;
}
