import React, { useRef } from 'react';
import { useMergeState } from '../../../utils/customHooks';
import SearchInput from '../../../componentUI/components/Inputs/Block/SearchInput';

import './styles.scss';

const CSearchInput = () => {
  const [state, setState] = useMergeState({
    textContent: '',
  });
  const onChangeText = (name, value) => {
    setState({
      textContent: value,
    });
  };
  return (
    <div>
      <div>Search Input (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>

        <SearchInput
          name="searchValue"
          placeholder="Search..."
          isLarge
          hasSearchBy={false}
          value={state.textContent}
          onChange={onChangeText}
        />

        <SearchInput
          name="searchValue"
          placeholder="Search..."
          isLarge
          disabled
          value="ABC"
          hasSearchBy={false}
        />

      </div>
      <div>Search Input (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>

        <SearchInput
          name="searchValue"
          placeholder="Search..."
          hasSearchBy={false}
          value={state.textContent}
          onChange={onChangeText}
        />

        <SearchInput
          name="searchValue"
          placeholder="Search..."
          hasSearchBy={false}
          disabled
          value="ABC"
        />

      </div>
    </div>
  );
};

export default CSearchInput;
