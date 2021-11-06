import React from 'react';
import TabsMenu from './Components/TabsMenu/TabsMenu';
import FirstTab from './Pages/FirstTab/FirstTab';
import SecondTab from './Pages/SecondTab/SecondTab';
import ThirdTab from './Pages/ThirdTab/ThirdTab';
import './App.css';
import SuccessTab from './Pages/SuccessTab/SucessTab';

const App = () => {
  const [topNav, setTopNav] = React.useState(null);
  const [tabName, setTabName] = React.useState('FirstTab');
  const [navTab, setNavTab] = React.useState();

  const [showTab1, setShowTab1] = React.useState(true);
  const [showTab2, setShowTab2] = React.useState(false);
  const [showTab3, setShowTab3] = React.useState(false);

  const [BlockTab2, setBlockTab2] = React.useState(false);
  const [BlockTab3, setBlockTab3] = React.useState(true);

  const tb1 = (
    <FirstTab
      setBlockTab2={setBlockTab2}
      setBlockTab3={setBlockTab3}
      menu={
        <TabsMenu
          active1
          setNavTab={setNavTab}
          setBlockTab2={setBlockTab2}
          setBlockTab3={setBlockTab3}
        />
      }
    />
  );

  const tb2 = (
    <SecondTab
      setBlockTab3={setBlockTab3}
      menu={
        <TabsMenu
          active2
          setNavTab={setNavTab}
          setTopNav={setTopNav}
          BlockTab2={BlockTab2}
          BlockTab3={BlockTab3}
        />
      }
    />
  );

  const tb3 = (
    <ThirdTab
      menu={
        <TabsMenu
          active3
          setNavTab={setNavTab}
          setTopNav={setTopNav}
          BlockTab2={BlockTab2}
          BlockTab3={BlockTab3}
        />
      }
    />
  );

  const [tabRender, setTabRender] = React.useState(tb1);

  const setShowTab1_true = () => {
    setShowTab1(true);
    setShowTab2(false);
    setShowTab3(false);
  };
  const setShowTab2_true = () => {
    setShowTab1(false);
    setShowTab2(true);
    setShowTab3(false);
  };
  const setShowTab3_true = () => {
    setShowTab1(false);
    setShowTab2(false);
    setShowTab3(true);
  };
  const setShowSuccessTab = () => {
    setShowTab1(false);
    setShowTab2(false);
    setShowTab3(false);
  };



  React.useEffect(() => {
    if (navTab === 'FirstTab') {
      setTabName('FirstTab');
      setTabRender(tb1);
      setShowTab1_true();
    } else if (navTab === 'SecondTab') {
      setTabName('SecondTab');
      setTabRender(tb2);
      setShowTab2_true();
    } else if (navTab === 'ThirdTab') {
      setTabName('ThirdTab');
      setTabRender(tb3);
      setShowTab3_true();
    } else if (navTab === 'SuccessTab') {
      setTabName('SuccessTab');
      setTabRender(<SuccessTab />);
      setShowSuccessTab();
    }
  }, [navTab]);
  



  const avancar = (e) => {
    e.preventDefault();

    if (showTab1) {
      setTabRender(tb2);
      setTabName('Second Tab');
      setTopNav('tb2');
      setShowTab2_true();
    } else if (showTab2) {
      setTabRender(tb3);
      setTabName('Third Tab');
      setTopNav('tab3');
      setShowTab3_true();
    } else if (showTab3) {
      setTabRender(<SuccessTab />);
      setTabName('Success');
      setShowSuccessTab();
    }
  };

  return (
    <>
      <header>
        <div className="header-text">
          <h3 className="header-text-1">Forms</h3>
          <h2 className="header-text-2">{tabName}</h2>
        </div>
      </header>
      <main>
        <div className="form-container">
          <form method="post" onSubmit={avancar}>
            <div className="tab-container">{tabRender}</div>
          </form>
        </div>
      </main>
    </>
  );
};

export default App;

