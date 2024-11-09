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


  const [users, setUsers] = useState([]);

  const addUserCard = (data) => {
    setUsers([...users, data]);
  };

  const deleteUserCard = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };


  return (
    <AuthProvider>
    <div className='w-full overflow-hidden h-fit'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/CoreMembers' element={<CoreMembers />} />
          <Route path='/ExecutiveMembers' element={<ExecutiveMembers users={users} />} />
          <Route path='/Collaborate' element={<Collaborate />} />
          <Route path='/Form' element={<Form />} />
          <Route path='/auth' element={<AuthForm />} />
          <Route
            path='/admin'
            element={<AdminDashboard users={users} addUserCard={addUserCard} deleteUserCard={deleteUserCard} />}
          />
        </Routes>
    </div>
    </AuthProvider>
  )
}

export default App
