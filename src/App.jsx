import "./App.css";
import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CitiesRegions from "./components/MainHome/CitiesRegions/CitiesRegions";
import Explore from "./components/Explore/Explore";
import MyTravelCity from "./components/MyTravelCity/MyTravelCity";
import MyTravelRegion from "./components/MyTravelRegion/MyTravelRegion";
import Itinerary from "./components/Itinerary/Itinerary";
import MyChoices from "./components/MyChoices/MyChoices";
import Users from "./components/Users/Users";
import Account from "./components/Account/Account";
import Accommodation from "./components/Accommodation/Accommodation";

import { ChoiceContext } from "./Store/context";
import { initialStateChoice, choiceReducer } from "./Store/reducer";
import { ItineraryContext } from "./Store/itinerary/context";
import {
  initialStateItinerary,
  itineraryReducer,
} from "./Store/itinerary/reducer";


function App() {
  const [stateGlobalChoice, dispatchChoice] = useReducer(
    choiceReducer,
    initialStateChoice
  );

  const [stateGlobalItinerary, dispatchItinerary] = useReducer(
    itineraryReducer,
    initialStateItinerary
  );

  const choiceContextValue = {
    stateGlobalChoice,
    dispatchChoice,
  };

  const itineraryContextValue = {
    stateGlobalItinerary,
    dispatchItinerary,
  };

  return (
    <ChoiceContext.Provider value={choiceContextValue}>
       <ItineraryContext.Provider value={itineraryContextValue}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
       
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/city-region/:country/:id"
          element={<CitiesRegions />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/my-travel1/:country/:city/:id"
          element={<MyTravelCity />}
        ></Route>
        <Route
          path="/my-travel2/:country/:region/:id"
          element={<MyTravelRegion />}
        ></Route>
        <Route path="/explore/:country/:city" element={<Explore />}></Route>
        <Route path="/users/:id" element={<Users />} />
        <Route path="/account" element={<Account />}></Route>
        <Route path="/itinerary" element={<Itinerary />}></Route>
        <Route path="/my-choices/:id" element={<MyChoices />}></Route>
        <Route path="/my-choices" element={<MyChoices />}></Route>
        <Route path="/accommodation/:id" element={<Accommodation />} />
      </Routes>
      <Footer />
      </ItineraryContext.Provider>
    </ChoiceContext.Provider>
  );
}

export default App;
