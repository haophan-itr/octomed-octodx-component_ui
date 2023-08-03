import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import RegularInput from '../../Block/RegularInput';
import './styles.scss';

const DoubleRegularInput = props => (
  <div className={classnames('double-regular-input', props.isError ? '--error' : '')}>
    <div className="title">{props.title}</div>
    <div className="content-double-regular">
      <RegularInput
        disabled={props.disabled1}
        name={props.name1}
        value={props.value1}
        placeholder={props.placeholder1}
        onChange={props.onChange1}
        className="input-1"
        type={props.type1}
        isLarge={props.isLarge}
      />
      <RegularInput
        disabled={props.disabled2}
        name={props.name2}
        value={props.value2}
        placeholder={props.placeholder2}
        onChange={props.onChange2}
        className="input-2"
        type={props.type2}
        isLarge={props.isLarge}
      />
    </div>
    <div className="error-message">
      {
        props.isError && !!props.errorMessage
          ? props.errorMessage
          : ''
        }
    </div>
  </div>
);

DoubleRegularInput.defaultProps = {
  title: '',
  name1: '',
  value1: '',
  name2: '',
  value2: '',
  type1: 'text',
  type2: 'text',
  disabled1: false,
  disabled2: false,
  onChange1: () => { },
  onChange2: () => { },
  placeholder1: '',
  placeholder2: '',
  errorMessage: '',
  isError: false,
  isLarge: false,
};

DoubleRegularInput.propTypes = {
  title: PropTypes.string,
  name1: PropTypes.string,
  value1: PropTypes.string,
  name2: PropTypes.string,
  value2: PropTypes.string,
  type1: PropTypes.string,
  type2: PropTypes.string,
  disabled1: PropTypes.bool,
  disabled2: PropTypes.bool,
  onChange1: PropTypes.func,
  onChange2: PropTypes.func,
  placeholder1: PropTypes.string,
  placeholder2: PropTypes.string,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  isLarge: PropTypes.bool,
};

export default DoubleRegularInput;
