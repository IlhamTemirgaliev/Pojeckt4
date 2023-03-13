import { useState } from "react";
import reactLogo from "./assets/Logo.png";
import "./App.css";

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

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
        <div>
          <span>+7 (999) 123-45-67</span>
        </div>
      </div>
    </div>
  );
}

export default App;
