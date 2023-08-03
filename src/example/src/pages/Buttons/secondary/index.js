import React, { useState } from 'react';
import Button from '../../../componentUI/components/Buttons/NormalButton';
import './styles.scss';

const SecondaryButton = (props) => {
  const [state, setState] = useState();
  return (
    <>
      <div className="content-button-secondary">
        <h2>Secondary</h2>
        <Button
          isFilled
          isSmall
          isSecondary
          className="btn-secon"
          buttonName="Button"
          onClick={() => {}}
          disabled
        />
        <Button
          isFilled
          isSmall
          isSecondary
          className="btn-secon"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isMedium
          isSecondary
          className="btn-secon"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isLarge
          isSecondary
          buttonName="Button"
          className="btn-secon"
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default SecondaryButton;
