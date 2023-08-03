import React, { useRef } from 'react';
import { Button, Divider } from 'antd';
import _ from 'lodash';

import CheckboxInputBlock from '../../../componentUI/components/Inputs/Block/CheckboxInputBlock';
import Checkbox from '../../../componentUI/components/Inputs/Block/checkbox';
import CheckAll from '../../../componentUI/components/Inputs/Block/CheckboxInput';
import { useMergeState } from '../../../utils/customHooks';

import './styles.scss';

const CCheckboxInput = () => {
  const [state, setState] = useMergeState({
    check1: 'Item 1',
    check2: '',
    checkAll: false,
  });
  const list1 = useRef([
    {
      label: 'Item 1',
      value: 'Item 1',
      disabled: true,
    },
    {
      label: 'Item 2',
      value: 'Item 2',
    },
    {
      label: 'Item 3',
      value: 'Item 3',
      disabled: true,
    },
  ]);

  const list2 = useRef([
    {
      label: 'Item 1',
      value: 'Item 1',
    },
    {
      label: 'Item 2',
      value: 'Item 2',
    },
    {
      label: 'Item 3',
      value: 'Item 3',
    },
  ]);

  const onCheckBox = (name, value) => {
    setState({ [name]: value });
  };

  const unCheck = () => {
    setState({ check2: [] });
  };

  const onCheckAll = (e, name) => {
    const isChecked = e.target.checked;
    setState({ [name]: isChecked });
  };

  return (
    <div className="container-checkbox">
      <div className="checkbox-large">
        <h2>Checkbox input block (Large)</h2>
        <Checkbox
          isLarge
          name="check1"
          defaultValue={['Item 1']}
          options={list1.current}
          onChange={onCheckBox}
        />
        <Button onClick={unCheck}>Uncheck</Button>
        <Checkbox
          isGroup={false}
          isLarge
          checked={state.checkAll}
          name="checkAll"
          onChange={onCheckAll}
        />
        <Checkbox
          isLarge
          name="check2"
          value={state.check2}
          options={list2.current}
          onChange={onCheckBox}
        />
      </div>
      <Divider />
      <div className="checkbox-small">
        <h2>Checkbox input block (Large)</h2>
        <Checkbox
          name="check1"
          defaultValue={['Item 1']}
          options={list1.current}
          onChange={onCheckBox}
        />
        <Checkbox
          name="check2"
          options={list2.current}
          onChange={onCheckBox}
        />
      </div>
      {/* <div>Checkbox input block (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>
        {_.map(list.current, (data, index) => (
          <CheckboxInputBlock
            checked={data.value === stateCheck}
            data={data}
            id={index}
            isLarge
            name="checkbox"
            value={data.value}
            onChange={onCheckBox}
          />
        ))}
      </div>
      <div>Checkbox input block (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        {_.map(list.current, (data, index) => (
          <CheckboxInputBlock
            checked={data.value === stateCheck}
            data={data}
            id={index}
            name="checkbox"
            value={data.value}
            onChange={onCheckBox}
          />
        ))}
      </div> */}
    </div>
  );
};

export default CCheckboxInput;
