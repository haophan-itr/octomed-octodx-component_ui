import React, {
  useRef, useImperativeHandle, useEffect, forwardRef,
} from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import usePlacesAutocomplete, { getGeocode } from 'use-places-autocomplete';
import classnames from 'classnames';
import _ from 'lodash';

import { useMergeState } from '../../utils/customHooks';
import './styles.scss';

const CustomInput = (selectProps) => {
  const newProps = _.cloneDeep(selectProps);
  _.assign(newProps, { isHidden: false });
  return (<components.Input {...newProps} />);
};

const AutoCompleteInput = forwardRef((props, ref) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: 'unset',
      height: '2rem',
      boxShadow: state.isFocused ? props.isError ? '0px 0px 0px 3px #FFDBE0' : '0px 0px 4px 1px rgba(31, 131, 204, 0.25)' : 'none',
      border: props.isError ? '1px solid #EF2641' : state.isFocused ? '1px solid #1F83CC' : '1px solid #E9E9EC',
      borderRadius: '4px',
      padding: '0 0 0 12px',
      backgroundColor: state.isDisabled ? '#E9E9EC' : props.isError ? state.isFocused ? '#FFFFFF' : '#FFE5E9' : '#F7F9F9',

      '&:hover': {
        border: props.isError
          ? '1px solid #EF2641'
          : '1px solid #1F83CC',
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    menu: (provided, state) => ({
      ...provided,
      boxShadow: '0px 6px 12px rgba(29, 47, 71, 0.06)',
    }),
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: '#0D9E92',
      borderRadius: '4px',
      color: 'white',
      padding: '0 0.5rem',
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: 'white',
      padding: 0,
      paddingLeft: 0,
      fontSize: '0.875rem',
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      padding: 0,
      marginLeft: '0.75rem',

      '&:hover': {
        backgroundColor: '#0D9E92',
        color: 'white',
        cursor: 'pointer',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#F4F4F6' : 'white',
      color: state.isSelected ? '#1D2F47' : '#4B5B73',
      fontWeight: state.isSelected ? 'bold' : 'normal',

      '&:hover': {
        backgroundColor: '#F4F4F6',
        cursor: 'pointer',
      },

      '&:not(:first-of-type)': {
        borderTop: '1px solid #F5F7FA',
      },
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: '#9F9FA7',
      fontStyle: 'italic',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#1D2F47',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      maxHeight: 'calc(8.25rem - 2 * 0.75rem)',
      overflowY: 'auto',
      padding: 0,
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      padding: 0,
      width: '15px',
    }),
  };
  const refCurrent = useRef({});
  const selectInputRef = useRef();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: {
        country: props.country,
      },
      types: props.isSearchCity ? ['(cities)'] : [],
    },
    cache: false,
  });

  const [state, setState] = useMergeState({
    addressArray: [],
    address: '',
  });

  const getDataGoogle = (addressComponents) => {
    const object = {};
    _.forEach(addressComponents, (element) => {
      if (typeof element.types !== 'undefined') {
        if (element.types[0] === 'postal_code') {
          _.assign(object, { zip: element.short_name });
        }
        if (element.types[0] === 'administrative_area_level_1') {
          const state = {
            name: element.long_name,
            code: element.short_name,
          };
          _.assign(object, { state });
        }
        if (element.types[0] === 'country') {
          const country = {
            name: element.long_name,
            code: element.short_name,
          };
          _.assign(object, { country });
        }
        if (element.types[0] === 'locality') {
          _.assign(object, { city: element.long_name });
        }
      }
    });
    return object;
  };

  const resetData = () => {
    setState({
      addressArray: [],
      address: '',
    });
  };

  useImperativeHandle(ref, () => ({
    resetData() {
      setState({
        addressArray: [],
        address: '',
      });
      // selectInputRef.current.select?.clearValue();

      if (selectInputRef.current && selectInputRef.current.select) {
        selectInputRef.current.select.clearValue();
      }
    },
  }));

  const onInputChange = (inputValue, { action }) => {
    if (action === 'input-change') {
      if (props.onChangeInput) {
        props.onChangeInput(inputValue, props.isSearchCity);
      }
      setValue(inputValue);
      setState({ address: inputValue });
    }
  };

  const onChange = async (addressSelect) => {
    if (addressSelect) {
      const eleData = _.find(refCurrent.current.dataAddress, x => x.value === addressSelect.value);
      if (eleData) {
        const { placeId } = eleData;
        if (placeId) {
          const parameter = { placeId };
          try {
            const result = await getGeocode(parameter);
            if (result && result.length > 0) {
              const { address_components: addressComponents } = result[0];
              const object = getDataGoogle(addressComponents);
              if (!props.isSearchCity) {
                _.assign(object, { address: eleData.address });
              }
              if (props.onChange) {
                props.onChange(object, props.isSearchCity);
              }
            }
          } catch (error) {
            console.error('Failed to get geocode', error);
          }
        }
        setState({
          address: eleData.address,
        });
      }
    } else {
      resetData();

      if (props.eventClear) {
        props.eventClear(props.isSearchCity);
      }
    }
  };

  useEffect(() => {
    if (props.value !== undefined) {
      if (props.value === '') {
        selectInputRef.current.select.clearValue();
      }

      setState({ address: props.value });
    }
  }, [props.value]);

  useEffect(() => {
    const newArray = [];
    const newArrayData = [];
    _.forEach(data, (x, index) => {
      const {
        structured_formatting: { main_text: mainText, secondary_text: secondaryText },
        place_id: placeId,
      } = x;
      const label = _.join([mainText, secondaryText], ' ');
      newArray.push({
        value: index,
        label,
      });
      newArrayData.push({
        value: index,
        label,
        placeId,
        address: mainText,
      });
    });
    refCurrent.current = { dataAddress: newArrayData };
    setState({ addressArray: newArray });
  }, [data]);

  // *: Prevent react-select auto focus to first option after opening menu
  useEffect(() => {
    selectInputRef.current.select.getNextFocusedOption = () => null;
  }, []);

  const onKeyDown = (e) => {
    if (!selectInputRef && !selectInputRef.current && !selectInputRef.current.state && !selectInputRef.current.state.menuIsOpen) {
      props.onKeyDown(e);
    }
  };

  return (
    <div className={classnames('custom-autocomplete-input', props.disabled ? '--disabled' : undefined, props.className)}>
      {
        !!props.label && (
          <div className="custom-select-input__label">{props.label}</div>
        )
      }

      <Select
        classNamePrefix={classnames('auto-prefix', props.isLarge ? 'auto-large' : 'auto-small', props.classNamePrefix)}
        ref={selectInputRef}
        inputId={props.id}
        onKeyDown={onKeyDown}
        isClearable
        isDisabled={props.disabled}
        styles={customStyles}
        name={props.name}
        placeholder={props.placeholder}
        options={state.addressArray}
        filterOption={() => true}
        inputValue={state.address}
        onInputChange={onInputChange}
        onChange={onChange}
        components={{
          Input: CustomInput,
          DropdownIndicator: () => null,
        }}
        isMulti={props.isMulti}
        noOptionsMessage={props.noOptionsMessage}
      />

      {
        props.isError && !!props.errorMessage
          ? (
            <div className="custom-select-input__error-message">{props.errorMessage}</div>
          )
          : null
      }
    </div>
  );
});

AutoCompleteInput.defaultProps = {
  isSearchCity: false,
  disabled: false,
  className: '',
  country: 'US',
  label: '',
  placeholder: '',
  isError: false,
  errorMessage: '',
  value: '',
  id: '',
  onKeyDown: () => { },
  classNamePrefix: undefined,
  isLarge: false,
  isMulti: false,
  noOptionsMessage: () => { },
};

AutoCompleteInput.propTypes = {
  isSearchCity: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  country: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  eventClear: PropTypes.func.isRequired,
  id: PropTypes.string,
  onKeyDown: PropTypes.func,
  classNamePrefix: PropTypes.string,
  isLarge: PropTypes.bool,
  isMulti: PropTypes.bool,
  noOptionsMessage: PropTypes.func,
};

export default AutoCompleteInput;
