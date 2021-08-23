import { useGetKanyeQuery } from "../services/kanyeApiSlice"

const KanyePage = () => {
  const { data, isFetching, isError, refetch } = useGetKanyeQuery()

  return (
    <>
      <h2>Generate random Kanye West quote</h2>

      {isFetching && <p>Loading...</p>}

      {data && <p>{data.quote}</p>}
      {/* I'm a creative genius */}

      {isError && <p>Oops, something went wrong</p>}

      <div>
        <button onClick={refetch} disabled={isFetching}>
          {isFetching ? "Loading" : "Generate Kanye Quote"}
        </button>
      </div>
    </>
  )
}

export default KanyePage
