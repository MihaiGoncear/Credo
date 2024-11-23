import { combineReducers, configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";

const rootReducer = combineReducers({
    language: languageSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
