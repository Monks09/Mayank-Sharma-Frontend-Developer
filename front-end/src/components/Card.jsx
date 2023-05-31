import React from "react";
import capsuleImg from "../assets/capsule_image.jpeg";

function Card({ capsule_serial, status, type, reuse_count, makeActive }) {
  return (
    <div className="capsule-card" onClick={() => makeActive(capsule_serial)}>
      <img src={capsuleImg} alt="capsule" />
      <div>
        <p>Capsule Serial: {capsule_serial}</p>
        <p>Status: {status}</p>
        <p>Type: {type}</p>
        <p>Reuse Count: {reuse_count}</p>
      </div>
    </div>
  );
}

export default Card;
