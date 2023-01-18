import React from 'react'
import { Navbar } from './components'
import { About, Footer, Header, Projects, Skills } from './containers'
const App = () => {
  return (
    <div className=' bg-portprimary mx-auto min-h-screen flex flex-col text-gray-400' >
        <Navbar/>
        {/* <About /> */}
        <Header />
        <Skills />
        <Projects />
        <Footer />
    </div>
  )
}

export default App