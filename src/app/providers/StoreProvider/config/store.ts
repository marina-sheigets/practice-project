import { configureStore, Store } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"

export function createReduxStore(
    initialState?: StateSchema
): Store {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: __IS_DEV__
    })
}
