import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import './styles.scss';

momentDurationFormatSetup(moment);

const ProgressComponent = props => (
  props.isShowProgress
    ? (
      <div className={props.className}>
        <div className="flex justify-between">
          {
            props.isUploadProgress
              ? (
                <div className="uploading-progress">
                  <span>{props.textUploading}</span>
                  <span>{`${props.progressValue}%`}</span>
                </div>
              )
              : (
                <div className="time-progress">
                  <span>{moment.duration(props.duration, props.unitDuration).format(props.formatTimeProgress)}</span>
                  <span>{`${props.progressValue}%`}</span>
                </div>
              )
          }

        </div>
        <Progress
          className={`duration-progress-bar ${props.isUploadProgress ? 'progress-blue' : ''}`}
          value={props.progressValue}
          color="#879890"
        />
      </div>
    )
    : (
      <span>
        {moment.duration(props.duration, props.unitDuration).format(props.formatDateTime, { stopTrim: props.stopTrim })}
      </span>
    )
);

ProgressComponent.defaultProps = {
  progressValue: 50,
  isShowProgress: true,
  isUploadProgress: false,
  unitDuration: 'minutes',
  stopTrim: 'h',
  formatTimeProgress: 'd [day]',
  formatDateTime: 'd[d] hh[h] mm[m]',
  textUploading: 'Uploading',
  className: '',
};

ProgressComponent.propTypes = {
  duration: PropTypes.number.isRequired,
  isShowProgress: PropTypes.bool,
  isUploadProgress: PropTypes.bool,
  progressValue: PropTypes.number,
  unitDuration: PropTypes.string,
  stopTrim: PropTypes.string,
  textUploading: PropTypes.string,
  formatTimeProgress: PropTypes.string,
  formatDateTime: PropTypes.string,
  className: PropTypes.string,
};

export default ProgressComponent;
