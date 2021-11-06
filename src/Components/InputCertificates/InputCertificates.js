import React from 'react';
import './InputCertificates.css';
import { Heart } from 'react-feather';

const InputCertificates = ({ value, setcertificates, heart, setHeart }) => {
  
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
          value={value}
          onChange={(e) => setcertificates(e.target.value)}
          placeholder="https://www.linkedin.com/in/foo-bar-3a00560104/"
        />
        <button id="btn_heart" type="button">
          <Heart
            onClick={() => setHeart(!heart)}
            className={heart ? 'heartFilled' : ''}
          />
        </button>
      </div>
    </>
  );
};

export default InputCertificates;