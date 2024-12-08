import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/sidebar/Menu";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [showMenu, setShowMenu] = React.useState(true);
  return (
    <div className="container-grid">
      <Menu show={showMenu} />
      <div className="main">
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <Dashboard show={showMenu} />
      </div>
    </div>
  );
}

export default App;
