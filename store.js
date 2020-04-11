import { compose, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
