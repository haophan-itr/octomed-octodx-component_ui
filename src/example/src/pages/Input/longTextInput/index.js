import React, { useRef } from 'react';
import { Divider } from 'antd';
import { useMergeState } from '../../../utils/customHooks';
import LongTextInput from '../../../componentUI/components/Inputs/Block/LongTextInput';
import LongTextTitleInput from '../../../componentUI/components/Inputs/Group/LongTextTitleInput';

import './styles.scss';

const CLongTextInput = () => {
  const [state, setState] = useMergeState({
    textContent: '',
  });
  const onChangeText = (name, value) => {
    setState({
      textContent: value,
    });
  };
  return (
    <div className="long-text-container">
      <div className="box-large">
        <h2>Long Text Input (Large)</h2>
        <div className="content">
          <LongTextInput
            name="Long Input"
            placeholder="Type something"
            isLarge
            value={state.textContent}
            onChange={onChangeText}
          />

          <LongTextInput
            name="Long Input"
            placeholder="Type something"
            isLarge
            isError
            errorMessage="Error message"
            value={state.textContent}
            onChange={onChangeText}
          />

          <LongTextInput
            name="Long Input"
            placeholder="Type something"
            isLarge
            disabled
            value={state.textContent}
          />
        </div>
      </div>
      <div className="box-small">
        <h2>Long Text Input (Small)</h2>
        <div className="content">
          <LongTextInput
            name="Long Input"
            placeholder="Type something"
            value={state.textContent}
            onChange={onChangeText}
          />

          <LongTextInput
            name="Long Input"
            placeholder="Type something"
            isError
            errorMessage="Error message"
            value={state.textContent}
            onChange={onChangeText}
          />

          <LongTextInput
            name="Long Input"
            placeholder="Type something"
            disabled
            value={state.textContent}
          />
        </div>
      </div>

      <div className="box-title-large">
        <h2>Long Text Title (Large)</h2>
        <div className="content">
          <LongTextTitleInput
            title="Title"
            isLarge
            placeholder="Place holder"
            value={state.textContent}
            onChange={onChangeText}
          />

          <LongTextTitleInput
            title="Title"
            isLarge
            placeholder="Place holder"
            isError
            errorMessage="Error message"
            value={state.textContent}
            onChange={onChangeText}
          />
          <LongTextTitleInput
            title="Title"
            isLarge
            placeholder="Place holder"
            value={state.textContent}
            onChange={onChangeText}
            disabled
          />
        </div>

      </div>
      <div className="box-title-small">
        <h2>Long Text Title (Small)</h2>
        <div className="content">
          <LongTextTitleInput
            title="Title"
            placeholder="Place holder"
            value={state.textContent}
            onChange={onChangeText}
          />

          <LongTextTitleInput
            title="Title"
            placeholder="Place holder"
            isError
            errorMessage="Error message"
            value={state.textContent}
            onChange={onChangeText}
          />
          <LongTextTitleInput
            title="Title"
            placeholder="Place holder"
            value={state.textContent}
            onChange={onChangeText}
            disabled
          />
        </div>

      </div>
    </div>
  );
};

export default CLongTextInput;
