import './App.css';
import{Route, Routes} from "react-router-dom";
import NavBar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CitiesRegions from "./components/MainHome/CitiesRegions/CitiesRegions";
import Explore from "./components/Explore/Explore";
import MyTravel from "./components/MyTravel/MyTravel";
import Itinerary from "./components/Itinerary/Itinerary";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
     
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={< About/>}></Route>
        <Route path="/city-region/:country/" element={<CitiesRegions/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/my-travel/:country/:city" element={<MyTravel/>}></Route>
        <Route path="/explore/:country/:city" element={<Explore />}></Route>
        <Route path="/itinerary" element={<Itinerary />}></Route>
      </Routes>
     <Footer/> 
    </>
  )
}

export default App
