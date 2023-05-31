import React, { useState, useEffect } from "react";
import Card from "./Card";

function Grid(props) {
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    fetchCapsulesData();
  }, []);

  const fetchCapsulesData = async () => {
    let res = await fetch(`http://localhost:3030/capsules`);
    let data = await res.json();
    console.log(data);
    setCapsules(data.capsules);
  };

  return (
    <div className="capsules-grid">
      {capsules.map((el) => {
        return <Card key={el.capsule_serial} {...el} />;
      })}
    </div>
  );
}

export default Grid;
