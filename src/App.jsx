import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cookies from "js-cookie";
import ActionGames from "./Components/Games/ActionGames";
import AdventureGames from "./Components/Games/AdventureGames";

import Funnygmes from "./Components/Games/Funnygmes";
import PuzzleGames from "./Components/Games/PuzzleGames";
import Mind from "./Components/Games/Mind";

const App = () => {
  const isAuthenticated = Cookies.get("isAuthenticated");

  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={ <Home />} />
      <Route path="/action" element={ <ActionGames />} />
      <Route path="/adventure" element={ <AdventureGames/>} />
      <Route path="/funny" element={ <Funnygmes />} />
      <Route path="/mind" element={ <Mind />} />
      <Route path="/puzzle" element={ <PuzzleGames />} />
    </Routes>
  );
};

export default App;
