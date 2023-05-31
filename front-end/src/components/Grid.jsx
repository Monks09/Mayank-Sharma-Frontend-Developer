import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchCapsulesThunkActionProvider } from "../redux/action";
import CapsuleModal from "./CapsuleModal";

function Grid(props) {
  let capsules = useSelector((store) => {
    return store.capsules;
  });

  const dispatch = useDispatch();

  const [activeCard, setActiveCard] = useState({});
  console.log(activeCard);

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(fetchCapsulesThunkActionProvider());
  }, []);

  const makeActive = (id) => {
    let capsule = capsules.filter((el) => {
      return el.capsule_serial === id;
    });

    setActiveCard(capsule[0]);
    setModalShow(true);
  };

  return (
    <div className="grid">
      {capsules.length > 0 ? (
        <div className="capsules-grid">
          {capsules.map((el) => {
            return (
              <Card key={el.capsule_serial} {...el} makeActive={makeActive} />
            );
          })}
        </div>
      ) : (
        <h2 style={{ color: "red" }}>No More Results</h2>
      )}
      <CapsuleModal
        data={activeCard}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Grid;
