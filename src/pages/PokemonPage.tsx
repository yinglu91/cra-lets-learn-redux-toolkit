import Pokemon from "../components/pokeman/Pokemon"
import { useState } from "react"

const pokemonList = ["bulbasaur", "pikachu", "ditto", "bulbasaur"]

const PokemonPage = () => {
  const [pollingInterval, setPollingInterval] = useState(0)

  // const onChangeHandler = (e: React.ChangeEventHandler) => setPollingInterval(Number(e.target.value))
  return (
    <div>
      <select onChange={(e) => setPollingInterval(Number(e.target.value))}>
        <option value={0}>Off</option>
        <option value={1000}>1 second</option>
        <option value={3000}>3 seconds</option>
        <option value={5000}>5 seconds</option>
      </select>

      <div>
        {pokemonList.map((poke, index) => (
          <Pokemon key={index} name={poke} pollingInterval={pollingInterval} />
        ))}
      </div>
    </div>
  )
}

export default PokemonPage
