import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import LongTextInput from '../../Block/LongTextInput';
import './styles.scss';

const LongTextTitleInput = props => (
  <div className={classnames('long-text-title-input', props.isLarge ? 'text-title-large' : 'text-title-small', props.isError ? '--error' : '')}>
    <div className="title">{props.title}</div>
    <LongTextInput
      disabled={props.disabled}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      type={props.type}
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

LongTextTitleInput.defaultProps = {
  title: '',
  name: '',
  value: '',
  type: 'text',
  disabled: false,
  onChange: () => { },
  placeholder: '',
  errorMessage: '',
  isError: false,
  isLarge: false,
};

LongTextTitleInput.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  isLarge: PropTypes.bool,
};

export default LongTextTitleInput;
