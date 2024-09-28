import React from 'react'
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import Slider from './Components/slider';


const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <Slider/>
      <Footer/>
    </div>
  )
}

export default App
