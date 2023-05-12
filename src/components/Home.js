import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { utils, writeFile } from "xlsx";
import Loading from "./Loading";
import ExportButton from "./ExportButton";
import Table from "./Table";
import ModalComponent from "./ModalComponent"

const Home = () => {
    const [datas, setDatas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState("");
    const [updateName, setUpdateName] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [updateGender, setUpdateGender] = useState("");
    const [updateStatus, setUpdateStatus] = useState("");

    const handleShowModal = (email) => {
        const data = datas.filter((e) => {
            return e.email === email;
        });
        setId(data[0].id);
        setUpdateName(data[0].name);
        setUpdateEmail(data[0].email);
        setUpdateGender(data[0].gender);
        setUpdateStatus(data[0].status);
        setShowModal(true);
    };


    const handalexport = () => {
        let workbook = utils.book_new();
        let worksheet = utils.json_to_sheet(datas);
        utils.book_append_sheet(workbook, worksheet, "data");
        writeFile(workbook , "usersData.xlsx");
    }

    const submitHandler = async () => {

        const updatedUserData = {
            id: id,
            name: updateName,
            email: updateEmail,
            gender: updateGender,
            status: updateStatus
        }

        await axios.post("http://localhost:5000/updateUserData", { updatedUserData: updatedUserData });
    };

    const fetchData = async () => {
        const response =  await axios.get("http://localhost:5000/getUserData");
        setDatas(response.data.usersData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {
                datas.length === 0 ?
                    <Loading /> :
                    <>
                        <ExportButton handleExport={handalexport} />
                        <Table datas={datas} handleShowModal={handleShowModal} />
                    </>
            }

            <ModalComponent
                showModal={showModal}
                handleCloseModal={() => {setShowModal(false)}}
                submitHandler={submitHandler}
                updateName={updateName}
                updateEmail={updateEmail}
                updateGender={updateGender}
                updateStatus={updateStatus}
                setUpdateName={setUpdateName}
                setUpdateEmail={setUpdateEmail}
                setUpdateGender={setUpdateGender}
                setUpdateStatus={setUpdateStatus}
            />
        </div>
    );
};

export default Home;