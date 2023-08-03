import React, { useRef } from 'react';
import { Divider } from 'antd';
import DateRangePickerInput from '../../../componentUI/components/Inputs/Block/DateRangePickerInput';
import DatePickerInput from '../../../componentUI/components/Inputs/Block/DatePickerInput';
import { useMergeState } from '../../../utils/customHooks';

import './styles.scss';

const CDataPickerRange = () => {
  const [state, setState] = useMergeState({
    startDate: '',
    endDate: '',
  });

  const onDatesChange = (startDate, endDate) => {
    setState({ startDate, endDate });
  };

  return (
    <div style={{ height: 500 }}>
      <div>Date picker range (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>

        <DateRangePickerInput
          // className="mt1"
          onDatesChange={onDatesChange}
          startDate={state.startDate}
          endDate={state.endDate}
          canSelectAllDate
          isLarge
        />
        <DateRangePickerInput
          // className="mt1"
          canSelectAllDate
          disabled
          isLarge
        />

      </div>
      <div>Date picker range (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around' }}>

        <DateRangePickerInput
          // className="mt1"
          canSelectAllDate
        />
        <DateRangePickerInput
          // className="mt1"
          canSelectAllDate
          disabled
        />

      </div>
      {/* <Divider />

      <div>Date picker input (Large)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>
        <div className="box-date-picker">
          <DatePickerInput
            className="input-list-item"
            name="name"
            label="label"
            value={state.datePickerValue}
            placeholder="Select date"
            isLarge
          />
        </div>
        <div className="box-date-picker">
          <DatePickerInput
            className="input-list-item"
            name="name"
            label="label"
            placeholder="Select date"
            isLarge
            disabled
          />
        </div>
      </div>
      <div>Date picker input (Small)</div>
      <div className="inputs-container" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 24 }}>
        <div className="box-date-picker">
          <DatePickerInput
            className="input-list-item"
            name="name"
            label="label"
            placeholder="Select date"
            isError
            errorMessage="aaaa"
          />
        </div>
        <div className="box-date-picker">
          <DatePickerInput
            className="input-list-item"
            name="name"
            label="label"
            placeholder="Select date"
            disabled
          />
        </div>
      </div> */}

    </div>
  );
};

export default CDataPickerRange;
