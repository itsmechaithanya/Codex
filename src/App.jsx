import Lenis from 'lenis'
import React, { useEffect } from 'react'
import Home from './Components/Home'
import CoreMembers from './Components/CoreMembers'
import ExecutiveMembers from './Components/ExecutiveMembers'
import Collaborate from './Components/Collaborate'
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Events from './Components/Events';


function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Cleanup function to cancel the animation frame
    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className='w-full overflow-hidden h-fit'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Events' element={<Events/>}/>
        <Route path='/CoreMembers' element={<CoreMembers/>}/>
        <Route path='/ExecutiveMembers' element={<ExecutiveMembers/>}/>
        <Route path='/Collaborate' element={<Collaborate/>}/>
      </Routes>
    </div>
  )
}

export default App
