import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import classnames from 'classnames';
import './styles.scss';

const RadioInputBlock = (props) => {
  const onChange = () => {
    props.onChange(props.name, props.data.value);
  };

  return (
    <div className={classnames('custom-radio-block-container', props.isLarge ? 'radio-block-large' : 'radio-block-small', props.checked ? '--isChecked' : undefined, props.className)}>
      <Input
        type={props.type}
        id={`custom-radio-input-${props.id}`}
        className="custom-radio-input"
        name={props.name}
        defaultChecked={props.defaultChecked}
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

RadioInputBlock.defaultProps = {
  name: '',
  defaultChecked: false,
  type: 'radio',
  onChange: () => { },
  className: undefined,
  checked: false,
  isLarge: false,
};

RadioInputBlock.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  checked: PropTypes.bool,
  isLarge: PropTypes.bool,
};

export default RadioInputBlock;
