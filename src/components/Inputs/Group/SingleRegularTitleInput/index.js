import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import RegularInput from '../../Block/RegularInput';
import './styles.scss';

const SingleRegularTitleInput = props => (
  <div className={classnames('single-regular-title-input', props.isError ? '--error' : undefined)}>
    <div className="title">{props.title}</div>
    <RegularInput
      disabled={props.disabled}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      isDateMask={props.isDateMask}
      isPhoneNumberMask={props.isPhoneNumberMask}
      type={props.type}
      isLarge={props.isLarge}
    />
    <div className="error-message">
      {
        props.isError && !!props.errorMessage
          ? props.errorMessage
          : undefined
        }
    </div>
  </div>
);

SingleRegularTitleInput.defaultProps = {
  title: '',
  name: '',
  value: '',
  type: 'text',
  disabled: false,
  onChange: () => { },
  placeholder: '',
  errorMessage: '',
  isError: false,
  isDateMask: false,
  isPhoneNumberMask: false,
  isLarge: false,
};

SingleRegularTitleInput.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  isDateMask: PropTypes.bool,
  isPhoneNumberMask: PropTypes.bool,
  isLarge: PropTypes.bool,
};

export default SingleRegularTitleInput;
