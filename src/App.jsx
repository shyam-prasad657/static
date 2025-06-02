import { useState } from 'react'
import './App.css'
import Nav from './components/navbar'
import Home from './pages/home'
import Content from './pages/content'
import Footer from './pages/footer'

function App() {

  return (
    <>
    <header>
      <Nav />
    </header>
    <main>
      <Home />
      <Content />
    </main>
    <Footer />
    </>
  )
}

export default App
