import React from 'react';
import './SelectBox.css';

const SelectBoxDay = (props) => {
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
        onChange={(e) => {props.setBirthday({ ...props.birthday, day: e.target.value });
          props.setday(e.target.value);
        }}

      >
        <option value=""></option>
        {dias.map((dia) => {
          if (dia < 10) {
            dia = `0${dia}`;
          }
          return (
            <option selected={parseInt(props.birthday.day) === parseInt(dia)} key={dia} value={dia}>
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