// src/Components/AuthForm.jsx
import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { login } from "./Api";
import { AuthContext } from "./Auth-context";
import { message } from "antd";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }); // Attempt login

      const data = await response.json();
      console.log(data);
      auth.login(data.userId, data.token, data.email, data.role);
      message.success("Logged in successfully");
      navigate("/admin"); // Redirect to admin page upon successful login
    } catch (err) {
      setError("Invalid login credentials."); // Display error if login fails
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="max-w-xs p-4 border rounded bg-white">
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your woxsen.edu.in email"
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        </form>
        {error && <p className="mt-2 text-red-500 text-center">{error}</p>}{" "}
        {/* Display error if login fails */}
      </div>
    </div>
  );
}

export default AuthForm;
