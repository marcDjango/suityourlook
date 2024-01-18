/*eslint-disable*/
import React from "react";
import "./InputSelect.scss";

function InputSelect({
  labelName,
  labelTitle,
  modelsOptions,
  setNumberStock,
  isHandleChange,
}) {
  const handleSelectChange = (e) => {
    if (e.target.value) {
      setNumberStock(e.target.value);
    }
  };
  return (
    <div className="options-main-container">
      <label htmlFor={labelName}>{labelTitle}</label>
      <select
        name={labelName}
        id={labelName}
        onChange={isHandleChange && handleSelectChange}
      >
        {modelsOptions.map((el) => {
          return (
            <option key={el} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default InputSelect;
