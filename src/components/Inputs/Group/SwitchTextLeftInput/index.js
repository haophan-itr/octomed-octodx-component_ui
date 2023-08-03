import React from 'react';
import PropTypes from 'prop-types';
import ToggleInput from '../../Block/ToggleInput';
import './styles.scss';

const SwitchTextLeftInput = props => (
  <div className="switch-text-left-input">
    <div className="input-container">
      <div className="title-toggle-input">{props.title}</div>
      <ToggleInput
        isOn={props.isOn}
        handleToggle={props.handleToggle}
      />
    </div>
  </div>
);

SwitchTextLeftInput.defaultProps = {
  title: '',
  isOn: false,
  handleToggle: () => {},
};

SwitchTextLeftInput.propTypes = {
  title: PropTypes.string,
  isOn: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default SwitchTextLeftInput;
