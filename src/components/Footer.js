import { Segment, Image } from "semantic-ui-react";
import logo from "../img/hadz_i_umra_bw.png";

const FooterComp = () => {
  return (
    <Segment inverted color='black' className='footer'>
      <Image src={logo} size='medium' centered />
      <span className='span'>© 2022 Ured za hadž i umru</span>
    </Segment>
  );
};

export default FooterComp;
