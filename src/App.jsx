import reactLogo from "./assets/Logo.png";
import "./App.css";
import NavContact from "./components/NavContact/NavContact";
import Nav from "./components/Nav/Nav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Slider } from "./components/Slider/Slider";
import { Container } from "./shared/Container/index";
import { HeaderCard } from "./components/HeaderCard/HeaderCard";

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
    </div>
  );
}

export default App;
