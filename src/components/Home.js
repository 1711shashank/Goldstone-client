import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "./style.css";

const Home = () => {
    const [datas, setDatas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState("");
    const [updateName, setUpdateName] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [updateGender, setUpdateGender] = useState("");
    const [updateStatus, setUpdateStatus] = useState("");

    const handleShowModal = (email) => {
        const data = datas.filter((d) => {
            return d.email === email;
        });
        setId(data[0].id);
        setUpdateName(data[0].name);
        setUpdateEmail(data[0].email);
        setUpdateGender(data[0].gender);
        setUpdateStatus(data[0].status);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const submitHandler = async () => {

        const updatedUserData = {
            id : id,
            name : updateName,
            email : updateEmail,
            gender: updateGender,
            status: updateStatus

        }

        await axios.post("http://localhost:5000/updateUserData", {updatedUserData:updatedUserData});
     };

    useEffect(() => {
        axios.get("http://localhost:5000/getUserData").then((response) => {
            setDatas(response.data.usersData);
        });
    }, []);

    let i = 0;

    return (
        <div>
            {datas.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <table className="table one-skill-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((d, i) => (
                            <tr key={i++} className={i % 2 === 0 ? "grey" : ""}>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.gender}</td>
                                <td>{d.status}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleShowModal(d.email)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header>
                    <Modal.Title>Edit Data</Modal.Title>
                    <Button variant="link" className="close" onClick={handleCloseModal}>
                        <span aria-hidden="true">&times;</span>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={submitHandler}>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                value={updateName}
                                onChange={(e) => setUpdateName(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                value={updateEmail}
                                onChange={(e) => setUpdateEmail(e.target.value)}

                            />
                        </div>
                        <div class="form-group">
                            <label for="gender">Gender</label>
                            <input
                                type="text"
                                class="form-control"
                                id="gender"
                                value={updateGender}
                                onChange={(e) => setUpdateGender(e.target.value)}

                            />
                        </div>
                        <div class="form-group">
                            <label for="status">Status</label>
                            <input
                                type="text"
                                class="form-control"
                                id="status"
                                value={updateStatus}
                                onChange={(e) => setUpdateStatus(e.target.value)}

                            />
                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            style={{ width: "75%", marginLeft: "3rem" }}
                        >
                            Submit
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Home;
