import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { gettext } from 'ttag';
import Select, { components } from 'react-select';
import classnames from 'classnames';
import _ from 'lodash';
import './styles.scss';

import darkArrowDownIcon from '../../../../static/images/dark-arrow-down-icon.svg';
import lightArrowDownIcon from '../../../../static/images/light-arrow-down-icon.svg';
import addIcon from '../../../../static/images/colored-add-icon.svg';

const SelectInput = (props) => {
  const generateCustomStyles = () => ({
    container: provided => ({
      ...provided,
      minWidth: '150px',
    }),
    control: (provided, state) => ({
      ...provided,
      minHeight: props.isLarge ? '40px' : '32px',
      height: props.isLarge ? '40px' : '32px',
      boxShadow: props.hasNoBorder ? 'none' : state.isFocused ? props.isError ? '0px 0px 0px 3px #FFDBE0' : '0px 0px 4px 1px rgba(31, 131, 204, 0.25)' : 'none',
      border: props.hasNoBorder
        ? 'none' : props.isError
          ? '1px solid #EF2641'
          : state.isDisabled
            ? '1px solid #D4D4D9;'
            : '1px solid #E9E9EC',
      borderRadius: '4px',
      padding: props.hasNoBorder ? 'unset' : props.isClearable ? '0 0 0 12px' : '0px 12px',
      backgroundColor: state.isDisabled ? '#D4D4D9' : props.isError ? state.isFocused ? '#FFF' : '#FFE5E9' : '#F7F9F9',

      '&:hover': {
        border:
          props.hasNoBorder
            ? 'none'
            : props.isError
              ? '1px solid #EF2641'
              : '1px solid #00888F',
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
      display: props.dropdownIndicatorComponent ? 'none' : 'initial',
    }),
    menu: provided => ({
      ...provided,
      boxShadow: '0px 6px 12px rgba(29, 47, 71, 0.06)',
    }),
    multiValue: provided => ({
      ...provided,
      alignItems: 'center',
      height: props.isMulti ? '1.5rem' : 'unset',
      backgroundColor: '#00888F',
      borderRadius: '2px',
      padding: '2.5px 8px',
      fontSize: '12px',
      fontWeight: 400,
      fontFamily: 'Open Sans',
      color: '#0a0b0c',
    }),
    multiValueLabel: provided => ({
      ...provided,
      color: 'white',
      padding: 0,
      paddingLeft: 0,
      fontSize: '12px',
      fontWeight: 400,
      fontFamily: 'Open Sans',
    }),
    multiValueRemove: provided => ({
      ...provided,
      padding: 0,
      marginLeft: '4px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#F7F9F9' : 'white',
      color: state.isSelected ? '#1d2f47' : '#4b5b73',
      fontWeight: state.isSelected ? 600 : 400,
      fontSize: props.isLarge ? '16px' : '14px',
      '&:hover': {
        backgroundColor: '#F7F9F9',
        cursor: 'pointer',
      },
      '&:not(:first-of-type)': {
        borderTop: '1px solid #f5f7fa',
      },
    }),
    placeholder: provided => ({
      ...provided,
      color: '#9F9FA7',
      fontSize: props.isLarge ? '16px' : '14px',
      fontWeight: 400,
    }),
    singleValue: provided => ({
      ...provided,
      color: '#1d2f47',
      fontSize: props.isLarge ? '16px' : '14px',
      fontWeight: 400,
    }),
    valueContainer: provided => ({
      ...provided,
      maxHeight: 'calc(8.25rem - 2 * 0.75rem)',
      overflowY: 'auto',
      padding: 0,
      fontSize: props.isLarge ? '16px' : '14px',
    }),
  });

  const selectInputRef = useRef(null);

  const onChange = (value) => {
    props.onChange(props.name, value, props.id);
  };

  const onClickAdd = () => {
    props.handleClickAdd();
  };

  const getTextValue = (value, isMulti) => {
    const newValue = _.cloneDeep(value);
    if (isMulti) {
      _.forEach(newValue, (item) => {
        if (item && item.label) {
          _.assign(item, { label: item.label });
        }
      });
    } else if (newValue && newValue.label) {
      _.assign(newValue, { label: newValue.label });
    }
    return newValue;
  };

  const getTextOptions = (options) => {
    const newOptions = _.cloneDeep(options);
    _.forEach(newOptions, (option) => {
      _.assign(option, { label: option.label });
    });
    return newOptions;
  };

  const generateSelectInputComponents = (dropdownIndicatorComponent, isHideDefaultDropdownIndicator) => {
    const inputComponents = {
      DropdownIndicator: selectProps => (
        dropdownIndicatorComponent || (
          isHideDefaultDropdownIndicator
            ? null
            : <img style={{ marginBottom: '5px' }} src={selectProps.hasValue ? darkArrowDownIcon : lightArrowDownIcon} alt="Arrow down icon" />
        )),
      // *: Using search icon (if has no value) and default clear icon (if has value)
      // *: Use default clear icon to prevent keep opening menu after clear value
      // Input: selectProps => <components.Input {...selectProps} />,
      Option: (selectProps) => {
        if (selectProps.data.isAddButton) {
          return (
            <div className="add-btn">
              <Button onClick={onClickAdd}>
                <img src={addIcon} alt="Create new referring physician icon" />
                <span className="text">{selectProps.label}</span>
              </Button>
            </div>
          );
        }
        return (
          <components.Option {...selectProps} />
        );
      },
    };
    return inputComponents;
  };

  // *: Prevent react-select auto focus to first option after opening menu
  useEffect(() => {
    selectInputRef.current.select.getNextFocusedOption = () => null;
  }, []);

  const onKeyDown = (e) => {
    if (props.forceKeyDown || (!selectInputRef && !selectInputRef.current && !selectInputRef.current.state && !selectInputRef.current.state.menuIsOpen)) {
      props.onKeyDown(e);
    }
  };

  return (
    <div className={classnames('custom-select-input', props.disabled ? '--disabled' : undefined, props.isError ? '--error' : undefined, props.className)}>
      {
        !!props.label && (
          <div className={classnames('custom-select-input__label', props.classNameLabel)}>{gettext(props.label)}</div>
        )
      }

      {
        props.optionCheckOut
      }

      <Select
        ref={selectInputRef}
        inputId={props.id}
        onKeyDown={onKeyDown}
        isDisabled={props.disabled}
        styles={generateCustomStyles()}
        value={getTextValue(props.value, props.isMulti)}
        onChange={onChange}
        options={getTextOptions(props.options)}
        isClearable={props.isClearable}
        isSearchable={props.isSearchable}
        placeholder={props.placeholder}
        closeMenuOnSelect={!props.isMulti}
        components={generateSelectInputComponents(props.dropdownIndicatorComponent, props.isHideDefaultDropdownIndicator)}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        defaultValue={getTextValue(props.defaultValue, props.isMulti)}
        classNamePrefix={props.classNamePrefix}
        menuIsOpen={props.menuIsOpen}
        isMulti={props.isMulti}
        noOptionsMessage={props.noOptionsMessage}
        blurInputOnSelect={props.blurInputOnSelect}
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

SelectInput.defaultProps = {
  label: '',
  className: '',
  disabled: false,
  isMulti: false,
  noOptionsMessage: () => { },
  isClearable: false,
  isSearchable: false,
  hasNoBorder: false,
  placeholder: '',
  isError: false,
  onBlur: () => { },
  onFocus: () => { },
  errorMessage: '',
  value: undefined,
  defaultValue: undefined,
  handleClickAdd: () => { },
  isWarning: false,
  warningMessage: '',
  linkText: '',
  handleClickLinkText: () => { },
  id: '',
  onKeyDown: () => { },
  dropdownIndicatorComponent: undefined,
  isHideDefaultDropdownIndicator: false,
  optionCheckOut: undefined,
  classNameLabel: '',
  classNamePrefix: undefined,
  isLarge: false,
  menuIsOpen: undefined,
  forceKeyDown: false,
  blurInputOnSelect: false,
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  noOptionsMessage: PropTypes.func,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  hasNoBorder: PropTypes.bool,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  errorMessage: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })).isRequired,
  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  defaultValue: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  onChange: PropTypes.func.isRequired,
  handleClickAdd: PropTypes.func,
  isWarning: PropTypes.bool,
  warningMessage: PropTypes.string,
  linkText: PropTypes.string,
  handleClickLinkText: PropTypes.func,
  id: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
  classNameLabel: PropTypes.string,
  onKeyDown: PropTypes.func,
  dropdownIndicatorComponent: PropTypes.node,
  isHideDefaultDropdownIndicator: PropTypes.bool,
  optionCheckOut: PropTypes.shape(),
  classNamePrefix: PropTypes.string,
  isLarge: PropTypes.bool,
  menuIsOpen: PropTypes.bool,
  forceKeyDown: PropTypes.bool,
  blurInputOnSelect: PropTypes.bool,
};

export default SelectInput;
