import React, { useState } from 'react';
import Button from '../../../componentUI/components/Buttons/NormalButton';
import './styles.scss';

const PrimaryButton = (props) => {
  const [state, setState] = useState();
  const onClick = () => {
    // console.log('abc');
  };
  return (
    <>
      <div className="content-button-primary-1">
        <h2>Primary 1</h2>
        <Button
          isFilled
          isSmall
          isPrimary1
          className="btn-preview-1"
          buttonName="Button"
          onClick={onClick}
          disabled
        />
        <Button
          isFilled
          isSmall
          isPrimary1
          className="btn-preview-1"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isMedium
          isPrimary1
          className="btn-preview-2"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isLarge
          isPrimary1
          className="btn-preview-3"
          buttonName="Button"
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default PrimaryButton;
