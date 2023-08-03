import React, { useRef, useState } from 'react';
import { useMergeState } from '../../../utils/customHooks';

import SelectInput from '../../../componentUI/components/Inputs/Block/SelectInput';
import IconIndicator from '../../../static/images/arrow.svg';

import './styles.scss';

const CSingleSelect = () => {
  const [state, setState] = useMergeState({
    option: null,
    reason: null,
  });
  // const reasonForRMAList = useRef([
  //   {
  //     value: 'Reason 1',
  //     label: 'Reason 1',
  //   },
  //   {
  //     value: 'Reason 2',
  //     label: 'Reason 2',
  //   },
  //   {
  //     value: 'Reason 3',
  //     label: 'Reason 3',
  //   },
  // ]);
  const optionSelect = useRef([
    {
      value: 'Option 1',
      label: 'Option 1',
    },
    {
      value: 'Option 2',
      label: 'Option 2',
    },
    {
      value: 'Option 3',
      label: 'Option 3',
    },
    {
      value: 'Option 4',
      label: 'Option 4',
    },
  ]);
  // const onChangeRMADetails = (name, value) => {
  //   setState({ [name]: value });
  // };
  const onChangeSelect = (name, value) => {
    setState({ [name]: value });
  };
  return (
    <div className="container-single-select">
      <div>Single Select (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 124 }}>
        <SelectInput
          classNamePrefix="test-select"
          isSearchable
          className="pa3"
          name="option"
          placeholder="Select..."
          isLarge
          options={optionSelect.current}
          onChange={onChangeSelect}
          value={state.option}
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />
        <SelectInput
          classNamePrefix="test-select"
          isSearchable
          className="pa3"
          name="option"
          placeholder="Select..."
          isLarge
          options={optionSelect.current}
          onChange={onChangeSelect}
          value={state.option}
          isError
          errorMessage="Error Message"
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />

        <SelectInput
          classNamePrefix="test-select"
          isSearchable
          className="pa3"
          name="option"
          placeholder="Select..."
          options={optionSelect.current}
          onChange={onChangeSelect}
          value={state.option}
          isLarge
          disabled
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />

      </div>
      <div>Single Select (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <SelectInput
          isSearchable
          classNamePrefix="test-select"
          className="pa3"
          name="option"
          placeholder="Select..."
          options={optionSelect.current}
          onChange={onChangeSelect}
          value={state.option}
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />
        <SelectInput
          isSearchable
          classNamePrefix="test-select"
          className="pa3"
          name="option"
          placeholder="Select..."
          options={optionSelect.current}
          onChange={onChangeSelect}
          value={state.option}
          isError
          errorMessage="Error Message"
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />
        <SelectInput
          isSearchable
          classNamePrefix="test-select"
          className="pa3"
          name="option"
          placeholder="Select..."
          options={optionSelect.current}
          onChange={onChangeSelect}
          value={state.option}
          disabled
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />

      </div>
    </div>
  );
};

export default CSingleSelect;
