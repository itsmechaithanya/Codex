import Lenis from "lenis";
import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import CoreMembers from "./Components/CoreMembers";
import ExecutiveMembers from "./Components/ExecutiveMembers";
import Collaborate from "./Components/Collaborate";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Events from "./Components/Events";
import Form from "./Components/Form";
import AuthForm from "./Components/AuthForm";
import AdminDashboard from "./Components/AdminDashboard";
import { AuthContext } from "./Components/Auth-context";
import { useAuth } from "./Components/auth-hook";
import Mentors from "./Components/Mentors";
import Members from "./Components/Members";
import ManageEvents from "./Components/ManageEvents";
import AddMentor from "./Components/AddMentor";
import AddMember from "./Components/AddMember";
import AddEvent from "./Components/AddEvent";

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
  const { login, logout, userId, token, email, role } = useAuth();

  const [users, setUsers] = useState([]);

  const addUserCard = (data) => {
    setUsers([...users, data]);
  };

  const deleteUserCard = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };
  let routes;
  if (role === "Mentor") {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/CoreMembers" element={<CoreMembers />} />
        <Route
          path="/ExecutiveMembers"
          element={<ExecutiveMembers users={users} />}
        />
        <Route path="/Collaborate" element={<Collaborate />} />
        <Route path="/Form" element={<Form />} />
        {/* <Route path="/auth" element={<AuthForm />} /> */}
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/members" element={<Members />} />
        <Route path="/manage/events" element={<ManageEvents />} />
        <Route path="/add/mentor" element={<AddMentor />} />
        <Route path="/edit/mentor/:mentorId" element={<AddMentor />} />
        <Route path="/add/member" element={<AddMember />} />
        <Route path="/edit/member/:memberId" element={<AddMember />} />
        <Route path="/add/event" element={<AddEvent />} />
        <Route path="/edit/event/:eventId" element={<AddEvent />} />
        <Route
          path="/admin"
          element={
            <AdminDashboard
              users={users}
              addUserCard={addUserCard}
              deleteUserCard={deleteUserCard}
            />
          }
        />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/CoreMembers" element={<CoreMembers />} />
        <Route
          path="/ExecutiveMembers"
          element={<ExecutiveMembers users={users} />}
        />
        <Route path="/Collaborate" element={<Collaborate />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        login: login,
        logout: logout,
        userId: userId,
        token: token,
        email: email,
        role: role,
      }}
    >
      <div className="w-full overflow-hidden h-fit">
        <Navbar />
        <main>{routes}</main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
