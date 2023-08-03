import { Divider, PageHeader } from 'antd';
import React, { useRef } from 'react';

import SimpleVertical from '../../componentUI/components/Tabs/SimpleVertical';
import CollapseAndSub from '../../componentUI/components/Tabs/CustomVertical/CollapseAndSub';
import Vertical from '../../componentUI/components/Tabs/CustomVertical/Vertical';
import Vertical1 from '../../componentUI/components/Tabs/Sidebar';
import NavTab from '../../componentUI/components/Tabs/Nav';

import IconWhite from '../../static/images/icon-circle-white.svg';

import './styles.scss';

const TabPage = (props) => {
  const reportTypeListInline = useRef([]);
  const menu = useRef([
    {
      id: 0,
      name: 'Tab title',
      link: '/#',
      icon: IconWhite,
    },
    {
      id: 1,
      name: 'Tab title',
      link: '/321',
      icon: IconWhite,
    },
  ]);

  return (
    <div className="container-tab">
      <PageHeader
        title="TAB"
        subTitle="component"
        className="title-header-tab"
      />
      <Divider />
      <div className="content-tab">
        <div className="container-nav-tab">
          <div className="content-nav">
            <h3>Horizontal tab 1 (Small)</h3>
            <NavTab activeDefault={1} />
            <NavTab typeBadge="dot-badge" activeDefault={1} />
            <NavTab typeBadge="num-badge" activeDefault={1} num={10} />
            {/* <NavTab typeBadge="text-badge" activeDefault={3} text="Badge" /> */}
          </div>
          <div className="content-nav">
            <h3>Horizontal tab 1 (Large)</h3>
            <NavTab isLarge activeDefault={1} />
            <NavTab typeBadge="dot-badge" isLarge activeDefault={1} />
            <NavTab typeBadge="num-badge" isLarge activeDefault={1} num={10} />
            {/* <NavTab typeBadge="text-badge" isLarge activeDefault={3} text="Badge" /> */}
          </div>
        </div>
        <Divider />
        <h2>Horizontal tab 2 (Large)</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <div style={{ width: '10%' }}>
            <SimpleVertical isLarge />
          </div>
          <div style={{ width: '15%' }}>
            <SimpleVertical isLarge badge />
          </div>
        </div>
        <Divider />
        <h2>Horizontal tab 2 (Small)</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <div style={{ width: '10%' }}>
            <SimpleVertical />
          </div>
          <div style={{ width: '15%' }}>
            <SimpleVertical badge />
          </div>
        </div>
        <Divider />
        <div className="content-vertical-1">
          <div className="ver1-large">
            <h2>Vertical tab 1 (large)</h2>
            <i className="warning">NOTE: Please do not click on tab, only review (hover your mouse) UI !</i>
            <Vertical1 isLarge menu={menu.current} className="custom-vertical-large" />
            <Vertical1 isLarge menu={menu.current} className="custom-vertical-large-collapse" />
          </div>
          <div className="ver1-small">
            <h2>Vertical tab 1 (small)</h2>
            <i className="warning">NOTE: Please do not click on tab, only review (hover your mouse) UI !</i>
            <Vertical1 menu={menu.current} className="custom-vertical-small" />
            <Vertical1 menu={menu.current} className="custom-vertical-small-collapse" />
          </div>
        </div>
        <Divider />
        <div className="container-collapse">
          <h2>Vertical tab 2</h2>
          <div className="content-collapse">
            <CollapseAndSub showIcon />
            <CollapseAndSub />
          </div>
        </div>
        <div className="container-vertical">
          <h2>Vertical tab 2</h2>
          <div className="content-vertical">
            <Vertical showIcon />
            <Vertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPage;
