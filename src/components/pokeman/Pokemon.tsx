import { useGetPokemonByNameQuery } from "../../services/pokemonApiSlice"

interface Prop {
  name: string
  pollingInterval: number
}

const PokemonPage = ({ name, pollingInterval = 3000 }: Prop) => {
  const {
    data: pokeman,
    isLoading,
    isFetching,
    isError,
  } = useGetPokemonByNameQuery(name, {
    pollingInterval,
  })
  // Polling gives you the ability to have a 'real-time' effect by causing a query to run at a specified interval.
  // https://redux-toolkit.js.org/rtk-query/usage/polling#polling-overview

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (isError) {
    return <h3>Oop! Something went wrong.</h3>
  }

  return (
    <div>
      <h3>
        {pokeman?.species.name} {isFetching ? "..." : ""}
      </h3>
      <img src={pokeman?.sprites.front_shiny} alt={pokeman?.species.name} />
    </div>
  )
}

export default PokemonPage
