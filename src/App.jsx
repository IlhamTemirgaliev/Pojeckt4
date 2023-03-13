import reactLogo from "./assets/Logo.png";
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
