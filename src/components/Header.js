import { Segment, Image } from "semantic-ui-react";
import logo from "../img/ured-za-hadz-logo.png";

const HeaderComp = () => {
  return (
    <Segment padded='mini'>
      <Image src={logo} size='large' centered />
    </Segment>
  );
};

export default HeaderComp;
