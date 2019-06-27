import http from "./httpService";

export default function getHotels(code, checkIn, checkOut) {
  return http.get(
    `api/v1/hotels?checkin=${checkIn}&checkout=${checkOut}&code=${code}`
  );
}
