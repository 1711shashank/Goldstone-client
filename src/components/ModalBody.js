import React from "react";
import FormInput from "./FormInput";
import { Modal } from "react-bootstrap";


const ModalBody = ({
    submitHandler,
    updateName,
    updateEmail,
    updateGender,
    updateStatus,
    setUpdateName,
    setUpdateEmail,
    setUpdateGender,
    setUpdateStatus,
}) => {
    return (
        <Modal.Body>
            <form onSubmit={submitHandler}>
                <FormInput label="Name" type="text" id="name" value={updateName} onChange={(e) => setUpdateName(e.target.value)} />
                <FormInput label="Email" type="email" id="email" value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} />
                <FormInput label="Gender" type="text" id="gender" value={updateGender} onChange={(e) => setUpdateGender(e.target.value)} />
                <FormInput label="Status" type="text" id="status" value={updateStatus} onChange={(e) => setUpdateStatus(e.target.value)} />
                <button type="submit" className="btn btn-primary" style={{ width: "75%", marginLeft: "3rem" }}>
                    Submit
                </button>
            </form>
        </Modal.Body>
    );
};

export default ModalBody;
