import { useState } from "react";
import reactLogo from "./assets/Logo.png";
import logo1 from "./assets/Subtract.png";
import logo2 from "./assets/insta.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={reactLogo} alt="logo" />
        </div>
        <div className="nav">
          <Na
         
          <a className="nav-1" href="">
            Акций
          </a>
          <a className="nav-1" href="">
            Контакты
          </a>
        </div>
        <div className="contact">
          <span className="num">+7 (999) 123-45-67</span>
          <a href="https://vk.com">
            <img className="lo" src={logo1} alt="logoSub" />
          </a>
          <a href="https://www.instagram.com/daridushoi/">
            <img className="lo" src={logo2} alt="logoinst" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
