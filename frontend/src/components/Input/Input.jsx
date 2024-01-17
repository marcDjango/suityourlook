import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

function Input({ labelName, labelText, type, maxLength, height }) {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value);
    }
  };

  return (
    <label className="label-container" htmlFor={labelName}>
      <span className="label-title">{labelText}</span>
      <input
        className="input-container"
        type={type}
        name={labelName}
        value={value}
        onChange={handleClick}
        style={{ height: height }}
      />
    </label>
  );
}

export default Input;

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
};