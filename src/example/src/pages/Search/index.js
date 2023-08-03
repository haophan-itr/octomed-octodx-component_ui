import { Divider, PageHeader } from 'antd';
import _ from 'lodash';
import React, { useRef } from 'react';
import AsyncSelectInput from '../../componentUI/components/AsyncSelect';
import SearchInput from '../../componentUI/components/Inputs/Block/SearchInput';
import SelectInput from '../../componentUI/components/Inputs/Block/SelectInput';

import IconIndicator from '../../static/images/arrow.svg';
import IconSearch from '../../static/images/search-icon.svg';
import IconSearch2 from '../../static/images/search-icon-2.svg';
import IconSearchGreen from '../../static/images/icon-search-green.svg';

import { useMergeState } from '../../utils/customHooks';

import './styles.scss';

const SearchPage = (props) => {
  const [state, setState] = useMergeState({
    searchValue: '',
    valueOption: 'Ticket ID',
    showDropdownSearchBy: false,
    defaultValueOptions: [],
    inputValueAsync: null,
    reason: undefined,
    menuIsOpen: undefined,
    ticketId: undefined,
    dob: undefined,
    phone: undefined,
    studyId: undefined,
    patientName: undefined,
  });
  const optionSearch = useRef([
    {
      label: 'Ticket ID',
      value: 'Ticket ID',
    },
    {
      label: 'Study ID',
      value: 'Study ID',
    },
    {
      label: 'Patient Name',
      value: 'Patient Name',
    },
    {
      label: 'Date of Birth',
      value: 'Date of Birth',
    },
    {
      label: 'Phone',
      value: 'Phone',
    },
  ]);

  const defaultOptionAsync = useRef([
    {
      label: 'ABC 1',
      value: 'ABC 1',
    },
    {
      label: 'ABC 2',
      value: 'ABC 2',
    },
    {
      label: 'ABC 3',
      value: 'ABC 3',
    },
  ]);

  const onChangeSearch = (name, value) => {
    const newValue = value.replace(/ |\s|&nbsp;/g, ' ');
    setState({ searchValue: newValue });
  };

  const onShowSearchBy = () => {
    const { showDropdownSearchBy } = state;
    setState({ showDropdownSearchBy: !showDropdownSearchBy });
  };


  const onSetValueOption = (valueOption) => {
    setState({ valueOption });
  };

  const formatPlaceholder = () => {
    switch (state.valueOption) {
      case 'Ticket ID':
        return 'Search by Ticket ID';
      case 'Study ID':
        return 'Search by Study ID';
      case 'Patient Name':
        return 'Search by Patient Name';
      case 'Date of Birth':
        return 'Search by Date of Birth (MM/DD/YYYY)';
      case 'Phone':
        return 'Search by Phone (000-000-0000)';
      default:
        return 'Search by Ticket ID';
    }
  };

  const loadOptions = (inputValue, callback) => {
    if (!inputValue) {
      callback([]);
    } else {
      setState({ defaultValueOptions: defaultOptionAsync.current });
      callback(defaultOptionAsync.current);
    }
  };

  const handleInputChange = (inputValue) => {
    setState({ inputValueAsync: inputValue });
  };

  const handleChangeSelectAsync = (name, value) => {
    setState({ valueAsync: value });
  };

  const formatValueSearch = () => {
    switch (state.searchValue) {
      case 'Ticket ID':
        return state.ticketId;
      case 'Date of Birth':
        return state.dob;
      case 'Phone':
        return state.phone;
      case 'Study ID':
        return state.studyId;
      case 'Patient Name':
        return state.patientName;
      default:
        return state.ticketId;
    }
  };

  const formatNameSearch = () => {
    switch (state.searchValue) {
      case 'Ticket ID':
        return 'ticketId';
      case 'Date of Birth':
        return 'dob';
      case 'Phone':
        return 'phone';
      case 'Study ID':
        return 'studyId';
      case 'Patient Name':
        return 'patientName';
      default:
        return 'ticketId';
    }
  };

  return (
    <div className="container-search">
      <PageHeader
        title="SEARCH"
        subTitle="component"
        className="title-header-search"
      />
      <Divider />
      <div className="search-large">
        <h2>Search component (large)</h2>
        <div className="content">
          {/* <SearchInput
            className="search-input-ticket"
            name={formatNameSearch()}
            value={state.searchValue}
            onChange={onChangeSearch}
            placeholder={formatPlaceholder()}
            options={optionSearch.current}
            defaultValueOptions={state.valueOption}
            onSearchBy={onShowSearchBy}
            visibleSearchBy={state.showDropdownSearchBy}
            setSearchByValue={onSetValueOption}
            isDateMask={state.valueOption === 'Date of Birth'}
            isPhoneNumberMask={state.valueOption === 'Phone'}
            type={state.valueOption === 'Ticket ID' || state.valueOption === 'Study ID' ? 'number' : 'text'}
            isSearchable
            isClearable
            valueAsync={state.valueAsync}
            isAsyncSelect={state.valueOption === 'Patient Name'}
            handleInputChange={handleInputChange}
            handleChangeAsyncSelect={handleChangeSelectAsync}
            loadOptions={loadOptions}
            defaultOptionAsync={state.defaultValueOptions}
            inputValueAsync={state.inputValueAsync}
            isHideDefaultDropdownIndicator
            isPrefixIcon
            isPrefixIconRight
            iconPrefix={<img src={IconSearchGreen} alt="Icon" />}
            isLarge
          /> */}
          {/* <SearchInput
            className="search-input-ticket"
            name={formatNameSearch()}
            value={state.searchValue}
            onChange={onChangeSearch}
            placeholder={formatPlaceholder()}
            options={optionSearch.current}
            defaultValueOptions={state.valueOption}
            onSearchBy={onShowSearchBy}
            visibleSearchBy={state.showDropdownSearchBy}
            setSearchByValue={onSetValueOption}
            isDateMask={state.valueOption === 'Date of Birth'}
            isPhoneNumberMask={state.valueOption === 'Phone'}
            type={state.valueOption === 'Ticket ID' || state.valueOption === 'Study ID' ? 'number' : 'text'}
            isSearchable
            isClearable
            valueAsync={state.valueAsync}
            isAsyncSelect={state.valueOption === 'Patient Name'}
            handleInputChange={handleInputChange}
            handleChangeAsyncSelect={handleChangeSelectAsync}
            loadOptions={loadOptions}
            defaultOptionAsync={state.defaultValueOptions}
            inputValueAsync={state.inputValueAsync}
            isHideDefaultDropdownIndicator
            isPrefixIcon
            iconPrefix={<img src={IconSearch2} alt="Icon" />}
            isLarge
          /> */}
        </div>
      </div>
      <div className="search-small">
        <h2>Search component (small)</h2>
        <div className="content">
          {/* <SearchInput
            className="search-input-ticket-small"
            name={formatNameSearch()}
            value={state.searchValue}
            onChange={onChangeSearch}
            placeholder={formatPlaceholder()}
            options={optionSearch.current}
            defaultValueOptions={state.valueOption}
            onSearchBy={onShowSearchBy}
            visibleSearchBy={state.showDropdownSearchBy}
            setSearchByValue={onSetValueOption}
            isDateMask={state.valueOption === 'Date of Birth'}
            isPhoneNumberMask={state.valueOption === 'Phone'}
            type={state.valueOption === 'Ticket ID' || state.valueOption === 'Study ID' ? 'number' : 'text'}
            isSearchable
            isClearable
            valueAsync={state.valueAsync}
            isAsyncSelect={state.valueOption === 'Patient Name'}
            handleInputChange={handleInputChange}
            handleChangeAsyncSelect={handleChangeSelectAsync}
            loadOptions={loadOptions}
            defaultOptionAsync={state.defaultValueOptions}
            inputValueAsync={state.inputValueAsync}
            isHideDefaultDropdownIndicator
            isPrefixIcon
            isPrefixIconRight
            iconPrefix={<img src={IconSearchGreen} alt="Icon" />}
          /> */}
          <SearchInput
            className="search-input-ticket-small"
            name={formatNameSearch()}
            value={state.searchValue}
            onChange={onChangeSearch}
            placeholder={formatPlaceholder()}
            options={optionSearch.current}
            defaultValueOptions={state.valueOption}
            onSearchBy={onShowSearchBy}
            visibleSearchBy={state.showDropdownSearchBy}
            setSearchByValue={onSetValueOption}
            isDateMask={state.valueOption === 'Date of Birth'}
            isPhoneNumberMask={state.valueOption === 'Phone'}
            type={state.valueOption === 'Ticket ID' || state.valueOption === 'Study ID' ? 'number' : 'text'}
            isSearchable
            isClearable
            valueAsync={state.valueAsync}
            isAsyncSelect={state.valueOption === 'Patient Name'}
            handleInputChange={handleInputChange}
            handleChangeAsyncSelect={handleChangeSelectAsync}
            loadOptions={loadOptions}
            defaultOptionAsync={state.defaultValueOptions}
            inputValueAsync={state.inputValueAsync}
            isHideDefaultDropdownIndicator
            isPrefixIcon
            iconPrefix={<img src={IconSearch2} alt="Icon" />}
          />
          <SearchInput
            className="search-input-ticket-small"
            name={formatNameSearch()}
            value={state.searchValue}
            onChange={onChangeSearch}
            placeholder={formatPlaceholder()}
            options={optionSearch.current}
            defaultValueOptions={state.valueOption}
            onSearchBy={onShowSearchBy}
            visibleSearchBy={state.showDropdownSearchBy}
            setSearchByValue={onSetValueOption}
            isDateMask={state.valueOption === 'Date of Birth'}
            isPhoneNumberMask={state.valueOption === 'Phone'}
            type={state.valueOption === 'Ticket ID' || state.valueOption === 'Study ID' ? 'number' : 'text'}
            isSearchable
            isClearable
            valueAsync={state.valueAsync}
            isAsyncSelect={state.valueOption === 'Patient Name'}
            handleInputChange={handleInputChange}
            handleChangeAsyncSelect={handleChangeSelectAsync}
            loadOptions={loadOptions}
            defaultOptionAsync={state.defaultValueOptions}
            inputValueAsync={state.inputValueAsync}
            isHideDefaultDropdownIndicator
            isPrefixIcon
            iconPrefix={<img src={IconSearch2} alt="Icon" />}
            isDropdownSearchBy
          />
        </div>

      </div>
    </div>
  );
};

export default SearchPage;
