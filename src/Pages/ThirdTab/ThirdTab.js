import React from 'react';
import SetOutSideCkick from '../../Components/Events/Click';
import ButtonsCertificates from '../../Components/Buttons/ButtonsCertificates/ButtonsCertificates';
import ButtonsFinish from '../../Components/Buttons/ButtonsFinish/ButtonsFinish';
import ButtonsMore from '../../Components/Buttons/ButtonsMore/ButtonsMore';
import InputCertificates from '../../Components/InputCertificates/InputCertificates';
import GenericInputs from '../../Components/GenericInputs/GenericInputs';
import Title from '../../Components/Titles/Titles';
import { Trash2 } from 'react-feather';
import './ThirdTab.css';

const ThirdTab = ({ menu }) => {
  const [certificates, setcertificates] = React.useState('');
  const [certificatesList, setcertificatesList] = React.useState([]);
  const [heart, setHeart] = React.useState(false);
  const [teamname, setteamname] = React.useState('');
  const [institution, setinstitution] = React.useState('');
  const [graduation, setgraduation] = React.useState('');
  const favorite = '💙';
  const notFavorite = '🤍';

  const addCertificate = () => {
    if (certificatesList[0] === '') {
      certificatesList.pop();
    }
    if (certificatesList.length <= 4) {
      if (certificates) {
        if (heart) {
          setcertificatesList([favorite.concat(certificates), ...certificatesList,]);
        } else {
          setcertificatesList([...certificatesList, notFavorite.concat(certificates),]);
        }
        setcertificates('');
        localStorage.setItem('certificatesList', certificatesList);
      } else {
        alert('Please enter a valid certificate.');
      }
    } else {
      setcertificates('');
      alert(
        'You cannot add more than 5 certificates'
      );
    }
  };
  const removeCertificate = (index) => {
    const array = [...certificatesList];
    array.splice(index, 1);
    setcertificatesList(array);
    localStorage.setItem('certificatesList', certificatesList);
  };

  React.useEffect(() => {
    if (localStorage.getItem('certificates') !== null) {
      setcertificates(localStorage.getItem('certificates'));
    }
    if (localStorage.getItem('certificatesList') !== null) {
      setcertificatesList(localStorage.getItem('certificatesList').split(','));
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
    localStorage.setItem('certificatesList', certificatesList,);
    localStorage.setItem('teamname', teamname);
    localStorage.setItem('institution', institution);
    localStorage.setItem('graduation', graduation);
  }, [certificates, certificatesList, teamname, institution, graduation]);

  const dropDownRef = React.useRef(null);
  const [isActive, setIsActive] = SetOutSideCkick(dropDownRef, false);

  const dropDown = () => {
    if (isActive) {
      return 'isActive';
    } else {
      return 'isNotActive';
    }
  };

  return (
    <>
      <section id="third-tab">
        <Title text="Team Sign Up" />

        {menu}

        <div id="content_3tab">
          <div id="entry-certificates" className="input-block div-heart">
            <InputCertificates
              value={certificates}
              setcertificates={setcertificates}
              heart={heart}
              setHeart={setHeart}
              onChange={(e) => setcertificates(e.target.value)}
            />
          </div>
          <div className="input-block btn-more">
            {certificatesList.length > 0 && (
              <div className="dropDown">
                <ButtonsCertificates
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                />
                <ul className={dropDown()} ref={dropDownRef}>
                  {certificatesList[0] && (
                    <li>
                      <p>{certificatesList[0]}</p>
                      <span>
                        <Trash2
                          onClick={() => {
                            removeCertificate(0);
                          }}
                          size={15}
                        />
                      </span>
                    </li>
                  )}
                  {certificatesList[1] && (
                    <li>
                      <p>{certificatesList[1]}</p>
                      <span>
                        <Trash2
                          onClick={() => {
                            removeCertificate(1);
                          }}
                          size={15}
                        />
                      </span>
                    </li>
                  )}
                  {certificatesList[2] && (
                    <li>
                      <p>{certificatesList[2]}</p>
                      <span>
                        <Trash2
                          onClick={() => {
                            removeCertificate(2);
                          }}
                          size={15}
                        />
                      </span>
                    </li>
                  )}
                  {certificatesList[3] && (
                    <li>
                      <p>{certificatesList[3]}</p>
                      <span>
                        <Trash2
                          onClick={() => {
                            removeCertificate(3);
                          }}
                          size={15}
                        />
                      </span>
                    </li>
                  )}
                  {certificatesList[4] && (
                    <li>
                      <p>{certificatesList[4]}</p>
                      <span>
                        <Trash2
                          onClick={() => {
                            removeCertificate(4);
                          }}
                          size={15}
                        />
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            )}
            <div className="btn-to-right">
              <ButtonsMore onClick={addCertificate} />
            </div>
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Team Name *"
              id="teamName"
              placeholder="My Teams Name"
              value={teamname}
              onChange={(e) => {
                setteamname(e.target.value);
              }}
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
              onChange={(e) => {
                setinstitution(e.target.value);
              }}
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
              onChange={(e) => {
                setgraduation(e.target.value);
              }}
              required
            />
          </div>

          <div className="input-block btn-to-right btn-finish">
            <ButtonsFinish id="tab3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdTab;