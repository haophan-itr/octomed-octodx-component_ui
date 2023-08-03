import { PageHeader, Divider } from 'antd';
import React from 'react';

import MenuComponent from '../../componentUI/components/Menu';
import CardUser from '../../componentUI/components/cardUser';
import IconCircle from '../../static/images/icon-circle-black.svg';

import './styles.scss';

const MenuPage = props => (
  <div className="container-menu">
    <PageHeader
      title="MENU"
      subTitle="component"
      className="title-header-menu"
    />
    <Divider />
    <div className="menu-large">
      <h2>Menu (Large)</h2>
      <MenuComponent isLarge isIconExpand />
      <MenuComponent isLarge isIconExpand icon={<img src={IconCircle} alt="Circle Icon" />} />
    </div>
    <div className="menu-large">
      <h2>Menu (Large)</h2>
      <MenuComponent isLarge />
      <MenuComponent isLarge icon={<img src={IconCircle} alt="Circle Icon" />} />
    </div>
    <div className="menu-small">
      <h2>Menu (Small)</h2>
      <MenuComponent isIconExpand />
      <MenuComponent isIconExpand icon={<img src={IconCircle} alt="Circle Icon" />} />
    </div>
    <div className="menu-small">
      <h2>Menu (Small)</h2>
      <MenuComponent />
      <MenuComponent icon={<img src={IconCircle} alt="Circle Icon" />} />
    </div>
    <div className="container-card-user">
      <CardUser />
    </div>
  </div>
);

export default MenuPage;
