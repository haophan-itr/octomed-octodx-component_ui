import React, { useState } from 'react';
import Button from '../../../componentUI/components/Buttons/NormalButton';

import IconRed from '../../../static/images/icon-circle-red.svg';
import IconWhite from '../../../static/images/icon-circle-white.svg';
import IconBlack from '../../../static/images/icon-circle-black.svg';
import IconGreen from '../../../static/images/icon-circle-green.svg';

import './styles.scss';

const OnlyIcon = () => {
  const [state, setState] = useState();
  return (
    <div className="content-button-primary-icon">
      <h2>Icon Only</h2>
      <div className="only-icon">
        <div className="primary-1">
          <h3>Primary 1</h3>
          <Button
            isFilled
            isSmall
            isPrimary1
            hasIcon
            iconComponent={<img src={IconWhite} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
            disabled
          />
          <Button
            isFilled
            isSmall
            isPrimary1
            hasIcon
            iconComponent={<img src={IconWhite} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isFilled
            isMedium
            isPrimary1
            hasIcon
            iconComponent={<img src={IconWhite} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isFilled
            isLarge
            isPrimary1
            hasIcon
            iconComponent={<img src={IconWhite} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
        </div>
        <div className="primary-2">
          <h3>Primary 2</h3>
          <Button
            isFilled
            isSmall
            isPrimary2
            hasIcon
            iconComponent={<img src={IconWhite} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
            disabled
          />
          <Button
            isFilled
            isSmall
            isPrimary2
            hasIcon
            iconComponent={<img src={IconWhite} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isFilled
            isMedium
            isPrimary2
            hasIcon
            iconComponent={<img src={IconWhite} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isFilled
            isLarge
            isPrimary2
            hasIcon
            iconComponent={<img src={IconWhite} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
        </div>
        <div className="secondary">
          <h3>Secondary</h3>
          <Button
            isFilled
            isSmall
            isSecondary
            hasIcon
            iconComponent={<img src={IconGreen} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
            disabled
          />
          <Button
            isFilled
            isSmall
            isSecondary
            hasIcon
            iconComponent={<img src={IconGreen} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isFilled
            isMedium
            isSecondary
            hasIcon
            iconComponent={<img src={IconGreen} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isFilled
            isLarge
            isSecondary
            hasIcon
            iconComponent={<img src={IconGreen} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
        </div>
        <div className="negative">
          <h3>Negative</h3>
          <Button
            isNegative
            isSmall
            hasIcon
            iconComponent={<img src={IconRed} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
            disabled
          />
          <Button
            isNegative
            isSmall
            hasIcon
            iconComponent={<img src={IconRed} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isNegative
            isMedium
            hasIcon
            iconComponent={<img src={IconRed} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isNegative
            isLarge
            hasIcon
            iconComponent={<img src={IconRed} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
        </div>
        <div className="tertiary">
          <h3>Tertiary</h3>
          <Button
            isTertiary
            isNegative
            isSmall
            hasIcon
            iconComponent={<img src={IconRed} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
            disabled
          />
          <Button
            isTertiary
            isNegative
            isSmall
            hasIcon
            iconComponent={<img src={IconRed} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isTertiary
            isNegative
            isMedium
            hasIcon
            iconComponent={<img src={IconRed} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isTertiary
            isNegative
            isLarge
            hasIcon
            iconComponent={<img src={IconRed} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
        </div>
        <div className="normal">
          <h3>Outline</h3>
          <Button
            isSmall
            hasIcon
            iconComponent={<img src={IconGreen} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
            disabled
          />
          <Button
            isSmall
            hasIcon
            iconComponent={<img src={IconGreen} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isMedium
            hasIcon
            iconComponent={<img src={IconGreen} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
          <Button
            isLarge
            hasIcon
            iconComponent={<img src={IconGreen} alt="icon" />}
            className="btn-primary-only-icon"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default OnlyIcon;
