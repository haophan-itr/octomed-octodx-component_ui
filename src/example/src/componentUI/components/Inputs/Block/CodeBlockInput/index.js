import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const CodeBlockInput = (props) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    props.onChange(name, value);
  };
  return (
    <input
      type={props.type}
      className={
            classnames(
              'code-block-input',
              props.disabled ? '--disabled' : undefined,
              props.isLarge ? 'code-block-large' : 'code-block-small',
              props.className,
            )
          }
      placeholder="__"
      name={props.name}
      value={props.value}
      disabled={props.disabled}
      maxLength="1"
      onChange={onChange}
    />

  );
};

CodeBlockInput.defaultProps = {
  name: '',
  value: '',
  type: 'text',
  disabled: false,
  onChange: () => { },
  className: undefined,
  isLarge: false,
};

CodeBlockInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  isLarge: PropTypes.bool,
};

export default CodeBlockInput;
