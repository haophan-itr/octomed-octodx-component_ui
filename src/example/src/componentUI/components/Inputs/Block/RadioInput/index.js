import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import classnames from 'classnames';
import './styles.scss';

const RadioInput = (props) => {
  const onChange = () => {
    props.onChange(props.name, props.data.value);
  };

  return (
    <div className="custom-radio-container">
      <Input
        type={props.type}
        id={`custom-radio-input-${props.id}`}
        className={
          classnames(
            'custom-radio-input',
            props.disabled ? '--disabled' : '',
            props.className,
          )
        }
        name={props.name}
        disabled={props.disabled}
        checked={props.checked}
        onChange={onChange}
      />

      <Label htmlFor={`custom-radio-input-${props.id}`}>
        {
          !!props.data && !!props.data.label && (
            <span className="custom-radio-label">{props.data.label}</span>
          )
        }
      </Label>
    </div>
  );
};

RadioInput.defaultProps = {
  name: '',
  checked: false,
  disabled: false,
  type: 'radio',
  onChange: () => { },
  className: '',
};

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default RadioInput;
