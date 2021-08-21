import Counter from "./components/Counter"
import Dogs from "./components/Dogs"
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter />
        <Dogs />
      </header>
    </div>
  )
}

export default App
