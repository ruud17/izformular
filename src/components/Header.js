import { Header, Image } from "semantic-ui-react";
import logo from "../img/hadz-umra.jpg";

const HeaderComp = () => {
  return (
    <Header as='h1' dividing textAlign='center'>
      <Image src={logo} size='massive' textAlign='center' />
      <Header.Content>
        Rijaset IZ u BiH
        <Header.Subheader>Ured za hadž i umru</Header.Subheader>
      </Header.Content>
    </Header>
  );
};

export default HeaderComp;
