import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
// import components from 'react-select';
import classnames from 'classnames';
import { gettext } from 'ttag';
import _ from 'lodash';

import AsyncSelect from 'react-select/async';
// import darkArrowDownIcon from '../../static/images/dark-arrow-down-icon.svg';
// import lightArrowDownIcon from '../../static/images/light-arrow-down-icon.svg';
// import addIcon from '../../static/images/colored-add-icon.svg';

import './styles.scss';

const AsyncSelectInput = (props) => {
  const generateCustomStyles = () => ({
    container: provided => ({
      ...provided,
      minWidth: '9.375rem',
    }),
    control: (provided, state) => ({
      ...provided,
      minHeight: props.isMulti ? props.isLarge ? '40px' : '32px' : 'unset',
      height: props.isMulti ? 'unset' : props.isLarge ? '40px' : '32px',
      boxShadow: props.hasNoBorder ? 'none' : state.isFocused ? props.isError ? '0px 0px 0px 3px #FFDBE0' : '0px 0px 4px 1px rgba(31, 131, 204, 0.25)' : 'none',
      border: props.hasNoBorder ? 'none' : props.isError ? '1px solid #EF2641' : state.isFocused ? '1px solid #1F83CC' : '1px solid #E9E9EC',
      borderRadius: '4px',
      padding: props.hasNoBorder ? 'unset' : props.isClearable ? '0 0 0 1rem' : '7px 12px',
      backgroundColor: state.isDisabled ? '#f5f7fa' : props.isError ? state.isFocused ? '#FFFFFF' : '#FFE5E9' : '#F7F9F9',

      '&:hover': {
        border:
          props.hasNoBorder
            ? 'none'
            : props.isError
              ? '1px solid #EF2641'
              : '1px solid #1F83CC',
      },
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',

      "+ div[class*='-indicatorContainer']": {
        padding: 0,
      },
    }),
    clearIndicator: provided => ({
      ...provided,
      display: 'initial',
    }),
    dropdownIndicator: provided => ({
      ...provided,
      display: props.dropdownIndicatorComponent ? 'none' : 'initial',
      height: '100%',
      width: '20px',
      backgroundColor: 'red',
      paddingRight: '20px',
    }),
    menu: provided => ({
      ...provided,
      boxShadow: '0px 6px 6px #E9E9EC',
    }),
    multiValue: provided => ({
      ...provided,
      alignItems: 'center',
      height: props.isMulti ? '1.5rem' : 'unset',
      backgroundColor: '#0d9e92',
      borderRadius: '4px',
      color: 'white',
      padding: '0 0.5rem',
    }),
    multiValueLabel: provided => ({
      ...provided,
      color: 'white',
      padding: 0,
      paddingLeft: 0,
      fontSize: '0.875rem',
    }),
    multiValueRemove: provided => ({
      ...provided,
      padding: 0,
      marginLeft: '0.75rem',

      '&:hover': {
        backgroundColor: '#0d9e92',
        color: 'white',
        cursor: 'pointer',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#F4F4F6' : 'white',
      color: state.isSelected ? '#1d2f47' : '#4b5b73',
      fontWeight: state.isSelected ? 600 : 400,
      '&:hover': {
        backgroundColor: '#F4F4F6',
        cursor: 'pointer',
      },

      '&:not(:first-of-type)': {
        borderTop: '1px solid #f5f7fa',
      },
    }),
    placeholder: provided => ({
      ...provided,
      color: '#9F9FA7',
      margin: 0,
      fontSize: props.isLarge ? '16px' : '14px',
      fontWeight: 400,
    }),
    singleValue: provided => ({
      ...provided,
      color: '#0A0B0C',
      fontSize: 16,
      fontWeight: 400,
      fontStyle: 'normal',
    }),
    valueContainer: provided => ({
      ...provided,
      maxHeight: 'calc(8.25rem - 2 * 0.75rem)',
      overflowY: 'auto',
      padding: 0,
    }),
    input: provided => ({
      ...provided,
      width: '100%',
      margin: 0,
      fontSize: props.isLarge ? '16px' : '14px',
    }),
  });

  const selectInputRef = useRef(null);

  const onChange = (value, action) => {
    props.onChange(props.name, value, props.index, action);
  };

  // const onClickAdd = () => {
  //   props.handleClickAdd();
  // };

  const getTextValue = (value, isMulti) => {
    const newValue = _.cloneDeep(value);
    if (isMulti) {
      _.forEach(newValue, (item) => {
        if (item?.label) {
          _.assign(item, { label: gettext(item.label) });
        }
      });
    } else if (newValue) {
      _.assign(newValue, { label: gettext(newValue.label) });
    }
    return newValue;
  };

  // const getTextOptions = (options) => {
  //   const newOptions = _.cloneDeep(options);
  //   _.forEach(newOptions, (option) => {
  //     _.assign(option, { label: gettext(option.label) });
  //   });
  //   return newOptions;
  // };

  // const generateSelectInputComponents = (dropdownIndicatorComponent, isHideDefaultDropdownIndicator) => {
  //   const inputComponents = {
  //     DropdownIndicator: selectProps => (
  //       dropdownIndicatorComponent || (
  //         isHideDefaultDropdownIndicator
  //           ? props.iconIndicator
  //           : <img style={{ marginBottom: '5px' }} src={selectProps.hasValue ? darkArrowDownIcon : lightArrowDownIcon} alt="Arrow down icon" />
  //       )), // *: Using search icon (if has no value) and default clear icon (if has value)
  //     // *: Use default clear icon to prevent keep opening menu after clear value
  //     // Input: selectProps => <components.Input {...selectProps} />,
  //     Option: (selectProps) => {
  //       if (selectProps.data.isAddButton) {
  //         return (
  //           <div className="add-btn">
  //             <Button onClick={onClickAdd}>
  //               <img src={addIcon} alt="Create new referring physician icon" />
  //               <span className="text">{selectProps.label}</span>
  //             </Button>
  //           </div>
  //         );
  //       }
  //       return (
  //         <components.Option {...selectProps} />
  //       );
  //     },
  //   };
  //   return inputComponents;
  // };

  const onInputChange = (value, action) => {
    props.onInputChange(value, action, props.index);
  };

  const onKeyDown = (e) => {
    props.onKeyDown(e);
  };

  // *: Prevent react-select auto focus to first option after opening menu
  useEffect(() => {
    selectInputRef.current.select.getNextFocusedOption = () => null;
  }, []);

  return (
    <div className={classnames('custom-select-input', props.disabled ? '--disabled' : undefined, props.className)}>
      {
        !!props.label && (
          <div className={classnames('custom-select-input__label', props.classNameLabel)}>{gettext(props.label)}</div>
        )
      }

      {
        props.optionCheckOut
      }

      <AsyncSelect
        classNamePrefix={props.classNamePrefix}
        ref={selectInputRef}
        styles={generateCustomStyles()}
        defaultOptions
        defaultValue={props.defaultValue}
        onChange={onChange}
        onInputChange={onInputChange}
        onKeyDown={onKeyDown}
        loadOptions={_.debounce(props.loadOptions, 500)}
        placeholder={props.placeholder}
        isDisabled={props.disabled}
        isClearable={props.isClearable}
        isSearchable={props.isSearchable}
        inputValue={props.inputValue}
        components={{ DropdownIndicator: () => props.iconIndicator }}
        isHideDefaultDropdownIndicator={props.isHideDefaultDropdownIndicator}
        value={getTextValue(props.value, props.isMulti)}
        isMulti={props.isMulti}
        noOptionsMessage={props.noOptionsMessage}
        controlShouldRenderValue={props.controlShouldRenderValue}
      />

      {
        props.isError && !!props.errorMessage
          ? (
            <div className="custom-select-input__error-message">{props.errorMessage}</div>
          )
          : null
      }

      {
        props.isWarning && (
          <div className="custom-select-input__warning-container">
            <div className="custom-select-input__warning-message">{props.warningMessage}</div>
            <Button
              className="custom-select-input__warning-button"
              color="link"
              onClick={props.handleClickLinkText}
            >
              {props.linkText}
            </Button>
          </div>
        )
      }
    </div>
  );
};

AsyncSelectInput.defaultProps = {
  label: '',
  className: '',
  disabled: false,
  isMulti: false,
  noOptionsMessage: () => { },
  controlShouldRenderValue: true,
  isClearable: false,
  isSearchable: false,
  hasNoBorder: false,
  placeholder: null,
  isError: false,
  errorMessage: '',
  value: undefined,
  defaultValue: undefined,
  // handleClickAdd: () => { },
  onInputChange: () => { },
  onKeyDown: () => { },
  isWarning: false,
  warningMessage: '',
  linkText: '',
  handleClickLinkText: () => { },
  dropdownIndicatorComponent: undefined,
  isHideDefaultDropdownIndicator: false,
  optionCheckOut: undefined,
  classNameLabel: '',
  iconIndicator: undefined,
  index: undefined,
  inputValue: null,
  classNamePrefix: undefined,
  isLarge: false,
};

AsyncSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  noOptionsMessage: PropTypes.func,
  controlShouldRenderValue: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  hasNoBorder: PropTypes.bool,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  loadOptions: PropTypes.func.isRequired,
  defaultValue: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  onChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  // handleClickAdd: PropTypes.func,
  isWarning: PropTypes.bool,
  warningMessage: PropTypes.string,
  linkText: PropTypes.string,
  handleClickLinkText: PropTypes.func,
  index: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  classNameLabel: PropTypes.string,
  dropdownIndicatorComponent: PropTypes.node,
  isHideDefaultDropdownIndicator: PropTypes.bool,
  optionCheckOut: PropTypes.shape(),
  iconIndicator: PropTypes.node,
  inputValue: PropTypes.string,
  classNamePrefix: PropTypes.string,
  isLarge: PropTypes.bool,
};

export default AsyncSelectInput;
