import React, { useState } from "react";

const Select = ({ title, id, options, onFilterChange }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <select
        className="ml-1 p-0.5 text-center rounded-sm text-blue-950 "
        name={title}
        id={id}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onFilterChange(e.target.id, e.target.value);
        }}
      >
        <option value="all">Всі</option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
