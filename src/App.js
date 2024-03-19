import "./style/landing.css"
import NavigasiBar from "./components/NavigasiBar";
import HeroSection from "./components/HeroSection"
import TrendingMovie from "./components/TrendingMovie";
import Popular from "./components/Popular";
import SuperHero from "./components/SuperHero";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="Body">
      <NavigasiBar/>
      <HeroSection/>
      <TrendingMovie/>
      <Popular/>
      <SuperHero/>
      <Footer/>
    </div>
  );
}

export default App;
