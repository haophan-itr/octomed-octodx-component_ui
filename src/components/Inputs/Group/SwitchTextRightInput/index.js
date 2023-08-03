import React from 'react';
import PropTypes from 'prop-types';
import ToggleInput from '../../Block/ToggleInput';
import './styles.scss';

const SwitchTextRightInput = props => (
  <div className="switch-text-right-input">
    <div className="input-container">
      <ToggleInput
        isOn={props.isOn}
        handleToggle={props.handleToggle}
      />
      <div className="title-toggle-input">{props.title}</div>
    </div>
  </div>
);

SwitchTextRightInput.defaultProps = {
  title: '',
  isOn: false,
  handleToggle: () => {},
};

SwitchTextRightInput.propTypes = {
  title: PropTypes.string,
  isOn: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default SwitchTextRightInput;
