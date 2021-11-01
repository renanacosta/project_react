import React from 'react';
import './FirstTab.css';
import GenericInputs from '../../Components/GenericInputs/GenericInputs';
import Titles from '../../Components/Titles/Titles';
import SelectBoxDay from '../../Components/SelectBox/SelectBoxDay';
import SelectBoxMonth from '../../Components/SelectBox/SelectBoxMonth';
import SelectBoxYear from '../../Components/SelectBox/SelectBoxYear';
import CheckBox from '../../Components/CheckBox/CheckBox';
import ButtonsNext from '../../Components/Buttons/ButtonsNext/ButtonsNext';
import TabsMenu from '../../Components/TabsMenu/TabsMenu';

const FirstTab = ({menu}) => {
  const [birthday, setBirthday] = React.useState({
    day: 0,
    month: 0,
    year: 0,
  });

  const [age, setAge] = React.useState('');
  React.useEffect(() => {
    const birth = new Date(birthday.year, birthday.month - 1, birthday.day);

    if (birthday.year === 0) {
      setAge('');
    } else if (birthday.year !== 0) {
      setAge(
        Math.floor(
          Math.ceil(
            Math.abs(birth.getTime() - new Date().getTime()) /
            (1000 * 3600 * 24),
          ) / 365.25,
        ),
      );
    }
  }, [birthday]);

  return (
    <>
      <section id="first-tab">
        <Titles text="Team Sign Up" />
        {menu}

        <div id="content_1tab">
          <div className="input-block">
            <GenericInputs
              type="text"
              label="Full Name *"
              id="fullname"
              placeholder="Foo Bar"
              required
            />
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Nickname"
              id="nickname"
              placeholder="Juanito"
            />
          </div>

          <div className="input-block flex-line">
            <div className="medium-input">
              <GenericInputs
                type="email"
                label="Email *"
                id="email"
                placeholder="foo@bar .com"
                required
              />
            </div>

            <div className="small-input">
              <GenericInputs
                type="text"
                label="Phone"
                id="phone"
                placeholder="(83) 00000-0000"
              />
            </div>
          </div>

          <div>
            <p className="line-title">Birthday *</p>
          </div>

          <div className="input-block flex-line">
            <div className="grid-collum four-inputs-by-line">
              <SelectBoxDay birthday={birthday} setBirthday={setBirthday}
              />
            </div>
            <div className="grid-collum four-inputs-by-line">
              <SelectBoxMonth birthday={birthday} setBirthday={setBirthday}
              />
            </div>
            <div className="grid-collum four-inputs-by-line">
              <SelectBoxYear birthday={birthday} setBirthday={setBirthday}
              />
            </div>

            <div className="four-inputs-by-line">
              <GenericInputs
                type="number"
                label="Age"
                id="age"
                placeholder={age}
                disabled
              />
            </div>
          </div>

          <div id="terms" className="input-block">
            <CheckBox
              label="I accept the terms and privacy"
            />
          </div>

          <div className="input-block btn-to-right">
            <ButtonsNext id="tab1" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstTab;