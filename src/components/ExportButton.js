import React from "react";

const ExportButton = ({ handleExport }) => {
  return (
    <button className="btn btn-success export-button" onClick={handleExport}>
      Download CSV File
    </button>
  );
};

export default ExportButton;
