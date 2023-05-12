import React from "react";

const TableRow = ({ data, index, handleShowModal }) => {
    const className = index % 2 === 0 ? "grey" : "";

    return (
        <tr className={className}>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.gender}</td>
            <td>{data.status}</td>
            <td>
                <button className="btn btn-primary" onClick={() => handleShowModal(data.email)}>
                    Edit
                </button>
            </td>
        </tr>
    );
};

export default TableRow;
