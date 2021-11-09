import React from 'react';
import './SelectBox.css';

const SelectBoxYear = (props) => {
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
        onChange={(e) => {
          props.setBirthday({ ...props.birthday, year: e.target.value });
          props.setyear(e.target.value); 
        }}

      >
        <option value=""></option>
        {anos.reverse().map((ano) => {
          return (
            <option selected={parseInt(props.birthday.year) === parseInt(ano)} key={ano} value={ano}>
              {ano}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectBoxYear;