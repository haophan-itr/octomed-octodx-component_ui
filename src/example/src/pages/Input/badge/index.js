import React from 'react';
import { Divider } from 'antd';
import TextOnlyBadge from '../../../componentUI/components/Badge/NonPriorityBadge/TextOnlyBadge';
import TextIconBadge from '../../../componentUI/components/Badge/NonPriorityBadge/TextIconBadge';
import PriorityBadge from '../../../componentUI/components/Badge/PriorityBadge';

import badgeIcon from '../../../static/images/badge-icon.svg';
import IconWhite from '../../../static/images/icon-circle-white.svg';
import IconDarkBlue from '../../../static/images/icon-circle-dark-blue.svg';
import IconDarkBlueSmall from '../../../static/images/icon-circle-dark-blue-small.svg';

import './styles.scss';


const CBadge = () => (
  <div>
    <h3>Non-priority (Strong)</h3>
    <div className="inputs-container">
      <TextOnlyBadge
        text="Badge"
        isStrong
      />
      <TextIconBadge
        text="Badge"
        isStrong
        iconComponent={(
          <img src={IconWhite} alt="Badge icon" />
          )}
        isIconLeft
      />
      <TextIconBadge
        text="Badge"
        isStrong
        iconComponent={(
          <img src={IconWhite} alt="Badge icon" />
          )}
      />

      <TextOnlyBadge
        text="Badge"
        isStrong
        isSmall
      />
      <TextIconBadge
        text="Badge"
        isStrong
        iconComponent={(
          <img src={badgeIcon} alt="Badge icon" />
          )}
        isIconLeft
        isSmall
      />
      <TextIconBadge
        text="Badge"
        isStrong
        iconComponent={(
          <img src={badgeIcon} alt="Badge icon" />
          )}
        isSmall
      />

      <TextOnlyBadge
        text="Badge"
        isStrong
        isExtraSmall
      />
      <TextIconBadge
        text="Badge"
        isStrong
        isExtraSmall
        iconComponent={(
          <img src={badgeIcon} alt="Badge icon" />
          )}
        isIconLeft
      />
      <TextIconBadge
        text="Badge"
        isStrong
        isExtraSmall
        iconComponent={(
          <img src={badgeIcon} alt="Badge icon" />
          )}
      />
    </div>
    <Divider />
    <h3>Non-priority (Light)</h3>
    <div className="inputs-container">
      <TextOnlyBadge
        text="Badge"
        isLight
      />
      <TextIconBadge
        text="Badge"
        isLight
        iconComponent={(
          <img src={IconDarkBlue} alt="Badge icon" />
          )}
        isIconLeft
      />
      <TextIconBadge
        text="Badge"
        isLight
        iconComponent={(
          <img src={IconDarkBlue} alt="Badge icon" />
          )}
      />

      <TextOnlyBadge
        text="Badge"
        isLight
        isSmall
      />
      <TextIconBadge
        text="Badge"
        isLight
        iconComponent={(
          <img src={IconDarkBlue} alt="Badge icon" />
          )}
        isIconLeft
        isSmall
      />
      <TextIconBadge
        text="Badge"
        isLight
        iconComponent={(
          <img src={IconDarkBlue} alt="Badge icon" />
          )}
        isSmall
      />


      <TextOnlyBadge
        text="Badge"
        isLight
        isExtraSmall
      />
      <TextIconBadge
        text="Badge"
        isLight
        isExtraSmall
        iconComponent={(
          <img src={IconDarkBlueSmall} alt="Badge icon" />
          )}
        isIconLeft
      />
      <TextIconBadge
        text="Badge"
        isLight
        isExtraSmall
        iconComponent={(
          <img src={IconDarkBlueSmall} alt="Badge icon" />
          )}
      />
    </div>
    <Divider />
    <h3>Priority (Large)</h3>
    <div className="inputs-container">
      <PriorityBadge
        text="EMERGENT"
        isLargePriority
        isEmergent
        isSmall
      />
      <PriorityBadge
        text="URGENT"
        isLargePriority
        isUrgent
        isSmall
      />
      <PriorityBadge
        text="HIGH"
        isLargePriority
        isSmall
      />
      <PriorityBadge
        text="MEDIUM"
        isLargePriority
        isSmall
      />
      <PriorityBadge
        text="LOW"
        isSmall
        isLargePriority
      />
      <PriorityBadge
        text="EMERGENT"
        isLargePriority
        isEmergent
      />
      <PriorityBadge
        text="URGENT"
        isLargePriority
        isUrgent
      />
      <PriorityBadge
        text="HIGH"
        isLargePriority
      />
      <PriorityBadge
        text="MEDIUM"
        isLargePriority
      />
      <PriorityBadge
        text="LOW"
        isLargePriority
      />
    </div>
    <Divider />
    <h3>Priority (Small)</h3>
    <div className="inputs-container">
      <PriorityBadge
        text="EMERGENT"
        isEmergent
        isSmall
      />
      <PriorityBadge
        text="URGENT"
        isUrgent
        isSmall
      />
      <PriorityBadge
        text="HIGH"
        isSmall
      />
      <PriorityBadge
        text="MEDIUM"
        isSmall
      />
      <PriorityBadge
        text="LOW"
        isSmall
      />
      <PriorityBadge
        text="EMERGENT"
        isEmergent
      />
      <PriorityBadge
        text="URGENT"
        isUrgent
      />
      <PriorityBadge
        text="HIGH"
      />
      <PriorityBadge
        text="MEDIUM"
      />
      <PriorityBadge
        text="LOW"
      />
    </div>
  </div>
);

export default CBadge;
