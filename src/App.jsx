import { useState } from 'react'
import './App.css'
import Nav from './components/navbar'
import Home from './pages/home'
import Content from './pages/content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Nav />
    </header>
    <main>
      <Home />
      <Content />
    </main>
    </>
  )
}

export default App
