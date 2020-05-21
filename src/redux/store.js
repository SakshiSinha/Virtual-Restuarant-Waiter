import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
// import authReducer from "./authentication/reducer";
// import userReducer from "./userData/reducer";
// import cartReducer from "./cart/CartReducer";
import rootReducer from "./rootReducer";
// const rootReducer = combineReducers({ authReducer, userReducer, cartReducer });

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);

export default { store, persistor };
