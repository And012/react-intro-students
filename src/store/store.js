import {combineReducers} from "redux";
import globalStateReducer, {anotherSliceReducer} from "./globalState/globalStateReducer";
import {configureStore, createSlice} from "@reduxjs/toolkit";
const thirdStateSlice = createSlice({
    name: 'thirdState',
    initialState: {
        lastName: 'Tsarukyan',
    },
    reducers: {
        method: (state, action) => {
            // action => {type: 'thirdState/method', paylod }
        }
    },
})

export const rootReducer = combineReducers({
    globalState: globalStateReducer,
    anotherState: anotherSliceReducer,
    thirdState: thirdStateSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
});
window.store = store