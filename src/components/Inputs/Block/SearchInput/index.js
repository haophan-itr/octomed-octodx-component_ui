import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import NumberFormat from 'react-number-format';
import _ from 'lodash';
import {
  ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import InputMask from 'react-input-mask';

import AsyncSelect from '../../../AsyncSelect';
import ToggleButton from '../../../Buttons/ToggleButton';
import IconSearchBy from '../../../../static/images/search-by-icon.svg';
import IconSearch from '../../../../static/images/search-icon.svg';

import './styles.scss';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#2684FF' : 'white',
    '&:hover': {
      backgroundColor: state.isSelected ? '#2684FF' : '#deebff',
      cursor: 'pointer',
    },

    '&:not(:last-child)': {
      borderBottom: 'unset',
    },
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  clearIndicator: provided => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    display: 'none',
  }),
  loadingIndicator: provided => ({
    ...provided,
    display: 'initial',
    position: 'absolute',
    right: 35,
    top: 8,
  }),
};

const DropdownItemDetail = (props) => {
  const onClick = () => {
    props.onClick(props.name, props.data);
  };

  return (
    <button
      onClick={onClick}
      className={
        classnames(
          'toggle-button-v2',
          props.className,
        )
      }
    >
      {props.data === 'All' ? 'All time' : props.data}
    </button>
  );
};

DropdownItemDetail.defaultProps = {
  className: '',
};

DropdownItemDetail.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
    ]),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const SearchInput = (props) => {
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    props.onChange(name, value);
  };

  const onValueChange = ({ value }) => {
    props.onChange(props.name, value);
  };

  const format = value => value;

  const handleChange = (name, value, index, action) => {
    props.handleChangeAsyncSelect(name, value, index, action);
  };

  const onChangeSearchBy = (name, value) => {
    if (value !== props.defaultValueOptions) {
      props.setSearchByValue(value);
    }
  };

  const onChangeSearchByV2 = (name, value) => {
    if (name !== props.defaultValueOptions) {
      props.setSearchByValue(name);
    }
  };

  const handleInputChange = (inputValue) => {
    props.handleInputChange(inputValue);
  };

  const loadOptions = (inputValue, callback) => {
    props.loadOptions(inputValue, callback);
  };

  return (
    <div className={classnames('custom-search', props.isLarge ? 'custom-search-large' : 'custom-search-small',
      props.isPrefixIconRight && props.isPrefixIcon ? 'prefix-icon-right' : '', props.className)}
    >
      {props.isPrefixIcon ? (
        <div className="icon-left">
          {props.iconPrefix || <img src={IconSearch} alt="Icon Prefix" />}
        </div>
      ) : null}
      {props.isAsyncSelect
        ? (
          <AsyncSelect
            id={props.id}
            name={props.name}
            menuPlacement="bottom"
            placeholder={props.placeholder}
            styles={customStyles}
            isClearable={props.isClearable}
            isSearchable={props.isSearchable}
            className={classnames('custom-select-async', props.isLarge ? 'input-large' : 'input-small', props.classNameAsync)}
            classNamePrefix={classnames('custom-async-prefix', props.classNamePrefixAsync)}
            defaultOptions={props.defaultOptionAsync}
            loadOptions={loadOptions}
            value={props.valueAsync}
            inputValue={props.inputValueAsync}
            onChange={handleChange}
            onInputChange={handleInputChange}
            iconIndicator={props.iconIndicator}
            errorMessage={props.errorMessage}
            isError={props.isError}
            index={props.index}
            isHideDefaultDropdownIndicator={props.isHideDefaultDropdownIndicator}
            noOptionsMessage={props.noOptionsMessage}
          />
        )
        : props.isDateMask || props.isPhoneNumberMask
          ? (
            <InputMask
              className={
                classnames(
                  'custom-mask-input',
                  props.isLarge ? '--mask-input-large' : '--mask-input-small',
                  props.disabled ? '--disabled' : '',
                  props.isPrefixIcon ? 'css-icon-left' : undefined,
                )
              }
              name={props.name}
              type={props.type}
              placeholder={props.placeholder}
              mask={props.isDateMask ? '99/99/9999' : '999-999-9999'}
              maskChar={null}
              value={props.value}
              onChange={onChangeInput}
              disabled={props.disabled}
              id={props.id}
            />
          )
          : props.type === 'number' ? (
            <NumberFormat
              id={props.id}
              className="input-number"
              placeholder={props.placeholder}
              name={props.name}
              onValueChange={onValueChange}
              value={props.value}
              disabled={props.disabled}
              allowNegative={false}
              isNumericString
              format={format}
              keyDown={props.onKeyDown}
            />
          ) : (
            <input
              type={props.type}
              id={props.id}
              className={
                classnames(
                  'custom-search-input',
                  props.isLarge ? '--search-input-large' : '--search-input-small',
                  props.disabled ? '--disabled' : undefined,
                  props.isPrefixIcon ? 'css-icon-left' : undefined,
                )
              }
              name={props.name}
              value={props.value}
              disabled={props.disabled}
              placeholder={props.placeholder}
              onChange={onChangeInput}
            />
          )
      }

      {
        props.hasSearchBy && (
          props.isDropdownSearchBy
            ? (
              <ButtonDropdown className="search-dropdown-custom-v2" direction="down" isOpen={props.visibleSearchBy} toggle={props.onSearchBy}>
                <DropdownToggle
                  className={classnames(
                    'custom-btn-search-by',
                    props.isLarge ? '--btn-search-by-large' : '--btn-search-by-small',
                  )}
                >
                  <img
                    className="icon-search-by"
                    src={IconSearchBy}
                    alt="Icon search by"
                  />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <div className="search-by-value-v2">
                      {
                        _.map(props.options, (item, index) => (
                          <div
                            key={index}
                            className="option"
                          >
                            {
                              item?.label === props.defaultValueOptions && (
                                <div className="icon-select" />
                              )
                            }
                            <DropdownItemDetail
                              className="toggle-btn-search-by"
                              name={item?.label}
                              data={item?.value}
                              onClick={onChangeSearchByV2}
                            />
                          </div>
                        ))
                      }
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            )
            : (
              <ButtonDropdown direction="down" isOpen={props.visibleSearchBy} toggle={props.onSearchBy}>
                <DropdownToggle
                  className={classnames(
                    'custom-btn-search-by',
                    props.isLarge ? '--btn-search-by-large' : '--btn-search-by-small',
                  )}
                >
                  <img
                    className="icon-search-by"
                    src={IconSearchBy}
                    alt="Icon search by"
                  />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <div className="box-search-by">
                      <p>Search by</p>
                      <div className="search-by-value">
                        {
                          _.map(props.options, (item, index) => (
                            <div
                              key={index}
                              className="option"
                            >
                              <ToggleButton
                                className="toggle-btn-search-by"
                                name="searchByValue"
                                data={item}
                                isActive={item.label === props.defaultValueOptions}
                                onClick={onChangeSearchBy}
                              />
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            )
        )
      }
    </div>
  );
};

SearchInput.defaultProps = {
  name: '',
  disabled: false,
  onChange: () => { },
  onSearchBy: () => { },
  setSearchByValue: () => { },
  loadOptions: () => { },
  handleInputChange: () => { },
  handleChangeAsyncSelect: () => { },
  placeholder: 'Placeholder',
  visibleSearchBy: false,
  defaultValueOptions: 'Option 1',
  type: 'text',
  options: [
    {
      label: 'Option 1',
      value: 'Option 1',
    },
    {
      label: 'Option 2',
      value: 'Option 2',
    },
  ],
  isAsyncSelect: false,
  className: undefined,
  classNameAsync: undefined,
  classNamePrefixAsync: undefined,
  defaultOptionAsync: [],
  value: '',
  inputValueAsync: null,
  isPrefixIcon: false,
  iconPrefix: null,
  hasSearchBy: true,
  isDateMask: false,
  isPhoneNumberMask: false,
  isLarge: false,
  iconIndicator: null,
  isClearable: false,
  isSearchable: false,
  errorMessage: null,
  isError: false,
  isHideDefaultDropdownIndicator: false,
  index: null,
  valueAsync: null,
  isPrefixIconRight: false,
  id: '',
  onKeyDown: () => { },
  isDropdownSearchBy: false,
};

SearchInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValueOptions: PropTypes.string,
  onSearchBy: PropTypes.func,
  visibleSearchBy: PropTypes.bool,
  setSearchByValue: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.any),
  loadOptions: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleChangeAsyncSelect: PropTypes.func,
  isAsyncSelect: PropTypes.bool,
  className: PropTypes.string,
  classNameAsync: PropTypes.string,
  classNamePrefixAsync: PropTypes.string,
  defaultOptionAsync: PropTypes.arrayOf(PropTypes.any),
  value: PropTypes.string,
  valueAsync: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  inputValueAsync: PropTypes.string,
  isPrefixIcon: PropTypes.bool,
  iconPrefix: PropTypes.node,
  hasSearchBy: PropTypes.bool,
  isDateMask: PropTypes.bool,
  isPhoneNumberMask: PropTypes.bool,
  isLarge: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isHideDefaultDropdownIndicator: PropTypes.bool,
  iconIndicator: PropTypes.node,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  index: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
  ]),
  isPrefixIconRight: PropTypes.bool,
  id: PropTypes.string,
  onKeyDown: PropTypes.func,
  isDropdownSearchBy: PropTypes.bool,
};

export default SearchInput;
