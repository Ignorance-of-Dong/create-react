import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
const store = createStore(RankReducer, applyMiddleware(thunk));
export default store
