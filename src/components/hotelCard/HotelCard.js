import React from "react";
import "./hotelCard.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

const HotelResult = props => {
  return (
    <MDBCol>
      <MDBCard className="card">
        <MDBCardBody>
          <MDBCardTitle>{props.name}</MDBCardTitle>
          <MDBCardText>{props.price}</MDBCardText>
          <MDBCardText>{`Phone: ${props.phone}`}</MDBCardText>
          <MDBCardText>{props.address}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default HotelResult;
