import React, { useState } from 'react';
import Button from '../../../componentUI/components/Buttons/NormalButton';
import IconWhite from '../../../static/images/icon-circle-white.svg';
import IconGreen from '../../../static/images/icon-circle-green.svg';
import IconRed from '../../../static/images/icon-circle-red.svg';

import './styles.scss';

const ButtonIcon = () => {
  const [state, setState] = useState();
  return (
    <div className="content-button-including-icon">
      <div className="primary-1">
        <h2>Primary 1</h2>
        <Button
          isFilled
          isSmall
          isPrimary1
          hasIcon
          isIconLeft
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
          disabled
        />
        <Button
          isFilled
          isSmall
          isPrimary1
          hasIcon
          isIconLeft
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isSmall
          isPrimary1
          hasIcon
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isMedium
          isPrimary1
          hasIcon
          isIconLeft
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isMedium
          isPrimary1
          hasIcon
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isLarge
          isPrimary1
          hasIcon
          isIconLeft
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isLarge
          isPrimary1
          hasIcon
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
      </div>
      <div className="primary-2">
        <h2>Primary 2</h2>
        <Button
          isFilled
          isSmall
          isPrimary2
          hasIcon
          isIconLeft
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
          disabled
        />
        <Button
          isFilled
          isSmall
          isPrimary2
          hasIcon
          isIconLeft
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isSmall
          isPrimary2
          hasIcon
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isMedium
          isPrimary2
          hasIcon
          isIconLeft
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isMedium
          isPrimary2
          hasIcon
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isLarge
          isPrimary2
          hasIcon
          isIconLeft
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isLarge
          isPrimary2
          hasIcon
          iconComponent={<img src={IconWhite} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
      </div>
      <div className="secondary">
        <h2>Secondary</h2>
        <Button
          isFilled
          isSmall
          isSecondary
          hasIcon
          isIconLeft
          iconComponent={<img src={IconGreen} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
          disabled
        />
        <Button
          isFilled
          isSmall
          isSecondary
          hasIcon
          isIconLeft
          iconComponent={<img src={IconGreen} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isSmall
          isSecondary
          hasIcon
          iconComponent={<img src={IconGreen} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isMedium
          isSecondary
          hasIcon
          isIconLeft
          iconComponent={<img src={IconGreen} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isMedium
          isSecondary
          hasIcon
          iconComponent={<img src={IconGreen} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isLarge
          isSecondary
          hasIcon
          isIconLeft
          iconComponent={<img src={IconGreen} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isFilled
          isLarge
          isSecondary
          hasIcon
          iconComponent={<img src={IconGreen} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
      </div>
      <div className="negative">
        <h2>Negative</h2>
        <Button
          isSmall
          isNegative
          hasIcon
          isIconLeft
          iconComponent={<img src={IconRed} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
          disabled
        />
        <Button
          isSmall
          isNegative
          hasIcon
          isIconLeft
          iconComponent={<img src={IconRed} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isSmall
          isNegative
          hasIcon
          iconComponent={<img src={IconRed} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isMedium
          isNegative
          hasIcon
          isIconLeft
          iconComponent={<img src={IconRed} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isMedium
          isNegative
          hasIcon
          iconComponent={<img src={IconRed} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isLarge
          isNegative
          hasIcon
          isIconLeft
          iconComponent={<img src={IconRed} alt="icon" />}
          className="btn-primary-icon-left"
          buttonName="Button"
          onClick={() => {}}
        />
        <Button
          isLarge
          isNegative
          hasIcon
          iconComponent={<img src={IconRed} alt="icon" />}
          className="btn-primary-icon-right"
          buttonName="Button"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ButtonIcon;
