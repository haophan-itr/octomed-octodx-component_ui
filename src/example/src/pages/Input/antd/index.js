import React, { useRef } from 'react';
import DropzoneInput from '../../../componentUI/components/Inputs/Block/DropzoneInput';

import './styles.scss';

const CAntd = () => {
  const onDrop = (e) => {

  };
  return (
    <div>
      <h1>Antd</h1>

      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <DropzoneInput
          maxSize="1024"
    // onChange={onChangeDrag}
          onDrop={onDrop}
          name="file"
        />

        <DropzoneInput
          maxSize="1024"
    // onChange={onChangeDrag}
          onDrop={onDrop}
          name="file"
          multiple
        />


      </div>
    </div>
  );
};

export default CAntd;
