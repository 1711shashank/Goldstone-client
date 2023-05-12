import React from "react";
import TableRow from "./TableRow";

const Table = ({ datas, handleShowModal }) => {
    let i = 0;

    return (
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
                {datas.map((data) => (
                    <TableRow key={i++} data={data} index={i} handleShowModal={handleShowModal} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
