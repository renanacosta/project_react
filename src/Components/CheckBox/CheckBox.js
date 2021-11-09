import React from 'react';
import './CheckBox.css';

const CheckBox = ({checked,setChecked}) => {
  return (
    <label id="terms-label" className="check-terms">
      I accept the terms and privacy
      <input
        checked={checked}
        onChange={()=>setChecked(!checked)}
        id="terms-input"
        type="checkbox"
        required
      />
      <span id="terms-span" className="checkmark"></span>
    </label>
  );
};

export default CheckBox;