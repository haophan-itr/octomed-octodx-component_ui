import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Slider } from 'antd';
import './styles.scss';

const SliderInput = props => (
  <div className={classNames('slider-input-container', props.className)}>
    <Slider min={props.min} max={props.max} value={props.value} disabled={props.disabled} onChange={props.onChange} />
  </div>
);
SliderInput.defaultProps = {
  className: '',
  value: 0,
  min: 0,
  max: 100,
  disabled: false,
};

SliderInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default SliderInput;
