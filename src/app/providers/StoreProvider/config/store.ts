import {
    configureStore,
    ReducersMapObject,
    Store
} from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { userReducer } from "@/entities/User"
import { loginReducer } from "@/features/AuthByUsername"

export function createReduxStore(
    initialState?: StateSchema
): Store {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        login: loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__
    })
}
