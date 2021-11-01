import React from 'react';
import ButtonsFinish from '../../Components/Buttons/ButtonsFinish/ButtonsFinish'
import ButtonsMore from '../../Components/Buttons/ButtonsMore/ButtonsMore';
import InputCertificates from '../../Components/InputCertificates/InputCertificates';
import GenericInputs from '../../Components/GenericInputs/GenericInputs';
import Titles from '../../Components/Titles/Titles';
import './ThirdTab.css';
import TabsMenu from '../../Components/TabsMenu/TabsMenu';

const ThirdTab = ({ menu }) => {
  

  return (
    <>
      <section id="third-tab">
        <Titles text="Team Sign Up" />

        {menu}

        <div id="content_3tab">
          <div id="entry-certificates" className="input-block div-heart">
            <InputCertificates
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
              required
            />
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Institution *"
              id="institution"
              placeholder="Universidade Federal da Paraíba"
              required
            />
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Graduation *"
              id="graduation"
              placeholder="Ciência da Computação"
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