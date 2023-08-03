import React, { useState } from 'react';
import { PageHeader, Tabs, Divider } from 'antd';

import PrimaryButton from './primary';
import PrimaryButton2 from './primary2';
import SecondaryButton from './secondary';
import NegativeButton from './negative';
import ButtonIcon from './buttonIcon';
import OnlyIcon from './onlyIcon';
import Toggle from './toggleButton';
import Tooltip from './tooltip';

import './styles.scss';

const { TabPane } = Tabs;

const ButtonPage = (props) => {
  const [key, setKey] = useState('1');

  const onSetTab = (number) => {
    setKey(number);
  };

  return (
    <div className="container-button">
      <PageHeader
        title="BUTTON"
        subTitle="component"
        className="title-header-button"
      />
      <Divider />
      <Tabs defaultActiveKey={key} onChange={onSetTab}>
        <TabPane tab="Text Only" key="1">
          <div className="without-icon">
            <PrimaryButton />
            <PrimaryButton2 />
            <SecondaryButton />
            <NegativeButton />
          </div>
        </TabPane>
        <TabPane tab="Including Icon" key="2">
          <ButtonIcon />
        </TabPane>
        <TabPane tab="Icon Only" key="3">
          <OnlyIcon />
        </TabPane>
        <TabPane tab="Toggle" key="4">
          <Toggle />
        </TabPane>
        <TabPane tab="Tooltip" key="5">
          <Tooltip />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ButtonPage;
