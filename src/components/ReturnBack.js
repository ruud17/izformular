import React from "react";
import { Button } from "semantic-ui-react";

const ReturnBack = ({ backToHome }) => {
  return (
    <div className='return-back-btn '>
      <Button
        basic
        color='blue'
        compact
        icon='left chevron'
        content='Nazad na početak'
        onClick={backToHome}
      />
    </div>
  );
};

export default ReturnBack;
