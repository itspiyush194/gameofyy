import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import Marquee from "../Components/Marquee";
import Action from "../Components/Categories/Action";
import Adventure from "../Components/Categories/Adventure";
import Funny from "../Components/Categories/Funny";
import Mindgames from "../Components/Categories/Mindgames";
import Puzzle from "../Components/Categories/Puzzle";

const Home = () => {
  const navigate = useNavigate();

  const savedUser = Cookies.get("username");
  const savedPass = Cookies.get("password");
  const isAuth = Cookies.get("isAuthenticated");

  console.log(isAuth,savedPass,savedUser)

  // useEffect(() => {
   

  //   // If not authenticated or credentials are wrong, redirect to login
  //   if (
  //     !isAuth ||
  //     savedUser !== "Piyush" ||
  //     savedPass !== "12345"
  //   ) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <>
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div
        id="main"
        className="main h-[100vh] md:h-[95vh] w-full bg-black text-white"
      >
        <Nav />
        <Hero />
      </div>

      {/* Marquee */}
      <div className="h-[8vh] w-full bg-black flex justify-center items-center">
        <Marquee />
      </div>

      {/* Cards Section */}
      <div id="cardsec" className="bg-black py-6 px-4 md:px-10">
        <div
          id="Action"
          className="text-white "
        >
          <h1 className="border-l-4 border-orange-500 text-xl md:text-2xl pl-4 py-2 font-orbitron">
            Action
          </h1>
        </div>
        <div className="actioncards">
          <Action />
        </div>
      </div>

      <div id="cardsec" className="bg-black py-6 px-4 md:px-10">
        <div
          id="Adventure"
          className="text-white flex justify-between items-center mb-4"
        >
          <h1 className="border-l-4 border-orange-500 text-xl md:text-2xl pl-4 py-2 font-orbitron">
            Adventure
          </h1>
        </div>
        <div className="actioncards">
          <Adventure />
        </div>
      </div>

      <div id="cardsec" className="bg-black py-6 px-4 md:px-10">
        <div
          id="Funny"
          className="text-white flex justify-between items-center mb-4"
        >
          <h1 className="border-l-4 border-orange-500 text-xl md:text-2xl pl-4 py-2 font-orbitron">
            Funny
          </h1>
        </div>
        <div className="actioncards">
          <Funny />
        </div>
      </div>

      <div id="cardsec" className="bg-black py-6 px-4 md:px-10">
        <div
          id="MindGames"
          className="text-white flex justify-between items-center mb-4"
        >
          <h1 className="border-l-4 border-orange-500 text-xl md:text-2xl pl-4 py-2 font-orbitron">
            Mind Games
          </h1>
        </div>
        <div className="actioncards">
          <Mindgames />
        </div>
      </div>

      <div id="cardsec" className="bg-black py-6 px-4 md:px-10">
        <div
          id="Puzzle"
          className="text-white flex justify-between items-center mb-4"
        >
          <h1 className="border-l-4 border-orange-500 text-xl md:text-2xl pl-4 py-2 font-orbitron">
            Puzzle
          </h1>
        </div>
        <div className="actioncards">
          <Puzzle />
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
