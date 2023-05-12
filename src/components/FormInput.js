import React from "react";

const FormInput = ({ label, type, id, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} className="form-control" id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default FormInput;
