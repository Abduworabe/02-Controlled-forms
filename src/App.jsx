import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledForm from './ControlledForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <ControlledForm/>
    </>
  )
}

export default App
