import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface PokemonType {
  id: string
  species: { name: string }
  sprites: {
    front_shiny: string
  }
}

export const pokemonApiSlice = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),

  endpoints(builder) {
    return {
      getPokemonByName: builder.query<PokemonType, string | void>({
        query: (name = "ditto") => {
          return `pokemon/${name}`
        },
      }),
    }
  },
})

// https://pokeapi.co/api/v2/pokemon/ditto
export const { useGetPokemonByNameQuery } = pokemonApiSlice

// https://pokeapi.co/docs/v2
