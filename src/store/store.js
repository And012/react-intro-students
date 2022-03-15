import {combineReducers} from "redux";
import globalStateReducer, {anotherSliceReducer} from "./globalState/globalStateReducer";
import {configureStore} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    globalState: globalStateReducer,
    anotherState: anotherSliceReducer,
})

export const store = configureStore({
    reducer: rootReducer,
});