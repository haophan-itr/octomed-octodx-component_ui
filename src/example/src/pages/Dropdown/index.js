import React, { useRef, useState } from 'react';
import { Divider, PageHeader } from 'antd';
import Dropdown from '../../componentUI/components/Dropdown';

import './styles.scss';

const DropdownPage = (props) => {
  const [initialDropdown, setInitialDropdown] = useState();
  const filterDropdown = useRef([
    'Dropdown 1',
    'Dropdown 2',
    'Dropdown 3',
    'Dropdown 4',
  ]);

  const onChangeDropdown = (name, value) => {
    setInitialDropdown(value);
  };

  return (
    <div className="container-dropdown">
      <PageHeader
        title="DROPDOWN"
        subTitle="component"
        className="title-header-dropdown"
      />
      <Divider />
      <div className="dropdown-box">
        <h2>Dropdown Large (Height: 40px)</h2>
        <Dropdown
          isLarge
          options={filterDropdown.current}
          value={initialDropdown}
          onChange={onChangeDropdown}
        />
        <Dropdown
          isLarge
          disabled
          options={filterDropdown.current}
          value={initialDropdown}
          onChange={onChangeDropdown}
        />
      </div>
      <Divider />
      <div className="dropdown-box">
        <h2>Dropdown Small (Height: 32px)</h2>
        <Dropdown
          options={filterDropdown.current}
          value={initialDropdown}
          onChange={onChangeDropdown}
        />
        <Dropdown
          disabled
          options={filterDropdown.current}
          value={initialDropdown}
          onChange={onChangeDropdown}
        />
      </div>
    </div>
  );
};

export default DropdownPage;
