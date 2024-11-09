import Lenis from 'lenis'
import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import CoreMembers from './Components/CoreMembers'
import ExecutiveMembers from './Components/ExecutiveMembers'
import Collaborate from './Components/Collaborate'
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Events from './Components/Events';
import Form from './Components/Form'
import AuthForm from './Components/AuthForm';
import AdminDashboard from './Components/AdminDashboard';
import { AuthProvider } from './utility/AuthContext';



function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);



    const [Users,SetUsers] = useState([])

    const HandleFormSubmitData = (data)=>{
      SetUsers([...Users,[data]])
      console.log(data)
    }

  return (
    <div className='w-full overflow-hidden h-fit'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Events' element={<Events/>}/>
        <Route path='/CoreMembers' element={<CoreMembers/>}/>
        <Route path='/ExecutiveMembers' element={<ExecutiveMembers Users={Users}/>}/>
        <Route path='/Collaborate' element={<Collaborate Users={Users}/>}/>
        <Route path='/Form' element={<Form HandleFormSubmitData={HandleFormSubmitData}/>}/>
        <Route path='/auth' element={<AuthForm />} />
        <Route path='/admin' element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App
