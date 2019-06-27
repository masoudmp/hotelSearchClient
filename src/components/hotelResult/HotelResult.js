import React from "react";
import HotelCard from "../../components/hotelCard/HotelCard.js";
import "./hotelResult.css";

const HotelResult = props => {
  const hotels = [...props.hotels];

  const listHotels = hotels.map((hotel, index) => (
    <HotelCard
      key={index}
      name={hotel.name}
      price={`${hotel.price.total} ${hotel.price.currency}`}
      phone={hotel.contact ? hotel.contact.phone : ""}
      address={`${
        hotel.address.cityName ? hotel.address.cityName : ""
      } ${hotel.address.lines.join(" ")},${
        hotel.address.postalCode ? hotel.address.postalCode : ""
      }`}
    />
  ));

  return <div className="hcontainer">{listHotels}</div>;
};

export default HotelResult;
