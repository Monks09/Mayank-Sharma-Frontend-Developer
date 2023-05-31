import React from "react";
import capsuleImg from "../assets/capsule_image.jpeg";

function Card({ capsule_serial, status, type, reuse_count, makeActive }) {
  return (
    <div className="capsule-card" onClick={() => makeActive(capsule_serial)}>
      <img src={capsuleImg} alt="capsule" />
      <div>
        <p>
          <b>Capsule Serial:</b> {capsule_serial}
        </p>
        <p>
          <b>Status:</b> {status}
        </p>
        <p>
          <b>Type:</b> {type}
        </p>
        <p>
          <b>Reuse Count:</b> {reuse_count}
        </p>
      </div>
    </div>
  );
}

export default Card;
