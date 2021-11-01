import React from 'react';
import ButtonsNext from '../../Components/Buttons/ButtonsNext/ButtonsNext';
import GenericInputs from '../../Components/GenericInputs/GenericInputs';
import TabsMenu from '../../Components/TabsMenu/TabsMenu';
import Titles from '../../Components/Titles/Titles';
import './SecondTab.css';

const SecondTab = ({ menu }) => {
  

  return (
    <>
      <section id="second-tab">
        <Titles text="Team Sign Up" />

        {menu}

        <div id="content_2tab">
          <div className="input-block">
            <GenericInputs
              type="text"
              label="LinkedIn"
              id="linkedin"
              placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
            />
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Github *"
              id="github"
              placeholder="https://github.com/example"
              required
            />
            <span id="erroGithub"></span>
          </div>

          <div className="btn-to-right btn-to-down">
            <ButtonsNext id="tab2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondTab;