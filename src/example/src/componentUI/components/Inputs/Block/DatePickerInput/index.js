import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import classnames from 'classnames';
import moment from 'moment';
import calendarIcon from '../../../../static/images/calendar-icon.svg';
import 'antd/dist/antd.css';
import './styles.scss';

const DatePickerInput = props => (
  <div className={classnames('custom-date-picker-input', props.isLarge ? 'date-picker-large' : 'date-picker-small', props.className)}>
    {
      !!props.label && (
        <div className="custom-date-picker-input__label">
          {props.label}
        </div>
      )
    }

    <DatePicker
      className={classnames(
        'custom-date-picker-input__calendar-picker',
        props.isError ? '--error' : '',
      )}
      placeholder={props.placeholder}
      disabledDate={(currentDate) => {
        const currentDateStartOfDay = moment(currentDate.format(props.format)).startOf(props.startOf);
        const currentDateEndOfDay = moment(currentDate.format(props.format)).endOf(props.endOf);
        return currentDateStartOfDay.valueOf() < props.belowLimit || currentDateEndOfDay.valueOf() > props.aboveLimit;
      }}
      value={moment(props.value || new Date())}
      onChange={props.onChange}
      format={props.format}
      bordered={false}
      disabled={props.disabled}
      suffixIcon={(
        <img src={calendarIcon} alt="Calendar icon" />
      )}
    />

    <div className="custom-date-picker-input__error-message">
      {
        props.isError && !!props.errorMessage
          ? props.errorMessage
          : ''
      }
    </div>

    {
      props.isWarning && (
        <div className="custom-date-picker-input__warning-container">
          <div className="custom-date-picker-input__warning-message">
            {props.warningMessage}
          </div>
        </div>
      )
    }
  </div>
);

DatePickerInput.defaultProps = {
  className: undefined,
  label: '',
  placeholder: '',
  isError: false,
  errorMessage: '',
  isWarning: false,
  warningMessage: false,
  value: undefined,
  disabled: false,
  format: 'MM/DD/YYYY',
  belowLimit: undefined,
  aboveLimit: undefined,
  startOf: 'day',
  endOf: 'day',
  isLarge: false,
};

DatePickerInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  isWarning: PropTypes.bool,
  isLarge: PropTypes.bool,
  warningMessage: PropTypes.string,
  value: PropTypes.shape(),
  belowLimit: PropTypes.number,
  aboveLimit: PropTypes.number,
  startOf: PropTypes.string,
  endOf: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string,
};

export default DatePickerInput;
