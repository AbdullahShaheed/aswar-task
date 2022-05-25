import React from "react";

const Radio = ({ name, label, value, checked }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        value={value}
        id={name}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
