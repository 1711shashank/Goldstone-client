import React from "react";
import { Modal, Button } from "react-bootstrap";


const ModalHeader = ({ handleCloseModal }) => {
  return (
    <Modal.Header>
      <Modal.Title>Edit Data</Modal.Title>
      <Button variant="link" className="close" onClick={handleCloseModal}>
        <span aria-hidden="true">&times;</span>
      </Button>
    </Modal.Header>
  );
};

export default ModalHeader;
