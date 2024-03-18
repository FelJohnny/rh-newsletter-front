import React from "react";

const InputOptions = ({ options }) => {
  return (
    <select>
      {options.map((option,index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};

export default InputOptions;
