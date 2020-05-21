import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authentication/reducer";
import userReducer from "./userData/reducer";
import cartReducer from "./cart/CartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart", "auth"]
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
