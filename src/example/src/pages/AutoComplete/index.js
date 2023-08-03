import React from 'react';
import PropTypes from 'prop-types';

import { Divider } from 'antd';
import AutoComplete from '../../componentUI/components/AutoCompleteInput';

import { useMergeState } from '../../utils/customHooks';
import './styles.scss';

const AutoCompletePage = (props) => {
  const [state, setState] = useMergeState({
    autocomplete: 'aaaaaaaaaaaa',
  });
  const handleOnChangeAutoComplete = (data, isSearchCity) => {
    props.onChangeAutoComplete(data, isSearchCity);
  };

  const handleOnChangeInputAutoComplete = (value, isSearchCity) => {
    props.onChangeInputAutoComplete(value, isSearchCity);
  };
  return (
    <div className="container-auto">
      <h1>Welcome to AutoComplete</h1>
      <Divider />
      <div className="container-box">
        <h2>AutoComplet (Small)</h2>
        <div className="box-autocomplete">
          <AutoComplete
            className="box-address"
            placeholder="Enter an Address"
            onChange={handleOnChangeAutoComplete}
            onChangeInput={handleOnChangeInputAutoComplete}
            name="autocomplete"
            value={state.autocomplete}
            isSearchCity={false}
            disabled
            // isError
            // isLarge
            // errorMessage="Error message"
            // country={state?.country?.value}
            // disabled={props.disabled}
          />
        </div>
      </div>
      <Divider type="vertical" />
      <div className="container-box">
        <h2>AutoComplet (Large)</h2>
        <div className="box-autocomplete">
          <AutoComplete
            className="box-address"
            placeholder="Enter an Address"
            onChange={handleOnChangeAutoComplete}
            onChangeInput={handleOnChangeInputAutoComplete}
            name="autocomplete"
            value={state.autocomplete}
            isSearchCity={false}
            disabled
            // isError
            isLarge
            // errorMessage="Error message"
            // country={state?.country?.value}
            // disabled={props.disabled}
          />
        </div>
      </div>
      <Divider />
      <div className="container-box">
        <h2>AutoComplet (Small)</h2>
        <div className="box-autocomplete">
          <AutoComplete
            className="box-address"
            placeholder="Enter an Address"
            onChange={handleOnChangeAutoComplete}
            onChangeInput={handleOnChangeInputAutoComplete}
            name="autocomplete"
            value={state.autocomplete}
            isSearchCity={false}
            isError
            // isLarge
            errorMessage="Error message"
            // country={state?.country?.value}
            // disabled={props.disabled}
          />
        </div>
      </div>
      <Divider type="vertical" />
      <div className="container-box">
        <h2>AutoComplet (Large)</h2>
        <div className="box-autocomplete">
          <AutoComplete
            className="box-address"
            placeholder="Enter an Address"
            onChange={handleOnChangeAutoComplete}
            onChangeInput={handleOnChangeInputAutoComplete}
            name="autocomplete"
            value={state.autocomplete}
            isSearchCity={false}
            isError
            isLarge
            errorMessage="Error message"
            // country={state?.country?.value}
            // disabled={props.disabled}
          />
        </div>
      </div>
    </div>
  );
};

AutoCompletePage.defaultProps = {
  onChangeAutoComplete: () => {},
  onChangeInputAutoComplete: () => {},
};

AutoCompletePage.propTypes = {
  onChangeAutoComplete: PropTypes.func,
  onChangeInputAutoComplete: PropTypes.func,
};


export default AutoCompletePage;
