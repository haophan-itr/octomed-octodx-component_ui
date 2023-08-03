import React, { useRef, useState } from 'react';

import SelectInput from '../../../componentUI/components/Inputs/Block/SelectInput';

import IconIndicator from '../../../static/images/arrow.svg';

import './styles.scss';

const CMultiSelect = () => {
  const [multiValue, setMultiValue] = useState();
  const list = useRef([
    {
      label: 'All',
      value: 'All viability',
    },
    {
      label: 'Viable',
      value: 'Viable',
    },
    {
      label: 'Non-viable',
      value: 'Non-viable',
    },
  ]);

  const onChangeMulti = (name, value) => {
    setMultiValue(value);
  };

  return (
    <div className="container-multi-value">
      <div>Multi Select (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 124 }}>
        <SelectInput
          isSearchable
          classNamePrefix="test-select"
          name="input2"
          placeholder="Select..."
          isMulti
          options={list.current}
          value={multiValue}
          onChange={onChangeMulti}
          isLarge
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />

        <SelectInput
          isSearchable
          classNamePrefix="test-select"
          name="input2"
          placeholder="Select..."
          isMulti
          options={list.current}
          value={multiValue}
          onChange={onChangeMulti}
          disabled
          isLarge
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />
      </div>
      <div>Multi Select (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 120 }}>
        <SelectInput
          isSearchable
          classNamePrefix="test-select"
          name="input2"
          placeholder="Select..."
          isMulti
          options={list.current}
          value={multiValue}
          onChange={onChangeMulti}
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />

        <SelectInput
          isSearchable
          classNamePrefix="test-select"
          name="input2"
          placeholder="Select..."
          isMulti
          options={list.current}
          value={multiValue}
          onChange={onChangeMulti}
          disabled
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />
      </div>
    </div>
  );
};

export default CMultiSelect;
