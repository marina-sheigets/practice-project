import {
    configureStore,
    ReducersMapObject,
    Store
} from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { userReducer } from "@/entities/User"

export function createReduxStore(
    initialState?: StateSchema
): Store {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__
    })
}
