import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  
  useEffect(() => {
    const savedUser = Cookies.get("username");
    const savedPass = Cookies.get("password");
    const isAuth = Cookies.get("isAuthenticated");

    if (isAuth && savedUser === "Piyush" && savedPass === "12345") {
      navigate("/home");
    } else {
      // setLoading(false); 
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === "Piyush" && password === "12345") {
      Cookies.set("isAuthenticated", true, { expires: 1 });
      Cookies.set("username", username, { expires: 1 });
      Cookies.set("password", password, { expires: 1 });

      console.log(username,password)
      navigate("/home");

    } else {
      alert("Invalid username or password");
    }
  };

  // if (loading) return null; 

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-orange-500 text-center">
          Login
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-6 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
        onClick={(e)=>handleLogin(e)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
