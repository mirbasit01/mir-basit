import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Clients from './section/Clients'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Experience from './section/Experience'
 
const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
    
  )
}

export default App