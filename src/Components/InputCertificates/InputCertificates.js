import React from 'react';
import './InputCertificates.css';
import { Heart } from 'react-feather';

const InputCertificates = (props) => {
  return (
    <>
      <label className="labels" htmlFor="certificates">
        Certificates *
      </label>
      <div id="input_btn">
        <input
          type="text"
          id="certificates"
          className="input-heart"
          value={props.certificado}
          onChange={(e) => props.setCertificado(e.target.value)}
          placeholder="https://linkedin.com/in/foo-bar-3a0560104/"
        />
        <button onClick={() => props.setHeart(!props.heart)} type="button" id="btn_heart">
          <Heart fill={props.heart ? '#074EE8' : 'white'} color={'#074EE8'}/>
        </button>
      </div>
    </>
  );
};

export default InputCertificates;