import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/navbar'
import Footer from './component/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      
      <Navbar></Navbar>
      <h1>Demo Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count +1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><Footer></Footer>
    </div>
  )
}

export default App
