import React from 'react';
import './SelectBox.css';

const SelectBoxDay = () => {
  const dias = Array.from({ length: 31 }, (a, b) => ++b);

  return (
    <>
      <label className="labels" htmlFor="day">
        Day
      </label>
      <select
        className="select"
        id="day"
        name="day"
        required
      >
        <option value=""></option>
        {dias.map((dia) => {
          if (dia < 10) {
            dia = `0${dia}`;
          }
          return (
            <option key={dia} value={dia}>
              {dia}
            </option>
          );
        })}
        ;
      </select>
    </>
  );
};

export default SelectBoxDay;