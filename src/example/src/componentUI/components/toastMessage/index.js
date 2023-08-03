import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  toastrSuccess, toastrError, toastrInfo, toastrWarning,
} from '../../../utils/toastNotification';

import './styles.scss';

const ToastMessage = (props) => {
  const renderToastMessage = () => {

  };

  return (
    <div className={classnames('custom-toast-message', props.className)}>
      {renderToastMessage()}
    </div>
  );
};

ToastMessage.defaultProps = {
  toastSuccess: false,
  toastError: false,
  toastWarning: false,
  toastInfo: false,
};

ToastMessage.propTypes = {
  toastSuccess: PropTypes.bool,
  toastError: PropTypes.bool,
  toastWarning: PropTypes.bool,
  toastInfo: PropTypes.bool,
};

export default ToastMessage;
