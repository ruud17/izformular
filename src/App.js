import React, { useState } from "react";
import FooterComp from "./components/Footer";
import FormComp from "./components/Form";
import HeaderComp from "./components/Header";
import LandingComp from "./components/Landing";
import ReturnBack from "./components/ReturnBack";
import { travelTypes } from "./constants";

const App = () => {
  const [travelType, setTravelType] = useState();

  const renderCompSwitch = () => {
    switch (travelType) {
      case travelTypes.single:
        return (
          <div className='form-main'>
            <ReturnBack backToHome={() => setTravelType()} />
            <FormComp travelType={travelType} formOwner='Pojedinac' />
          </div>
        );
      case travelTypes.marriedCouple:
        return (
          <div className='form-main'>
            <ReturnBack backToHome={() => setTravelType()} />
            <FormComp travelType={travelType} formOwner='Muž' />
            <FormComp travelType={travelType} formOwner='Žena' />
          </div>
        );
      default:
        return (
          <>
            <LandingComp onClickTravelType={setTravelType} />
            <FooterComp />
          </>
        );
    }
  };

  return (
    <div className='wrapper'>
      <HeaderComp />
      {renderCompSwitch()}
    </div>
  );
};

export default App;
