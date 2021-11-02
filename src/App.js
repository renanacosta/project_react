import React from 'react';
import TabsMenu from './Components/TabsMenu/TabsMenu';
import FirstTab from './Pages/FirstTab/FirstTab';
import SecondTab from './Pages/SecondTab/SecondTab';
import ThirdTab from './Pages/ThirdTab/ThirdTab';
import SuccessTab from './Pages/SuccessTab/SucessTab';
import './App.css';

const App = () => {
  const [tabName, setTabName] = React.useState('FirstTab');
  const [navTab, setNavTab] = React.useState();

  const tb1 = <FirstTab menu={<TabsMenu active1 setNavTab={setNavTab} />} />;
  const tb2 = <SecondTab menu={<TabsMenu active2 setNavTab={setNavTab}/>} />;
  const tb3 = <ThirdTab menu={<TabsMenu active3 setNavTab={setNavTab}/>} />;

  const [showTb1, setShowTb1] = React.useState(true);
  const [showTb2, setShowTb2] = React.useState(false);
  const [showTb3, setShowTb3] = React.useState(false);


  const [tabRender, setTabRender] = React.useState(tb1);

  const avancar = (e) => {
    e.preventDefault();

    if (showTb1) {
      setTabName('SecondTab');
      setTabRender(tb2);
      setShowTb1(false);
      setShowTb2(true);
    } else if (showTb2) {
      setTabName('ThirdTab');
      setTabRender(tb3);
      setShowTb2(false);
      setShowTb3(true);
    } else if (showTb3) {
      setTabName('SuccessTab');
      setTabRender(<SuccessTab />);
      setShowTb1(false);
      setShowTb2(false);
      setShowTb3(false);
    }
  };
console.log(showTb1, showTb2, showTb3);
  React.useEffect(() => {
    if (navTab === 'basic') {
      setTabName('First Tab');
      setTabRender(tb1);
      setShowTb1(true);
      setShowTb2(false);
      setShowTb3(false);
    } else if (navTab === 'social') {
      setTabName('Second Tab');
      setTabRender(tb2);
      setShowTb1(false);
      setShowTb2(true);
      setShowTb3(false);
    } else if (navTab === 'certificates') {
      setTabName('Third Tab');
      setTabRender(tb3);
      setShowTb1(false);
      setShowTb2(false);
      setShowTb3(true);
    }
  }, [navTab]);

  return (
    <>
      <header>
        <div className='header-text'>
          <h3 className='header-text-1'>Forms</h3>
          <h2 className='header-text-2'>{tabName}</h2>
        </div>
      </header>
      <main>
        <div className='form-container'>
          <form method='post' onSubmit={avancar}>
            <div className='tab-container'>{tabRender}</div>
          </form>
        </div>
      </main>
    </>
  );
};

export default App;
