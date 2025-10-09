import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit"
import { LoginSchema } from "../types/login"

const initialState: LoginSchema = {
    isLoading: false,
    password: "",
    username: ""
}

export const loginSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload
        },
        setIsLoading(
            state,
            action: PayloadAction<boolean>
        ) {
            state.isLoading = action.payload
        },
        setError(
            state,
            action: PayloadAction<string | undefined>
        ) {
            state.error = action.payload
        }
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
