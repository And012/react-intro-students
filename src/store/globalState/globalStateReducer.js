import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: 'Artur',
    history: ['Artur'],
}
export const globalStateReducer = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        changeName: (state, {payload}) => {
            state.name = payload
            state.history = [...state.history, payload]
        },
        setInitialName: (state) => {
            state.name = initialState.name
        },
    },
})
const anotherStateSlice = createSlice({
    name: 'anotherState',
    initialState: {
        isOpenNavBar: false,
    },
    reducers: {
        changeNavBarOpen: (state) => {
            state.isOpenNavBar = !state.isOpenNavBar
        }
    }
})

export default globalStateReducer.reducer
const {changeName, setInitialName} = globalStateReducer.actions;
const anotherSliceReducer = anotherStateSlice.reducer
export { changeName, setInitialName, anotherSliceReducer}