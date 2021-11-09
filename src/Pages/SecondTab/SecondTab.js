import React from 'react';
import ButtonsNext from '../../Components/Buttons/ButtonsNext/ButtonsNext';
import GenericInputs from '../../Components/GenericInputs/GenericInputs';
import Titles from '../../Components/Titles/Titles';
import './SecondTab.css';

const SecondTab = ({ menu,setBlockTab3 }) => {
  const [Linkedin, setLinkedin] = React.useState('');
  const [Github, setGithub] = React.useState('');

React.useEffect(() => {
  if (localStorage.getItem('Linkedin') !== null) {
    setLinkedin(localStorage.getItem('Linkedin'));
  }
  if (localStorage.getItem('Github') !== null) {
    setGithub(localStorage.getItem('Github'))};
  }, [])

React.useEffect(() => {
    localStorage.setItem('Linkedin', Linkedin);
    localStorage.setItem('Github', Github);
    if(!localStorage.getItem('Github')){
      setBlockTab3(true)
    }else{
      setBlockTab3(false)
    }
  }, [Linkedin, Github,setBlockTab3])



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
              pattern="https?://(www\.)?linkedin.com/in/.*"
              placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
              value={Linkedin}
              onChange={(e) => 
                setLinkedin(e.target.value)}
            />
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Github *"
              id="github"
              pattern="https?://(www\.)?github.com/[a-zA-Z0-9-_]+"
              placeholder="https://github.com/example"
              value={Github}
              onChange={(e) => 
                setGithub(e.target.value)}
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