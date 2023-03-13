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
          <a className="nav-1" href="">
            Каталог
          </a>
          <a className="nav-1" href="">
            Акций
          </a>
          <a className="nav-1" href="">
            Контакты
          </a>
        </div>
        <div className="contact">
          <span className="num">+7 (999) 123-45-67</span>
          <img src={logo1} alt="logoSub" />
          <img src={logo12} alt="logoSub" />

        </div>
      </div>
    </div>
  );
}

export default App;