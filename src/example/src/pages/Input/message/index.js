import React from 'react';
import { toastrSuccess } from '../../../utils/toastNotification';
import NormalButton from '../../../componentUI/components/Buttons/NormalButton';

import './styles.scss';

const MessagePage = props => (
  <div className="message-container">
    <NormalButton
      isMedium
      isFilled
      isSecondary
      className="btn-toast"
      buttonName="Show Message"
      onClick={() => { toastrSuccess('Message', 'Title', 0); }}
    />
  </div>
);

export default MessagePage;
