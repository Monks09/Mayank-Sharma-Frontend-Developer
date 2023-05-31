import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CapsuleModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>Capsule Details</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <b>Capsule Serial:</b> {props.data.capsule_serial}
        </p>
        <p>
          <b>Capsule Id:</b> {props.data.capsule_id}
        </p>
        <p>
          <b>Status:</b> {props.data.status}
        </p>
        <p>
          <b>Original Launch:</b> {props.data.original_launch}
        </p>
        <p>
          <b>Original Launch Unix:</b> {props.data.original_launch_unix}
        </p>
        <p>
          <b>Missions:</b>{" "}
          {props.data.missions ? props.data.missions.length : ""}
        </p>
        <p>
          <b>Landings:</b> {props.data.landings}
        </p>
        <p>
          <b>Type:</b> {props.data.type}
        </p>
        <p>
          <b>Details:</b> {props.data.details}
        </p>
        <p>
          <b>Reuse Count:</b> {props.data.reuse_count}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CapsuleModal;
