import { Divider, PageHeader } from 'antd';
import React, { useState } from 'react';

import ToggleInput from '../../componentUI/components/Inputs/Block/ToggleInput';

import './styles.scss';

const SwitchPage = (props) => {
  const [value, setValue] = useState(false);
  return (
    <div className="switch-page">
      <PageHeader
        title="SWITCH"
        subTitle="component"
        className="title-header-switch"
      />
      <Divider />
      <div className="inputs-container">
        <div className="switch1">
          <h2>Text Only (Large)</h2>
          <Divider />
          <ToggleInput
            isLarge
            isOn={value}
            handleToggle={() => setValue(!value)}
          />
        </div>
        <div className="switch2">
          <h2>Text Only (Small)</h2>
          <Divider />
          <ToggleInput
            isOn={value}
            handleToggle={() => setValue(!value)}
          />
        </div>
        <div className="switch3">
          <h2>Text Right (Large)</h2>
          <Divider />
          <ToggleInput
            label="Demo"
            isOn={value}
            isLarge
            handleToggle={() => setValue(!value)}
          />
        </div>
        <div className="switch4">
          <h2>Text Right (Small)</h2>
          <Divider />
          <ToggleInput
            label="Demo"
            isOn={value}
            handleToggle={() => setValue(!value)}
          />
        </div>
        <div className="switch5">
          <h2>Text Left (Large)</h2>
          <Divider />
          <ToggleInput
            label="Demo"
            isOn={value}
            isLarge
            isTextLeft
            handleToggle={() => setValue(!value)}
          />
        </div>
        <div className="switch6">
          <h2>Text Left (Small)</h2>
          <Divider />
          <ToggleInput
            label="Demo"
            isOn={value}
            isTextLeft
            handleToggle={() => setValue(!value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchPage;
