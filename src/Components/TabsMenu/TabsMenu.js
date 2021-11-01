import React from 'react';
import './TabsMenu.css';

const TabsMenu = ({ active1, active2, active3}) => {
  
//basic
  if (active1) {
    active1 = 'active';
    active2 = 'desactive';
    active3 = 'desactive';
//social
  } else if (active2) {
    active1 = 'desactive';
    active2 = 'active';
    active3 = 'desactive';
//certificates
  } else if (active3) {
    active1 = 'desactive';
    active2 = 'desactive';
    active3 = 'active';
  }

  return (
    <>
      <div className="tabs-container">
        <div
          className={`tabs basic ${active1}`}
        >
          <span className="basic_span">Basic</span>
        </div>
        <div
          className={`tabs social ${active2}`}
        >
          <span className="social_span">Social</span>
        </div>
        <div
          className={`tabs certificates ${active3}`}
        >
          <span className="certificates_span">Certificates</span>
        </div>
      </div>
    </>
  );
};

export default TabsMenu;