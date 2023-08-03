import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import classnames from 'classnames';
import './styles.scss';

const CheckboxInputBlock = (props) => {
  const onChange = () => {
    props.onChange(props.name, props.data.value);
  };
  return (
    <div className={classnames('custom-checkbox-block-container', props.isLarge ? 'checkbox-input-large' : 'checkbox-input-small', props.checked ? '--isChecked' : undefined, props.className)}>
      <Input
        type={props.type}
        id={`custom-checkbox-input-${props.id}`}
        className={
          classnames(
            'custom-checkbox-input',
          )
        }
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={onChange}
      />

      <Label htmlFor={`custom-checkbox-input-${props.id}`}>
        {
          !!props.data && !!props.data.label && (
            <span className="custom-checkbox-label">{props.data.label}</span>
          )
        }
      </Label>
    </div>
  );
};

CheckboxInputBlock.defaultProps = {
  name: '',
  value: '',
  type: 'checkbox',
  checked: false,
  onChange: () => { },
  className: '',
  isLarge: false,
};

CheckboxInputBlock.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  isLarge: PropTypes.bool,
};

export default CheckboxInputBlock;
