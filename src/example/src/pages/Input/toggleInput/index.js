import React, { useState } from 'react';
import ToggleInput from '../../../componentUI/components/Inputs/Block/ToggleInput';

import './styles.scss';

const CToggleInput = () => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <div>Toggle Input</div>

      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <ToggleInput
          isOn={value}
          handleToggle={() => setValue(!value)}
        />
      </div>
    </div>
  );
};

export default CToggleInput;
