import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../services/counterSlice"
import { dogApiSlice } from "../services/dogsApiSlice"
import { usersApiSlice } from "../services/usersApiSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogApiSlice.reducerPath]: dogApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(dogApiSlice.middleware)
      .concat(usersApiSlice.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
