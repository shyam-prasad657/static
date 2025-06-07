import { useState } from 'react'
import './App.css'
import Nav from './components/navbar'
import Home from './pages/home'
import Content from './pages/content'
import Footer from './pages/footer'
import Count from './pages/count'
import CarouselComponent from './pages/carousel'
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/about'

function App() {

  return (
    <>
    <HashRouter>
    <header>
      <Nav />
    </header>
    <main>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '*' element={<Navigate to = '/' replace />} />
        <Route path = '/about' element = {<About />} />
      </Routes>
    </main>
    <Footer />
    </HashRouter>
    </>
  )
}

export default App
