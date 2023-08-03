import React from 'react';
import { useMergeState } from '../../../utils/customHooks';
import IconInput from '../../../componentUI/components/Inputs/Block/IconInput';
import clockIcon from '../../../static/images/clock-icon.svg';

import './styles.scss';

const CIconInput = () => {
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
      <div>Icon Input (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>

        <IconInput
          iconComponent={(
            <img src={clockIcon} alt="Clock icon" width="20px" height="20px" />
          )}
          placeholder="Place holder"
          isLarge
          value={state.textContent}
          onChange={onChangeText}
        />

        <IconInput
          iconComponent={(
            <img src={clockIcon} alt="Clock icon" width="20px" height="20px" />
          )}
          placeholder="Place holder"
          value={state.textContent}
          isLarge
          disabled
        />
      </div>

      <div>Icon Input (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>

        <IconInput
          iconComponent={(
            <img src={clockIcon} alt="Clock icon" width="20px" height="20px" />
          )}
          placeholder="Place holder"
          value={state.textContent}
          onChange={onChangeText}
        />

        <IconInput
          iconComponent={(
            <img src={clockIcon} alt="Clock icon" width="20px" height="20px" />
          )}
          placeholder="Place holder"
          value={state.textContent}
          disabled
        />
      </div>

      <div>Icon Input (Small) with error message</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>

        <IconInput
          iconComponent={(
            <img src={clockIcon} alt="Clock icon" width="20px" height="20px" />
          )}
          placeholder="Place holder"
          value={state.textContent}
          onChange={onChangeText}
          isError
          errorMessage="Error message"
        />

        <IconInput
          iconComponent={(
            <img src={clockIcon} alt="Clock icon" width="20px" height="20px" />
          )}
          placeholder="Place holder"
          value={state.textContent}
          disabled
          isError
          errorMessage="Error message"
        />
      </div>
    </div>
  );
};

export default CIconInput;
