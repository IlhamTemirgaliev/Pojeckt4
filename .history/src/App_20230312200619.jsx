import { useState } from "react";
import reactLogo from "./assets/Logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={reactLogo} alt="logo" />
        </div>
       <nav>
          <a className="nav-1" href=""> Каталог </a>
          <a  className="nav-1" href=""> Акций </a>
          <a  className="nav-1" href=""> Контакты </a>
       </nav>
      </div>
    </div>
  );
}

export default App;
