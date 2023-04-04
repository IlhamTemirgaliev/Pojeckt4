import "./App.css";
import CardsBlock from "./components/CardsBlock/CardsBlock";
import reactLogo from "./assets/Logo.png";
import NavContact from "./components/NavContact/NavContact";
import Nav from "./components/Nav/Nav";
import "swiper/css";
import { Slider } from "./components/Slider/Slider";
import { HeaderCard } from "./components/HeaderCard/HeaderCard";
import { Certificat } from "./components/Certificat/Certificat";
import { SliderTo } from "./components/SliderTo/SliderTo";
import { ToglleBar } from "./components/ToglleBar/ToglleBar";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img className="logo1" src={reactLogo} alt="logo" />
        </div>
        <Nav />
        <NavContact />
      </div>
      <Slider />
      <HeaderCard />
      <CardsBlock />
      <SliderTo />
      <Certificat />
      <ToglleBar />
    </div>
  );
}

export default App;
