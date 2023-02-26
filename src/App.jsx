import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/global.css'

function App() {
  const [count, setCount] = useState(0)

        
  return (
    <div className="flex flex-col justify-between items-center py-24 w-full">
      <h1 className='text-xl'>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        MORE ONE
      </button>
    </div>
  )
}

export default App
