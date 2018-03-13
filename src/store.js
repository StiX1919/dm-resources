import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import user from "./ducks/user";
import resources from "./ducks/resources";

const store = createStore(
  combineReducers({ user, resources }),
  applyMiddleware(promiseMiddleware())
);

export default store;
