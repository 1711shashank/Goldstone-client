import React from "react";
import { Modal } from "react-bootstrap";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";

const ModalComponent = ({ showModal, handleCloseModal, submitHandler, ...props }) => {
    return (
        <Modal show={showModal} onHide={handleCloseModal} centered>
            <ModalHeader handleCloseModal={handleCloseModal} />
            <ModalBody submitHandler={submitHandler} {...props} />
        </Modal>
    );
};

export default ModalComponent;