import React, { useRef, useState } from 'react';
import { Divider, PageHeader, Tabs } from 'antd';


import CRegularInput from './regularInput';
import CSingleSelect from './singleSelect';
import CMultiSelect from './multiSelect';
import CIconInput from './iconInput';
import CSearchInput from './searchInput';
import CCodeBlockInput from './codeBlockInput';
import CLongTextInput from './longTextInput';
import CDataPickerRange from './dataPickerRange';
import CRadioInput from './radioInput';
import CToggleInput from './toggleInput';
import CCheckboxInput from './checkboxInput';
import CSteps from './steps';
import CBadge from './badge';
import CAntd from './antd';
import CSlider from './slider';
import CMessage from './message';


import './styles.scss';

const { TabPane } = Tabs;
const InputPage = (props) => {
  const [key, setKey] = useState('1');

  const onSetTab = (number) => {
    setKey(number);
  };

  return (
    <div className="container-input">
      <PageHeader
        title="Input"
        subTitle="component"
        className="title-header-input"
      />
      <Divider />
      <Tabs defaultActiveKey={key} onChange={onSetTab}>
        <TabPane tab="Regular Input" key="1">
          <CRegularInput />
        </TabPane>
        <TabPane tab="Single Select" key="2">
          <CSingleSelect />
        </TabPane>
        <TabPane tab="Multi Select" key="3">
          <CMultiSelect />
        </TabPane>
        <TabPane tab="Icon Input" key="4">
          <CIconInput />
        </TabPane>
        {/* <TabPane tab="Search Input" key="5">
          <CSearchInput />
        </TabPane> */}
        <TabPane tab="Code Block Input" key="6">
          <CCodeBlockInput />
        </TabPane>
        <TabPane tab="Long Text input" key="7">
          <CLongTextInput />
        </TabPane>
        <TabPane tab="Data Picker Range" key="8">
          <CDataPickerRange />
        </TabPane>
        <TabPane tab="Radio Input" key="9">
          <CRadioInput />
        </TabPane>
        {/* <TabPane tab="Toggle Input" key="10">
          <CToggleInput />
        </TabPane> */}
        <TabPane tab="Checkbox Input" key="11">
          <CCheckboxInput />
        </TabPane>
        <TabPane tab="Steps" key="12">
          <CSteps />
        </TabPane>
        <TabPane tab="Badge" key="13">
          <CBadge />
        </TabPane>
        {/* <TabPane tab="Antd" key="14">
          <CAntd />
        </TabPane> */}
        <TabPane tab="Slider" key="15">
          <CSlider />
        </TabPane>
        {/* <TabPane tab="Message" key="16">
          <CMessage />
        </TabPane> */}
      </Tabs>
    </div>
  );
};

export default InputPage;
