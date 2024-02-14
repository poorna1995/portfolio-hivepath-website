import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userSlice from "./user/userSlice";

export const rootReducer = combineReducers({
  user: userSlice,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export default persistReducer(configStorage, rootReducer);
