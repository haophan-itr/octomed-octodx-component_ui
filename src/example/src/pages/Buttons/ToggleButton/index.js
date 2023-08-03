import React from 'react';
import ToggleComponent from '../../../componentUI/components/toggle';

import './styles.scss';

const ToggleButtonPage = (props) => {
  const ABC = 0;
  return (
    <div className="container-toggle">
      {/* <div className="large">
        <h2>Toggle (Large)</h2>
        <ToggleComponent isLarge />
      </div> */}
      <div className="small">
        {/* <h2>Toggle (Small)</h2> */}
        <ToggleComponent />
      </div>
    </div>
  );
};

export default ToggleButtonPage;
