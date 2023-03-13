import { useState } from "react";
import reactLogo from "./assets/Logo.png";
import logo1 from "./assets/Subtract.png";
import logo2 from "./assets/insta.png";
import "./App.css";
import NavContact from "./components/NavContact/NavContact";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={reactLogo} alt="logo" />
        </div>
        <Nav />
        <NavContact />
      </div>
    </div>
  );
}

export default App;
