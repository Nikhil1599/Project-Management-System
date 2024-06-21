import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AuthSlice from "./AuthSlice";

const rootReducer = combineReducers({
  auth: AuthSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
