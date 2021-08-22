import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../services/counterSlice"
import { dogApiSlice } from "../services/dogsApiSlice"
import { usersApiSlice } from "../services/usersApiSlice"
import { pokemonApiSlice } from "../services/pokemonApiSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogApiSlice.reducerPath]: dogApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [pokemonApiSlice.reducerPath]: pokemonApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(dogApiSlice.middleware)
      .concat(usersApiSlice.middleware)
      .concat(pokemonApiSlice.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
