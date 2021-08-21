import { useAppDispatch, useAppSelector } from "../app/hooks"
import { incremented, decremented, amountAdded } from "../services/counterSlice"

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const incrementedHandler = () => {
    const action = incremented()
    console.log("incrementedHandler action=", action) // {type: "counter/incremented"}
    dispatch(action)
  }

  const decrementedHandler = () => {
    dispatch(decremented()) // {type: "counter/decremented"}
  }

  const amountAddedHandler = () => {
    dispatch(amountAdded(10)) // {type: "counter/amountAdded", payload: 10}
  }

  return (
    <p>
      count is: {count} <br />
      <br />
      <button type='button' onClick={incrementedHandler}>
        Increment
      </button>
      <button type='button' onClick={decrementedHandler}>
        Decrement
      </button>
      <button type='button' onClick={amountAddedHandler}>
        Increment by 10
      </button>
    </p>
  )
}

export default Counter
