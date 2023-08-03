import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { DateRangePicker } from 'react-dates';
import classnames from 'classnames';
import moment from 'moment';
import './styles.scss';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// import { convertToMoment } from '../../../../utils';
import { useMergeState } from '../../../../utils/customHooks';

import reloadIcon from '../../../../static/images/reload-icon.svg';
import ArrowIcon from '../../../../static/images/arrow-date-picker.svg';

const DateRangePickerInput = (props) => {
  const [state, setState] = useMergeState({
    startDate: props.startDate,
    endDate: props.endDate,
    rangeStartDate: moment(),
    rangeEndDate: moment(),
    focusedInput: false,
  });

  useEffect(() => {
    setState({
      startDate: props.startDate,
      endDate: props.endDate,
    });
  }, [props.startDate, props.endDate]);

  useEffect(() => {
    const { rangeStartDate, rangeEndDate, timezone } = props;
    // if (rangeStartDate && rangeEndDate) {
    //   setState({
    //     rangeStartDate: convertToMoment(rangeStartDate, timezone)
    //       ? convertToMoment(rangeStartDate, timezone).startOf('day')
    //       : undefined,
    //     rangeEndDate: convertToMoment(rangeEndDate, timezone).endOf('day')
    //       ? convertToMoment(rangeEndDate, timezone).endOf('day')
    //       : undefined,
    //   });
    // }
  }, [props.rangeStartDate, props.rangeEndDate]);

  const onFocusChange = (focusedInput) => {
    setState({ focusedInput });
  };

  const onDatesChange = ({ startDate, endDate }) => {
    if (startDate && endDate && endDate !== state.endDate) {
      // props.onDatesChange(startDate.startOf('day').valueOf(), endDate.endOf('day').valueOf());
      props.onDatesChange(startDate, endDate);
    }
    if (startDate !== state.startDate) {
      setState({ startDate, endDate: undefined });
    } else {
      setState({ startDate, endDate });
    }
  };

  const onClickReset = () => {
    setState({ startDate: props.startDate, endDate: props.endDate });
  };

  return (
    <div
      className={classnames(
        'custom-date-range-picker-input flex',
        props.hasResetButton ? '--reset' : undefined,
        props.disabled ? '--disabled' : undefined,
        props.isLarge ? 'range-picker-large' : 'range-picker-small',
        props.className,
      )}
    >
      <DateRangePicker
        customArrowIcon={<img src={ArrowIcon} alt="Arrow icon" />}
        disabled={props.disabled}
        startDate={state.startDate}
        startDateId="startDate"
        endDate={state.endDate}
        endDateId="endDate"
        onDatesChange={onDatesChange}
        focusedInput={state.focusedInput}
        onFocusChange={onFocusChange}
        orientation={state.orientation}
        openDirection={state.openDirection}
        isOutsideRange={
          props.canSelectAllDate
            ? () => false
            : (day) => {
              const newDay = day.set({
                hour: 12, minute: 0, second: 0, millisecond: 0,
              });
              return newDay.valueOf() > state.rangeEndDate.valueOf() || newDay.valueOf() < state.rangeStartDate.valueOf();
            }
        }
        minimumNights={0}
        // initialVisibleMonth={() => tStart}
        hideKeyboardShortcutsPanel
      // customArrowIcon={() => (
      //   <FontAwesomeIcon icon="arrow-right" />
      // )}
      />

      {
        props.hasResetButton && (
          <div className="custom-date-range-picker-input__container__reset">
            <Button className="reset-date-range-btn" onClick={onClickReset}>
              <img src={reloadIcon} alt="Reset date range icon" />
            </Button>
          </div>
        )
      }
    </div>
  );
};

DateRangePickerInput.defaultProps = {
  className: '',
  disabled: false,
  startDate: null,
  endDate: null,
  hasResetButton: false,
  timezone: 'UTC+0',
  canSelectAllDate: false,
  isLarge: false,
};

DateRangePickerInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  hasResetButton: PropTypes.bool,
  rangeStartDate: PropTypes.shape().isRequired,
  rangeEndDate: PropTypes.shape().isRequired,
  timezone: PropTypes.string,
  onDatesChange: PropTypes.func.isRequired,
  canSelectAllDate: PropTypes.bool,
  isLarge: PropTypes.bool,
};

export default DateRangePickerInput;
