import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: "rom" };

const languageSlice = createSlice({
    name: "alerts",
    initialState,
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
