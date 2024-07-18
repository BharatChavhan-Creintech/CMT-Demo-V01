import React, { useState } from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import HomeRoute from "./Routes/Home/HomeRoute";
import Dashboard from "./Dashboard/Dashboard";
import { useToggle } from "./context/ToggleContext";
function App() {
  const {isToggled2} = useToggle()

  console.log("APP",isToggled2)

  return <>{isToggled2 ? <HomeRoute /> : <Dashboard/>}</>;
}

export default App;
