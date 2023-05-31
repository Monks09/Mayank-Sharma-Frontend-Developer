import React from "react";

function Card({ capsule_id, capsule_serial, details }) {
  return (
    <div className="capsule-card">
      <h3>Capsule Id: {capsule_id}</h3>
      <h3>Capsule Serial: {capsule_serial}</h3>
      <h3>Details: {details}</h3>
    </div>
  );
}

export default Card;
