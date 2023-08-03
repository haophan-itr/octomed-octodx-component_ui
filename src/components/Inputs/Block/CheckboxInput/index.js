import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import classnames from 'classnames';
import './styles.scss';

const CheckboxInput = (props) => {
  const onChange = () => {
    props.onChange(props.name, props.data.value);
  };

  return (
    <div className={classnames('custom-checkbox-container', props.className)}>
      <Input
        type={props.type}
        id={`custom-checkbox-input-${props.id}`}
        className={
          classnames('custom-checkbox-input',
            props.isCheckAll ? '--check-all' : '',
            props.disabled ? '--disabled' : '')
        }
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        defaultChecked={props.defaultChecked}
        onChange={onChange}
      />

      <Label
        htmlFor={`custom-checkbox-input-${props.id}`}
      >
        {
          !!props.data.label && (
            <span className="custom-checkbox-label">{props.data.label}</span>
          )
        }
      </Label>
    </div>
  );
};

CheckboxInput.defaultProps = {
  className: '',
  name: '',
  value: '',
  type: 'checkbox',
  data: {},
  defaultChecked: false,
  isCheckAll: false,
  disabled: false,
  onChange: () => { },
};

CheckboxInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  defaultChecked: PropTypes.bool,
  isCheckAll: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckboxInput;
