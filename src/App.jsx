import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Testing page</h1>
      <button>Click here</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> welcome to the world
        </p>
      </div>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia iusto nulla quo illo cum dolorem, laboriosam nemo amet reiciendis velit inventore, voluptatibus deserunt doloribus id voluptates harum at quaerat facere atque iste! Blanditiis deserunt error temporibus? Expedita unde, eveniet ad dolorem aut qui asperiores dolore minima cum, ratione eum!
      </p>
    </>
  )
}

export default App
