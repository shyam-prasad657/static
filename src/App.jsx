import { useState } from 'react'
import './App.css'
import Nav from './components/navbar'
import Home from './pages/home'

function App() {

  return (
    <>
    <header>
      <Nav />
    </header>
    <main>
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />
    </main>
    </>
  )
}

export default App
