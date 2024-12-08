import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/sidebar/Menu";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="container-grid">
      <Menu />
      <div className="main">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
