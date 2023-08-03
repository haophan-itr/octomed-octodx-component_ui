import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Slider } from 'antd';
import './styles.scss';

const SliderComponent = (props) => {
  const onChangeSlider = (value) => {
    props.onChange(value);
  };

  const onAfterChangeSlider = (value) => {
    props.onAfterChange(value);
  };

  const onFormatterTip = value => props.tipFormatter(value);
  return (
    <div className={classnames('custom-slider', props.className)}>
      <Slider
        defaultValue={props.defaultValue}
        min={props.min}
        max={props.max}
        marks={props.marks}
        range={props.range}
        reverse={props.reverse}
        dots={props.dots}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        included={props.included}
        tooltipPlacement={props.tooltipPlacement}
        tooltipVisible={props.tooltipVisible}
        tipFormatter={onFormatterTip}
        vertical={props.vertical}
        handleStyle={props.handleStyle}
        trackStyle={props.trackStyle}
        onChange={onChangeSlider}
        onAfterChange={onAfterChangeSlider}
        value={props.value}
        step={props.step}
      />
    </div>
  );
};

SliderComponent.defaultProps = {
  className: undefined,
  onChange: () => {},
  autoFocus: false,
  defaultValue: 10,
  disabled: false,
  dots: false,
  // getTooltipPopupContainer: ,
  included: true,
  marks: {},
  min: 0,
  max: 20,
  range: false,
  reverse: false,
  step: 0.01,
  tipFormatter: () => (<p>Tooltip</p>),
  tooltipPlacement: 'top',
  tooltipVisible: undefined,
  value: 0,
  vertical: false,
  onAfterChange: () => {},
  trackStyle: {},
  handleStyle: {},
};

SliderComponent.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  disabled: PropTypes.bool,
  dots: PropTypes.bool,
  // getTooltipPopupContainer: ,
  included: PropTypes.bool,
  marks: PropTypes.objectOf(PropTypes.shape()),
  min: PropTypes.number,
  max: PropTypes.number,
  range: PropTypes.bool,
  reverse: PropTypes.bool,
  step: PropTypes.number,
  tipFormatter: PropTypes.func,
  tooltipPlacement: PropTypes.string,
  tooltipVisible: PropTypes.bool,
  value: PropTypes.number,
  vertical: PropTypes.bool,
  onAfterChange: PropTypes.func,
  trackStyle: PropTypes.objectOf(PropTypes.shape()),
  handleStyle: PropTypes.objectOf(PropTypes.shape()),
};

export default SliderComponent;
