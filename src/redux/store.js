import { combineReducers, configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import tokenSlice from "./slices/tokenSlice";

const rootReducer = combineReducers({
    language: languageSlice,
    token: tokenSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
