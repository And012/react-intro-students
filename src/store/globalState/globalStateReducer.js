import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import backend from "../backend";

const initialState = {
    name: 'Artur',
    history: ['Artur'],
    jwt: null,
}
export const Login = createAsyncThunk(
    'globalState/Login',
    async (data, thunkAPI) => {
        try {
            const result = await backend(data)
            return result
        } catch(err) {
            return thunkAPI.rejectWithValue('')
        }
    }
)
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
        setJwt: (state, {payload}) => {
            state.jwt = payload
        },
        removeJwt: (state) => {
            state.jwt = null
        },
    },
    extraReducers: {
        [Login.fulfilled]: (state, {payload}) => {
            state.jwt = payload
        },
        [Login.pending]: (state) => {

        },
        [Login.rejected]: (state, {payload}) => {

        }
    }
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
export const {changeName, setInitialName, setJwt, removeJwt} = globalStateReducer.actions;
export const anotherSliceReducer = anotherStateSlice.reducer
// export { changeName, setInitialName, anotherSliceReducer,setJwt, removeJwt }