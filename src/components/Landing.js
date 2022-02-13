import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import { travelTypes } from "../constants";

const LandingComp = ({ onClickTravelType }) => {
  return (
    <Segment placeholder color='teal' size='big'>
      <Header icon>
        <Icon name='plane' />
        Putujem(o) kao ...
      </Header>
      <Segment.Inline>
        <Button
          color='teal'
          size='huge'
          onClick={() => onClickTravelType(travelTypes.single)}
        >
          Pojedinac
        </Button>
        <Button
          color='teal'
          size='huge'
          onClick={() => onClickTravelType(travelTypes.marriedCouple)}
        >
          Bračni par
        </Button>
      </Segment.Inline>
    </Segment>
  );
};

export default LandingComp;
