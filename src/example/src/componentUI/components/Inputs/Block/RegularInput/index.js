import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InputMask from 'react-input-mask';
import './styles.scss';

const RegularInput = (props) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    props.onChange(name, value);
  };

  return (
    <div className={classnames('regular-input-box', props.isError ? '--error' : undefined)}>
      {
      props.isDateMask || props.isPhoneNumberMask
        ? (
          <InputMask
            className={
            classnames(
              'custom-regular-input',
              props.disabled ? '--disabled' : undefined,
              props.isLarge ? 'input-large' : 'input-small',
              props.className,
            )
          }
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            mask={props.isDateMask ? '99/99/9999' : '999-999-9999'}
            maskChar={null}
            value={props.value}
            onChange={onChange}
            disabled={props.disabled}
          />
        )
        : (
          <input
            type={props.type}
            className={
            classnames(
              'custom-regular-input',
              props.disabled ? '--disabled' : undefined,
              props.isLarge ? 'input-large' : 'input-small',
              props.className,
            )
          }
            name={props.name}
            disabled={props.disabled}
            placeholder={props.placeholder}
            onChange={onChange}
            value={props.value}
          />
        )
    }

      <div className={classnames('error-message', props.isLarge ? 'error-large' : 'error-small')}>
        {
        props.isError && !!props.errorMessage
          ? props.errorMessage
          : ''
        }
      </div>


    </div>
  );
};

RegularInput.defaultProps = {
  name: '',
  value: '',
  type: 'text',
  disabled: false,
  onChange: () => { },
  placeholder: '',
  className: '',
  isDateMask: false,
  isPhoneNumberMask: false,
  isError: false,
  errorMessage: '',
  isLarge: false,
};

RegularInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isDateMask: PropTypes.bool,
  isPhoneNumberMask: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  isLarge: PropTypes.bool,
};

export default RegularInput;
