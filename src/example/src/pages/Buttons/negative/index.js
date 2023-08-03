import React, { useState } from 'react';
import Button from '../../../componentUI/components/Buttons/NormalButton';
import './styles.scss';

const NegativeButton = (props) => {
  const [state, setState] = useState();
  return (
    <>
      <div className="content-button-negative">
        <h2>Negative</h2>
        <Button
          isSmall
          isNegative
          className="btn-preview-1"
          buttonName="Button"
          onClick={() => {}}
          disabled
        />
        <Button
          isSmall
          isNegative
          className="btn-preview-1"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isMedium
          isNegative
          className="btn-preview-2"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isLarge
          isNegative
          className="btn-preview-3"
          buttonName="Button"
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default NegativeButton;
