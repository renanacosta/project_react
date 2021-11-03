import React from 'react';
import './FirstTab.css';
import GenericInputs from '../../Components/GenericInputs/GenericInputs';
import Titles from '../../Components/Titles/Titles';
import SelectBoxDay from '../../Components/SelectBox/SelectBoxDay';
import SelectBoxMonth from '../../Components/SelectBox/SelectBoxMonth';
import SelectBoxYear from '../../Components/SelectBox/SelectBoxYear';
import CheckBox from '../../Components/CheckBox/CheckBox';
import ButtonsNext from '../../Components/Buttons/ButtonsNext/ButtonsNext';
import '../../Components/Buttons/Buttons.css'


const FirstTab = ({ menu }) => {
  const [, setDay] = React.useState('');
  const [, setMonth] = React.useState('');
  const [, setYear] = React.useState('');
  const [birthday, setBirthday] = React.useState({
    day: 0,
    month: 0,
    year: 0,
  });
  const [age, setAge] = React.useState('');
  const [FullName, setFullName] = React.useState('');
  const [Nickname, setNickname] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Phone, setPhone] = React.useState('');


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

  React.useEffect(() => {
    if (localStorage.getItem('FullName') !== null) {
      setFullName(localStorage.getItem('FullName'));
    }
    if (localStorage.getItem('Nickname') !== null) {
      setNickname(localStorage.getItem('Nickname'))
    }
    if (localStorage.getItem('Email') !== null) {
      setEmail(localStorage.getItem('Email'));
    }
    if (localStorage.getItem('Phone') !== null) {
      setPhone(localStorage.getItem('Phone'));
    }

    let birthday= {day:localStorage.getItem('day'), 
    month:localStorage.getItem('month'), 
    year:localStorage.getItem('year')};

    if (localStorage.getItem('day') !== null) {
      setBirthday(birthday);
    }
    if (localStorage.getItem('month') !== null) {
      setBirthday({ ...birthday, month: localStorage.getItem('month') });
    } 
    if (localStorage.getItem('year') !== null) {
      setBirthday({ ...birthday, year: localStorage.getItem('year') });
    }
    if (localStorage.getItem('age') !== null) {
      setAge(localStorage.getItem('age'));
    };
  },[])


  React.useEffect(() => {
    localStorage.setItem('FullName', FullName);
    localStorage.setItem('Nickname', Nickname);
    localStorage.setItem('Email', Email);
    localStorage.setItem('Phone', Phone);
    if (birthday.day !== 0) {
      localStorage.setItem('day', birthday.day);
    }
    if (birthday.month !== 0) {
    localStorage.setItem('month', birthday.month);
    }
    if (birthday.year !== 0) {
    localStorage.setItem('year', birthday.year);
    }
    localStorage.setItem('age', age);

  }, [FullName, Nickname, Email, Phone, birthday.day, birthday.month, birthday.year, age]);


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
              value={FullName}
              placeholder="Foo Bar"
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <GenericInputs
              type="text"
              label="Nickname"
              id="nickname"
              value={Nickname}
              placeholder="Juanito"
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>

          <div className="input-block flex-line">
            <div className="medium-input">
              <GenericInputs
                type="email"
                label="Email *"
                id="email"
                value={Email}
                placeholder="foo@bar.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="small-input">
              <GenericInputs
                type="tel"
                label="Phone"
                id="phone"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(83) 00000-0000"
              />
            </div>
          </div>

          <div>
            <p className="line-title">Birthday *</p>
          </div>

          <div className="input-block flex-line">
            <div className="grid-collum four-inputs-by-line">
              <SelectBoxDay birthday={birthday} setBirthday={setBirthday} setday={setDay}
              />
            </div>
            <div className="grid-collum four-inputs-by-line">
              <SelectBoxMonth birthday={birthday} setBirthday={setBirthday} setmonth={setMonth}
              />
            </div>
            <div className="grid-collum four-inputs-by-line">
              <SelectBoxYear birthday={birthday} setBirthday={setBirthday} setyear={setYear}
              />
            </div>

            <div className="four-inputs-by-line">
              <GenericInputs
                type="number"
                label="Age"
                id="age"
                value={age}
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