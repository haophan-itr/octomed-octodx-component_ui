import React, { useRef } from 'react';
import { Divider } from 'antd';
import { useMergeState } from '../../../utils/customHooks';

import RegularInput from '../../../componentUI/components/Inputs/Block/RegularInput';
import SingleRegularListInput from '../../../componentUI/components/Inputs/Group/SingleRegularListInput';
import SingleRegularTitleInput from '../../../componentUI/components/Inputs/Group/SingleRegularTitleInput';
import DoubleRegularInput from '../../../componentUI/components/Inputs/Group/DoubleRegularInput';
import IconIndicator from '../../../static/images/arrow.svg';

import './styles.scss';

const CRegularInput = () => {
  const [state, setState] = useMergeState({
    textContent: '',
    textContent2: {
      label: 'C',
      value: 'C',
    },
  });

  const dataListInput = useRef([
    {
      label: 'F',
      value: 'F',
    },
    {
      label: 'C',
      value: 'C',
    },
  ]);

  const onChangeText = (name, value) => {
    setState({
      textContent: value,
    });
  };

  const onChangeText2 = (name, value) => {
    setState({ [name]: value });
  };

  return (
    <div>
      <div>Regular Input (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <RegularInput
          name="textContent"
          value={state.textContent}
          placeholder="Type something"
          onChange={onChangeText}
          isLarge
        />
        <RegularInput
          name="textContent"
          value={state.textContent}
          placeholder="Type something"
          onChange={onChangeText}
          isLarge
          isError
          errorMessage="Error message"
        />
        <RegularInput
          name="Regular Input"
          placeholder="Type something"
          isLarge
          disabled
        />
      </div>
      <div>Regular Input (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <RegularInput
          name="textContent"
          value={state.textContent}
          placeholder="Type something"
          onChange={onChangeText}
        />
        <RegularInput
          name="textContent"
          isError
          errorMessage="Error message"
          value={state.textContent}
          placeholder="Type something"
          onChange={onChangeText}
        />
        <RegularInput
          name="Regular Input"
          placeholder="Type something"
          disabled
        />
      </div>
      <Divider />
      <div>Single Regular Title Input (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>
        <SingleRegularTitleInput
          title="Title"
          placeholder="Place holder"
          isLarge
          value={state.textContent}
          onChange={onChangeText}
        />
        <SingleRegularTitleInput
          title="Title"
          placeholder="Place holder"
          isError
          errorMessage="Error message"
          isLarge
          value={state.textContent}
          onChange={onChangeText}
        />
        <SingleRegularTitleInput
          title="Title (Disabled)"
          placeholder="Place holder"
          isLarge
          value={state.textContent}
          onChange={onChangeText}
          disabled
        />
      </div>
      <div>Single Regular Title Input (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>
        <SingleRegularTitleInput
          title="Title"
          placeholder="Place holder"
          value={state.textContent}
          onChange={onChangeText}
        />
        <SingleRegularTitleInput
          title="Title"
          placeholder="Place holder"
          isError
          errorMessage="Error message"
          value={state.textContent}
          onChange={onChangeText}
        />
        <SingleRegularTitleInput
          title="Title (Disabled)"
          placeholder="Place holder"
          value={state.textContent}
          onChange={onChangeText}
          disabled
        />
      </div>
      <Divider />
      <div>Single Regular List Input (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>
        <SingleRegularListInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          name1="textContext"
          name2="textContent2"
          isLarge
          options={dataListInput.current}
          value1={state.textContent}
          value2={state.textContent2}
          onChange1={onChangeText}
          onChange2={onChangeText2}
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />
        <SingleRegularListInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          name1="textContext"
          name2="textContent2"
          isError
          errorMessage="Error message"
          isLarge
          options={dataListInput.current}
          value1={state.textContent}
          value2={state.textContent2}
          onChange1={onChangeText}
          onChange2={onChangeText2}
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />
        <SingleRegularListInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          name1="textContext"
          name2="textContent2"
          value1={state.textContent}
          value2={state.textContent2}
          options={dataListInput.current}
          onChange1={onChangeText}
          onChange2={onChangeText2}
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
          disabled1
          disabled2
          isLarge
        />
      </div>
      <div>Single Regular List Input (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <SingleRegularListInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          name1="textContext"
          name2="textContent2"
          value1={state.textContent}
          value2={state.textContent2}
          options={dataListInput.current}
          onChange1={onChangeText}
          onChange2={onChangeText2}
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />
        <SingleRegularListInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          name1="textContext"
          name2="textContent2"
          isError
          errorMessage="Error message"
          value1={state.textContent}
          value2={state.textContent2}
          options={dataListInput.current}
          onChange1={onChangeText}
          onChange2={onChangeText2}
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
        />
        <SingleRegularListInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          name1="textContext"
          name2="textContent2"
          value1={state.textContent}
          value2={state.textContent2}
          onChange1={onChangeText}
          onChange2={onChangeText2}
          options={dataListInput.current}
          dropdownIndicatorComponent={<img src={IconIndicator} alt="Icon" />}
          isHideDefaultDropdownIndicator
          disabled1
          disabled2
        />
      </div>
      <Divider />
      <div>Double Regular Input (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <DoubleRegularInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          isLarge
          value1={state.textContent}
          value2={state.textContent}
          onChange1={onChangeText}
          onChange2={onChangeText}
        />
        <DoubleRegularInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          isLarge
          isError
          errorMessage="Error message"
          value1={state.textContent}
          value2={state.textContent}
          onChange1={onChangeText}
          onChange2={onChangeText}
        />
        <DoubleRegularInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          value1={state.textContent}
          value2={state.textContent}
          onChange1={onChangeText}
          onChange2={onChangeText}
          disabled1
          disabled2
          isLarge
        />
      </div>
      <div>Double Regular Input (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <DoubleRegularInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          value1={state.textContent}
          value2={state.textContent}
          onChange1={onChangeText}
          onChange2={onChangeText}
        />
        <DoubleRegularInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          isError
          errorMessage="Error message"
          value1={state.textContent}
          value2={state.textContent}
          onChange1={onChangeText}
          onChange2={onChangeText}
        />
        <DoubleRegularInput
          title="Title"
          placeholder1="Place holder 1"
          placeholder2="Place holder 2"
          value1={state.textContent}
          value2={state.textContent}
          onChange1={onChangeText}
          onChange2={onChangeText}
          disabled1
          disabled2
        />
      </div>
    </div>
  );
};

export default CRegularInput;
