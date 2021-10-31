import React from 'react';
import './TabsMenu.css';

const TabsMenu = () => {
  

  return (
    <>
      <div className="tabs-container">
        <div className={`tabs basic`}>
          <span className="basic_span">Basic</span>
        </div>
        <div className={`tabs social`}>
          <span className="social_span">Social</span>
        </div>
        <div
          className={`tabs certificates`}
        >
          <span className="certificates_span">Certificates</span>
        </div>
      </div>
    </>
  );
};

export default TabsMenu;