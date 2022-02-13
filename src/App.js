import React, { useState } from "react";
import FooterComp from "./components/Footer";
import FormComp from "./components/Form";
import HeaderComp from "./components/Header";
import "./App.css";
import LandingComp from "./components/Landing";

const App = () => {
  const [travelType, setTravelType] = useState();
  return (
    <div className='wrapper'>
      <HeaderComp />
      {travelType ? (
        <FormComp travelType={travelType} />
      ) : (
        <LandingComp onClickTravelType={setTravelType} />
      )}
      <FooterComp />
    </div>
  );
};

export default App;
