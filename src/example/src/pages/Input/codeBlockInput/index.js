import React, { useRef } from 'react';
import { useMergeState } from '../../../utils/customHooks';
import CodeBlockInput from '../../../componentUI/components/Inputs/Block/CodeBlockInput';

import './styles.scss';

const CCodeBlockInput = () => {
  const [state, setState] = useMergeState({
    textContent: '',
  });
  const onChangeText = (name, value) => {
    setState({
      textContent: value,
    });
  };
  return (
    <div>
      <div>Code block Input (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>

        <CodeBlockInput
          name="searchValue"
          isLarge
          value={state.textContent}
          onChange={onChangeText}
        />

        <CodeBlockInput
          name="searchValue"
          isLarge
          disabled
        />
      </div>
      <div>Code block Input (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>

        <CodeBlockInput
          name="searchValue"
          value={state.textContent}
          onChange={onChangeText}
        />

        <CodeBlockInput
          name="searchValue"
          disabled
        />
      </div>
    </div>
  );
};

export default CCodeBlockInput;
