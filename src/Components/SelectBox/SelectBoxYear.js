import React from 'react';
import './SelectBox.css';

const SelectBoxYear = () => {
  const anos = Array.from(
    { length: 110 },
    (a, b) => b + new Date().getFullYear() - 109,
  );
  return (
    <>
      <label className="labels" htmlFor="year">
        Year
      </label>
      <select
        className="select"
        id="year"
        name="year"
        required
      >
        <option value=""></option>
        {anos.reverse().map((ano) => {
          return (
            <option key={ano} value={ano}>
              {ano}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectBoxYear;