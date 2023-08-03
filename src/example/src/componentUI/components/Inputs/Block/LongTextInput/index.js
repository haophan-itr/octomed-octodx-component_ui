import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const LongTextInput = (props) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    props.onChange(name, value, props.index);
  };

  return (
    <div className={classnames('long-text-input-box', props.isLarge ? 'text-large' : 'text-small', props.isError ? '--error' : '')}>
      <textarea
        name={props.name}
        value={props.value}
        type={props.type}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={onChange}
        className={classnames('long-text-input', props.className)}
      />

      <div className="error-message">
        {
        props.isError && !!props.errorMessage
          ? props.errorMessage
          : ''
        }
      </div>
    </div>
  );
};

LongTextInput.defaultProps = {
  name: '',
  value: '',
  type: 'text',
  disabled: false,
  onChange: () => { },
  placeholder: '',
  className: '',
  isError: false,
  errorMessage: '',
  isLarge: false,
  index: undefined,
};

LongTextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isError: PropTypes.bool,
  isLarge: PropTypes.bool,
  errorMessage: PropTypes.string,
  index: PropTypes.number,
};

export default LongTextInput;
