import { useState } from 'react'
import Timer from "./Timer"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Timer />
    </main>
  )
}

export default App
