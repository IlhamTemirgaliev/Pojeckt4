import { useState } from "react";
import reactLogo from "./assets/Logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">

      
      <img src={reactLogo} alt="logo" />
    </div>
  );
}

export default App;
