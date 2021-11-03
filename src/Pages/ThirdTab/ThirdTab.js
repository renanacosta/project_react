import React, {useState} from 'react';
import ButtonsFinish from '../../Components/Buttons/ButtonsFinish/ButtonsFinish'
import ButtonsMore from '../../Components/Buttons/ButtonsMore/ButtonsMore';
import InputCertificates from '../../Components/InputCertificates/InputCertificates';
import GenericInputs from '../../Components/GenericInputs/GenericInputs';
import Titles from '../../Components/Titles/Titles';
import { Heart } from 'react-feather';
import { ChevronDown } from 'react-feather';
import '../../Components/Buttons/Buttons.css';
import '../../Components/Buttons/ButtonsClose/ButtonsClose'
import './ThirdTab.css';


const ThirdTab = ({ menu }) => {

  const [TeamName, setTeamName] = React.useState('');
  const [Institution, setInstitution] = React.useState('');
  const [Graduation, setGraduation] = React.useState('');

  React.useEffect(() => {
    if (localStorage.getItem('TeamName') !== null) {
      setTeamName(localStorage.getItem('TeamName'));
    }
    if (localStorage.getItem('Institution') !== null) {
      setInstitution(localStorage.getItem('Institution'))
    }
    if (localStorage.getItem('Graduation') !== null) {
      setGraduation(localStorage.getItem('Graduation'))
    };
  }, [])

  React.useEffect(() => {
    localStorage.setItem('TeamName', TeamName);
    localStorage.setItem('Institution', Institution);
    localStorage.setItem('Graduation', Graduation);
  }, [TeamName, Institution, Graduation])

// inputCertificates
  const [certificado, setCertificado] = useState('')
// coração
  const [heart, setHeart] = useState(false)
// lista de certificados
  const [listUnfavorited, setListUnfavorited] = useState([])

  const [listFavorited, setListFavorited] = useState([])

    const MoreFunction = () => {

      if (certificado !== '') {
      if ((listFavorited.length + listUnfavorited.length) < 5) {
        if (heart) {
          setListFavorited([...listFavorited, certificado])
        }
        else {
          setListUnfavorited([...listUnfavorited, certificado])
        }
        setCertificado('')
        setHeart(false)
      } else {
        alert('Você atingiu o limite de 5 certificados')
      }
    }
  }



  return (
    <>
      <section id="third-tab">
        <Titles text="Team Sign Up" />

        {menu}

        <div id="content_3tab">
          <div id="entry-certificates" className="input-block div-heart">
            <InputCertificates heart = {heart} setHeart = {setHeart} 
            certificado = {certificado} setCertificado = {setCertificado}/>
          </div>
          <div className="input-block btn-space-between btn-more">
            <div className="certificates-list">
              <ul className="certificates-ul">
                <li className="certificates-opt hide">
                  <span className="certificates-span">Certificates</span>
                </li>
                <div className="certificates-favorited">
                  {(listFavorited.length > 0 || listUnfavorited.length > 0) && (
                    <div>
                      <button type="button" className="btn"> 
                        List of Certificates 
                      <ChevronDown color='#074EE8' fill='white' />
                      </button>

                      <ul className="Dropdown" id="Dropdown">
                        {listFavorited.map((item, index) => (
                          <li key={index}>
                            {item} <Heart color='#074EE8' fill='#074EE8' />
                          </li>
                        ))}
                        {listUnfavorited.map((item, index) => (
                          <li key={index}>
                            {item} <Heart color='#074EE8' fill='white' />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </ul>
            </div>
            <div className="prevent-align-flex-start">
              <ButtonsMore OnClick={MoreFunction} />
            </div>
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Team Name *"
              id="teamName"
              value={TeamName}
              placeholder="My Teams Name"
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Institution *"
              id="institution"
              value={Institution}
              placeholder="Universidade Federal da Paraíba"
              onChange={(e) => setInstitution(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Graduation *"
              id="graduation"
              value={Graduation}
              placeholder="Ciência da Computação"
              onChange={(e) => setGraduation(e.target.value)}
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