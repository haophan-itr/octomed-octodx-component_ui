import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Checkbox } from 'antd';

import './styles.scss';

const CheckboxGroup = Checkbox.Group;

const CheckboxInputComponent = (props) => {
  const onChangeCheckbox = (checkedValue) => {
    props.onChange(props.name, checkedValue);
  };

  const onChangeCheckSimple = (e) => {
    props.onChange(e, props.name);
  };

  return (
    <div className={classnames('custom-checkbox', props.isLarge ? 'check-box-large' : 'check-box-small', props.className)}>
      {props.isGroup ? (
        <CheckboxGroup
          options={props.options}
          value={props.value}
          onChange={onChangeCheckbox}
          disabled={props.disabled}
          name={props.name}
          defaultValue={props.defaultValue}
        />
      ) : (
        <Checkbox
          autoFocus={props.autoFocus}
          checked={props.checked}
          defaultChecked={props.defaultChecked}
          disabled={props.disabled}
          indeterminate={props.indeterminate}
          onChange={onChangeCheckSimple}
          name={props.name}
        >
          {props.label}
        </Checkbox>
      ) }
    </div>
  );
};

CheckboxInputComponent.defaultProps = {
  className: undefined,
  options: ['Apple', 'Pear', 'Orange'],
  value: [],
  defaultValue: '',
  disabled: false,
  name: '',
  onChange: () => {},
  isLarge: false,
  isGroup: true,
  autoFocus: false,
  checked: false,
  defaultChecked: false,
  indeterminate: false,
  label: 'Your label',
};

CheckboxInputComponent.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape()),
  value: PropTypes.arrayOf(PropTypes.shape()),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  isLarge: PropTypes.bool,
  isGroup: PropTypes.bool,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  label: PropTypes.string,
};

export default CheckboxInputComponent;
