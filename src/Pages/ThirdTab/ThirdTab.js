import React from 'react';
import ButtonsFinish from '../../Components/Buttons/ButtonsFinish/ButtonsFinish'
import ButtonsMore from '../../Components/Buttons/ButtonsMore/ButtonsMore';
import InputCertificates from '../../Components/InputCertificates/InputCertificates';
import GenericInputs from '../../Components/GenericInputs/GenericInputs';
import Titles from '../../Components/Titles/Titles';
import './ThirdTab.css';

const ThirdTab = ({ tabsMenu }) => {
  const [certificates, setcertificates] = React.useState([]);
  const [teamname, setteamname] = React.useState('');
  const [institution, setinstitution] = React.useState('');
  const [graduation, setgraduation] = React.useState('');

  React.useEffect(() => {
    if (localStorage.getItem('certificates') !== null) {
      setcertificates(localStorage.getItem('certificates'));
    }
    if (localStorage.getItem('teamname') !== null) {
      setteamname(localStorage.getItem('teamname'));
    }
    if (localStorage.getItem('institution') !== null) {
      setinstitution(localStorage.getItem('institution'));
    }
    if (localStorage.getItem('graduation') !== null) {
      setgraduation(localStorage.getItem('graduation'));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('certificates', certificates);
    localStorage.setItem('teamname', teamname);
    localStorage.setItem('institution', institution);
    localStorage.setItem('graduation', graduation);
  }, [certificates, teamname, institution, graduation]);

  return (
    <>
      <section id="third-tab">
        <Titles text="Team Sign Up" />

        {tabsMenu}

        <div id="content_3tab">
          <div id="entry-certificates" className="input-block div-heart">
            <InputCertificates
              value={certificates}
              setcertificates={setcertificates}
            />
          </div>
          <div className="input-block btn-space-between btn-more">
            <div className="certificates-list">
              <ul className="certificates-ul">
                <li className="certificates-opt hide">
                  <span className="certificates-span">Certificates</span>
                  <i data-feather="chevron-down"></i>
                </li>
                <div className="certificates-added hide">
                  <div className="certificates-favorite"></div>
                  <div className="certificates-normal"></div>
                </div>
              </ul>
            </div>
            <div className="prevent-align-flex-start">
              <ButtonsMore onClick={(e) => console.log(e)} />
            </div>
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Team Name *"
              id="teamName"
              placeholder="My Teams Name"
              value={teamname}
              setteamname={setteamname}
              required
            />
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Institution *"
              id="institution"
              placeholder="Universidade Federal da Paraíba"
              value={institution}
              setinstitution={setinstitution}
              required
            />
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Graduation *"
              id="graduation"
              placeholder="Ciência da Computação"
              value={graduation}
              setgraduation={setgraduation}
              required
            />
          </div>

          <div className="input-block btn-to-right">
            <ButtonsFinish id="tab3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdTab;