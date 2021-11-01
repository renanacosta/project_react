import React from 'react';
import './InputCertificates.css';
import { Heart } from 'react-feather';

const InputCertificates = () => {
  return (
    <>
      <label className="labels" htmlFor="certificates">
        Certificates
      </label>
      <div id="input_btn">
        <input
          type="text"
          id="certificates"
          className="input-heart"
          placeholder="https://linkedin.com/in/foo-bar-3a0560104/"
        />
        <button id="btn_heart">
          <Heart />
        </button>
      </div>
    </>
  );
};

export default InputCertificates;