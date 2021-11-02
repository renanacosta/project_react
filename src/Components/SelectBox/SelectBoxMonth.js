import React from 'react';
import './SelectBox.css';

const SelectBoxMonth = (props) => {
  const meses = Array.from({ length: 12 }, (a, b) => ++b);

  return (
    <>
      <label className="labels" htmlFor="month">
        Month
      </label>
      <select
        className="select"
        id="month"
        name="month"
        required
        onChange={(e) => {props.setBirthday({ ...props.birthday, month: e.target.value });
          props.setmonth(e.target.value);
        }}

      >
        <option value=""></option>
        {meses.map((mes) => {
          if (mes < 10) {
            mes = `0${mes}`;
          }
          return (
            <option selected={parseInt(props.birthday.month) === parseInt(mes)} key={mes} value={mes}>
              {mes}
            </option>
          );
        })}
        ;
      </select>
    </>
  );
};

export default SelectBoxMonth;