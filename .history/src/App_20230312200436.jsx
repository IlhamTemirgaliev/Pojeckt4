import { useState } from "react";
import reactLogo from "./assets/Logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <img src={reactLogo} alt="logo" />
        <a сдфы href=""> Каталог </a>
        <a href=""> Акций </a>
        <a href=""> Контакты </a>
      </div>
    </div>
  );
}

export default App;
