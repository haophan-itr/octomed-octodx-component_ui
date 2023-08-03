import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { gettext } from 'ttag';
import _ from 'lodash';
import './styles.scss';

const ToggleButton = (props) => {
  const onClick = () => {
    props.onClick(props.name, props.data.value);
  };

  return (
    <button
      id={props.id}
      disabled={props.disabled}
      onKeyDown={props.onKeyDown}
      onClick={onClick}
      className={
        classnames(
          'toggle-button',
          props.isActive ? '--active' : '',
          props.className,
        )
      }
    >
      <span className={classnames(!_.isNil(props.count) ? 'pr-2' : '')}>
        {gettext(props.data.label)}
        {props.subLabel}
      </span>
      {
        !_.isNil(props.count) && (
          <span className="count">{props.count}</span>
        )
      }
    </button>
  );
};

ToggleButton.defaultProps = {
  id: undefined,
  className: undefined,
  name: '',
  subLabel: '',
  disabled: false,
  onKeyDown: () => { },
  count: undefined,
};

ToggleButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  subLabel: PropTypes.string,
  data: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
    ]),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  count: PropTypes.number,
};

export default ToggleButton;
