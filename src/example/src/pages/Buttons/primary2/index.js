import React, { useState } from 'react';
import Button from '../../../componentUI/components/Buttons/NormalButton';
import './styles.scss';

const PrimaryButton2 = (props) => {
  const [state, setState] = useState();

  return (
    <>
      <div className="content-button-primary-2">
        <h2>Primary 2</h2>
        <Button
          isFilled
          isSmall
          isPrimary2
          className="btn-preview-1"
          buttonName="Button"
          onClick={() => {}}
          disabled
        />
        <Button
          isFilled
          isSmall
          isPrimary2
          className="btn-preview-1"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isMedium
          isPrimary2
          className="btn-preview-2"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isLarge
          isPrimary2
          className="btn-preview-3"
          buttonName="Button"
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default PrimaryButton2;
