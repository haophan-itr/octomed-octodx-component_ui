import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const ToggleInput = ({
  isOn, handleToggle, isLarge, label, isTextLeft,
}) => (

  <div className={classnames('toggle-input', isTextLeft ? 'text-left' : undefined)}>
    <div className={classnames('icon-toggle', isLarge ? 'large' : 'small')}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#0AAE43' }}
        className="react-switch-label"
        htmlFor="react-switch-new"
      >
        <span className="react-switch-button" />
      </label>
    </div>
    <p className={classnames('text-label', isLarge ? 'large' : 'small')}>
      {label}
    </p>
  </div>
);

ToggleInput.defaultProps = {
  handleToggle: () => { },
  isOn: false,
  isLarge: false,
  label: null,
  isTextLeft: false,
};

ToggleInput.propTypes = {
  handleToggle: PropTypes.func,
  isOn: PropTypes.bool,
  isLarge: PropTypes.bool,
  isTextLeft: PropTypes.bool,
  label: PropTypes.string,
};

export default ToggleInput;
