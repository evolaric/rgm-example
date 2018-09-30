import React from "react";
import { InfoWindow } from "react-google-maps";

const InfoWindowComponent = (props) => {
  return (
    <InfoWindow onCloseClick={props.toggleClose} options={{ maxWidth: 320 }}>
      <div>
        <h3>InfoWindow</h3>
        <p>
          A tree needs to be your friend if you're going to paint him. The only
          prerequisite is that it makes you happy. If it makes you happy then
          it's good. I thought today we would do a happy little picture. This
          present moment is perfect simply due to the fact you're experiencing
          it. Work on one thing at a time. Don't get carried away - we have
          plenty of time. I really believe that if you practice enough you could
          paint the 'Mona Lisa' with a two-inch brush.
        </p>
      </div>
    </InfoWindow>
  );
};

export default InfoWindowComponent;