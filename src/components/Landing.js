import React from "react";
import { Button, Card, Icon, Segment, Header } from "semantic-ui-react";
import { travelTypes } from "../constants";

const LandingComp = ({ onClickTravelType }) => {
  return (
    <div className='landing'>
      <Header as='h2' icon textAlign='center' color='grey'>
        <Header.Content className='text'>
          Odaberite da li na hadž putujete kao pojedinac ili kao bračni par
        </Header.Content>
      </Header>
      <div className='btns'>
        <Button
          primary
          size='big'
          onClick={() => onClickTravelType(travelTypes.single)}
        >
          Pojedinac
        </Button>
        <Button
          primary
          size='big'
          onClick={() => onClickTravelType(travelTypes.marriedCouple)}
        >
          Bračni par
        </Button>
      </div>
    </div>
  );
};

export default LandingComp;
