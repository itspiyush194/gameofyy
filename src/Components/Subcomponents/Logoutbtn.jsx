import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Logoutbtn = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove cookies
    Cookies.remove("username");
    Cookies.remove("password");
    Cookies.remove("isAuthenticated");

    // Redirect to login page
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-orange-600 text-xs  md:text-xl px-4 py-2 rounded-sm hover:cursor-pointer hover:bg-orange-500"
      >
        Log out
      </button>
    </div>
  );
};

export default Logoutbtn;
