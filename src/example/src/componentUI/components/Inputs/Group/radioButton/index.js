import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import classnames from 'classnames';

import './styles.scss';

const RadioButtonGroup = (props) => {
  const onChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <div className={classnames('custom-radio-btn-group',
      props.isLarge ? 'btn-radio-large' : 'btn-radio-small',
      props.isVertical ? 'btn-radio-vertical' : 'btn-radio-horizontal',
      props.className)}
    >
      <div className="radio-label">{props.title}</div>
      <Radio.Group
        defaultValue={props.defaultValue}
        options={props.options}
        disabled={props.disabled}
        onChange={onChange}
        // value={props.value}
      />
    </div>
  );
};

RadioButtonGroup.defaultProps = {
  title: 'Title',
  className: undefined,
  defaultValue: 'Item 1',
  disabled: false,
  name: '',
  options: [
    { label: 'Item 1', value: 'Item 1' },
    { label: 'Item 2', value: 'Item 2' },
    { label: 'Item 3', value: 'Item 3', disabled: true },
  ],
  // value: 'Item 1',
  onChange: () => {},
  isLarge: false,
  isVertical: false,
};

RadioButtonGroup.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape()),
  // value: PropTypes.string,
  onChange: PropTypes.func,
  isLarge: PropTypes.bool,
  isVertical: PropTypes.bool,
  title: PropTypes.string,
};

export default RadioButtonGroup;
