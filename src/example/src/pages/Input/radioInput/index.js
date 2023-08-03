import React, { useRef } from 'react';
import { Divider } from 'antd';
import _ from 'lodash';

import RadioInput from '../../../componentUI/components/Inputs/Block/RadioInput';
import RadioButton from '../../../componentUI/components/Inputs/Group/radioButton';
import RadioInputBlock from '../../../componentUI/components/Inputs/Block/RadioInputBlock';
import HorizontalRadioInputGroup from '../../../componentUI/components/Inputs/Group/HorizontalRadioInputGroup';
import VerticalRadioInputGroup from '../../../componentUI/components/Inputs/Group/VerticalRadioInputGroup';

import { useMergeState } from '../../../utils/customHooks';

import './styles.scss';

const CRadioInput = () => {
  const [state, setState] = useMergeState({
    radio1: 'Test 1',
    radio2: 'Test 1',
  });

  const list1 = useRef([
    {
      label: 'Test 1',
      value: 'Test 1',
      disabled: true,
    },
    {
      label: 'Test 2',
      value: 'Test 2',
      disabled: true,
    },
    {
      label: 'Test 3',
      value: 'Test 3',
      disabled: true,
    },
  ]);

  const list2 = useRef([
    {
      label: 'Test 1',
      value: 'Test 1',
    },
    {
      label: 'Test 2',
      value: 'Test 2',
    },
    {
      label: 'Test 3',
      value: 'Test 3',
      disabled: true,
    },
  ]);

  const onChangeRadioButton = (name, value) => {
    setState({ [name]: value });
  };

  return (
    <div className="container-radio-button">
      <div className="radio-large">
        <h2>Radio Horizontal (Large)</h2>
        <RadioButton
          defaultValue="Test 2"
          name="radio1"
          isLarge
          options={list1.current}
          onChange={onChangeRadioButton}
          // value={state.radio1}
        />
        <Divider />
        <h2>Radio Verical (Large)</h2>
        <RadioButton
          className="user-vertical"
          name="radio1"
          isVertical
          isLarge
          options={list2.current}
          onChange={onChangeRadioButton}
          // value={state.radio1}
        />
      </div>
      <div className="radio-large">
        <h2>Radio Horizontal (Small)</h2>
        <RadioButton
          defaultValue="Test 1"
          name="radio2"
          options={list1.current}
          onChange={onChangeRadioButton}
          // value={state.radio2}
        />
        <Divider />
        <h2>Radio Vertical (Small)</h2>
        <RadioButton
          className="user-vertical"
          isVertical
          name="radio2"
          options={list2.current}
          onChange={onChangeRadioButton}
          // value={state.radio2}
        />
      </div>

      {/* <div>Radio input</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        No check
        <RadioInput />

        Checked
        <RadioInput
          checked
        />

        No check, disabled
        <RadioInput
          disabled
        />

        Checked, disabled
        <RadioInput
          checked
          disabled
        />
      </div>
      <Divider />
      <div>Radio input block (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>
        {_.map(list1.current, (data, index) => (
          <RadioInputBlock
            checked={data.value === state.checkbox1}
            data={data}
            id={index}
            isLarge
            name="checkbox1"
            value={data.value}
            onChange={onChange}
          />
        ))}


      </div>
      <div>Radio input block (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        {_.map(list2.current, (data, index) => (
          <RadioInputBlock
            checked={data.value === state.checkbox2}
            data={data}
            id={index}
            name="checkbox2"
            value={data.value}
            onChange={onChange}
          />
        ))}

      </div>
      <Divider />
      <div>Vertical Radio Input Group (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>
        {_.map(list3.current, (data, index) => (
          <VerticalRadioInputGroup
            id1={index}
            id2={index}
            title="Title"
            data1={list3.current}
            data2={list3.current}
            name1="checkbox3"
            name2="checkbox4"
            onChange1={onChange}
            onChange2={onChange}
            isLarge
            checked1={data.value === state.checkbox3}
            checked2={data.value === state.checkbox4}
          />
        ))}

        {_.map(list3.current, (data, index) => (
          <VerticalRadioInputGroup
            index={index}
            title="Title"
            data1={list3.current}
            data2={list3.current}
            name1="checkbox5"
            name2="checkbox6"
            isLarge
            onChange1={onChange}
            onChange2={onChange}
            checked1={data.value === state.checkbox5}
            checked2={data.value === state.checkbox6}
          />
        ))}
      </div> */}
      {/* <div>Vertical Radio Input Group (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        {_.map(list4.current, (data, index) => (
          <VerticalRadioInputGroup
            title="Title"
            index={index}
            data1={list4.current}
            data2={list4.current}
            name1="checkbox7"
            name2="checkbox8"
            onChange1={onChange}
            onChange2={onChange}
            checked1={data.value === state.checkbox7}
            checked2={data.value === state.checkbox8}
          />
        ))}


        {_.map(list4.current, (data, index) => (
          <VerticalRadioInputGroup
            title="Title"
            index={index}
            data1={list4.current}
            data2={list4.current}
            name1="checkbox9"
            name2="checkbox10"
            onChange1={onChange}
            onChange2={onChange}
            checked1={data.value === state.checkbox9}
            checked2={data.value === state.checkbox10}
          />
        ))}
      </div> */}
      {/* <Divider /> */}

      {/* <div>Horizontal Radio Input Group (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>

        <HorizontalRadioInputGroup
          title="Title"
          data1={list1.current}
          data2={list1.current}
          name1="checkbox9"
          name2="checkbox10"
          onChange1={onChange}
          onChange2={onChange}
          isLarge
          checked2
        />

        <HorizontalRadioInputGroup
          title="Title"
          data1={list2.current}
          data2={list2.current}
          name1="checkbox9"
          name2="checkbox10"
          onChange1={onChange}
          onChange2={onChange}
          isLarge
          checked2
        />
      </div> */}
      {/* <div>Horizontal Radio Input Group (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>

        <HorizontalRadioInputGroup
          title="Title"
          data1={list3.current}
          data2={list3.current}
          name1="checkbox9"
          name2="checkbox10"
          onChange1={onChange}
          onChange2={onChange}
          checked2
        />

        <HorizontalRadioInputGroup
          title="Title"
          data1={list1.current}
          data2={list1.current}
          name1="checkbox9"
          name2="checkbox10"
          onChange1={onChange}
          onChange2={onChange}
          checked1={state.check}
          checked2
        />
      </div> */}
    </div>
  );
};

export default CRadioInput;
