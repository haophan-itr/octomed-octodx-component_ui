import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';

import Sidebar from '../../componentUI/components/Tabs/Sidebar';
import Footer from '../../componentUI/components/Footer';

import ButtonPage from '../../pages/Buttons';
import DropdownPage from '../../pages/Dropdown';
import TabPage from '../../pages/Tab';
import InputPage from '../../pages/Input';
import MenuPage from '../../pages/Menu';
import SearchCombinePage from '../../pages/Search';
import AutoCompletePage from '../../pages/AutoComplete';
import DropzonePage from '../../pages/Dropzone';
import SwitchPage from '../../pages/Switch';
import TablePage from '../../pages/Table';

import iconCircle from '../../static/images/icon-circle-white.svg';

import './styles.scss';

const Main = (props) => {
  const menu = [
    {
      id: 0,
      name: 'Button',
      link: '/buttons',
      icon: iconCircle,
    },
    {
      id: 1,
      name: 'Dropdown',
      link: '/dropdowns',
      icon: iconCircle,
    },
    {
      id: 2,
      name: 'Tab',
      link: '/tabs',
      icon: iconCircle,
    },
    {
      id: 3,
      name: 'Input',
      link: '/inputs',
      icon: iconCircle,
    },
    {
      id: 4,
      name: 'Menu',
      link: '/menus',
      icon: iconCircle,
    },
    {
      id: 5,
      name: 'Search',
      link: '/searchs',
      icon: iconCircle,
    },
    // {
    //   id: 6,
    //   name: 'AutoComplete',
    //   link: '/autocomplete',
    //   icon: iconCircle,
    // },
    {
      id: 7,
      name: 'Dropzone',
      link: '/dropzone',
      icon: iconCircle,
    },
    {
      id: 8,
      name: 'Switch',
      link: '/switch',
      icon: iconCircle,
    },
    {
      id: 9,
      name: 'Table',
      link: '/table',
      icon: iconCircle,
    },
  ];
  return (
    <div className="main">
      <Sidebar isLarge menu={menu} />
      <div id="container-main-page">
        <Switch>
          <Route exact path="/buttons" name="Button Page" component={ButtonPage} />
          <Route exact path="/dropdowns" name="Dropdown Page" component={DropdownPage} />
          <Route exact path="/tabs" name="Tab Page" component={TabPage} />
          <Route exact path="/inputs" name="Input Page" component={InputPage} />
          <Route exact path="/menus" name="Menu Page" component={MenuPage} />
          <Route exact path="/searchs" name="SearchCombine Page" component={SearchCombinePage} />
          {/* <Route exact path="/autocomplete" name="Autocomplete Page" component={AutoCompletePage} /> */}
          <Route exact path="/dropzone" name="Dropzone Page" component={DropzonePage} />
          <Route exact path="/switch" name="Switch Page" component={SwitchPage} />
          <Route exact path="/table" name="Table Page" component={TablePage} />
          <Redirect from="/" to="/buttons" />
        </Switch>
      </div>
      <Footer textLeft="Core components" />
    </div>
  );
};

Main.defaultProps = {

};

Main.propTypes = {

};

export default Main;
