import React from "react";
import { useGlobal } from "../provider/GlobalProvider";

const ReservationList = () => {
  const {reservations} = useGlobal();

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <table className="reservationList">
        <thead>
          <tr>
            <th className="first-element">Placa</th>
            <th>Proprietário</th>
            <th>Num. Apartamento</th>
            <th>Bloco</th>
            <th>Modelo</th>
            <th>Cor</th>
            <th>Num. Vaga</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.plate}</td>
              <td>{reservation.owner}</td>
              <td>{reservation.apartmentNumber}</td>
              <td>{reservation.block}</td>
              <td>{reservation.model}</td>
              <td>{reservation.color}</td>
              <td>{reservation.parkingSpot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
