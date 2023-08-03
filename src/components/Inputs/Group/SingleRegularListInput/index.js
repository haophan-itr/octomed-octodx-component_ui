import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import RegularInput from '../../Block/RegularInput';
import SelectInput from '../../Block/SelectInput';
import './styles.scss';

const SingleRegularListInput = props => (
  <div className={classnames('single-regular-list-input', props.isError ? '--error' : '')}>
    <div className="title">{props.title}</div>
    <div className="input-container">
      <RegularInput
        disabled={props.disabled1}
        name={props.name1}
        value={props.value1}
        placeholder={props.placeholder1}
        onChange={props.onChange1}
        className={props.className1}
        type={props.type1}
        isLarge={props.isLarge}
      />
      <SelectInput
        classNamePrefix="regular-list-input"
        disabled={props.disabled2}
        name={props.name2}
        options={props.options}
        value={props.value2}
        onChange={props.onChange2}
        placeholder={props.placeholder2}
        className={props.className2}
        isLarge={props.isLarge}
        dropdownIndicatorComponent={props.dropdownIndicatorComponent}
        isHideDefaultDropdownIndicator={props.isHideDefaultDropdownIndicator}
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

SingleRegularListInput.defaultProps = {
  title: '',
  name1: '',
  name2: '',
  value1: '',
  value2: '',
  type1: 'text',
  className1: '',
  className2: '',
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

SingleRegularListInput.propTypes = {
  title: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  value1: PropTypes.string,
  value2: PropTypes.objectOf(PropTypes.shape()),
  type1: PropTypes.string,
  className1: PropTypes.string,
  className2: PropTypes.string,
  disabled1: PropTypes.bool,
  disabled2: PropTypes.bool,
  onChange1: PropTypes.func,
  onChange2: PropTypes.func,
  placeholder1: PropTypes.string,
  placeholder2: PropTypes.string,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  isLarge: PropTypes.bool,
  dropdownIndicatorComponent: PropTypes.node.isRequired,
  isHideDefaultDropdownIndicator: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })).isRequired,
};

export default SingleRegularListInput;
