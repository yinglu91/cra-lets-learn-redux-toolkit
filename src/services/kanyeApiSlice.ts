import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Kanye {
  quote: string
}

export const kanyeApiSlice = createApi({
  reducerPath: "kanye",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kanye.rest",
  }),
  endpoints(builder) {
    return {
      getKanye: builder.query<Kanye, void>({
        query() {
          return `/`
        },
      }),
    }
  },
})

export const { useGetKanyeQuery } = kanyeApiSlice
