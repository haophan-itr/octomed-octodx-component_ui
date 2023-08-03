import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import NormalButton from '../Buttons/NormalButton';
import './styles.scss';

const TooltipComponent = (props) => {
  const handleVisibleChange = (visible) => {
    props.onVisibleChange(visible);
  };
  return (
    <div className={classnames('custom-tooltip', props.className)}>
      <Tooltip
        title={props.title}
        placement={props.placement}
        align={props.align}
        arrowPointAtCenter={props.arrowPointAtCenter}
        autoAdjustOverflow={props.autoAdjustOverflow}
        color={props.color}
        defaultVisible={props.defaultVisible}
        destroyTooltipOnHide={props.destroyTooltipOnHide}
        // getPopupContainer={props.getPopupContainer}
        mouseEnterDelay={props.mouseEnterDelay}
        mouseLeaveDelay={props.mouseLeaveDelay}
        overlayClassName={classnames('overlay-tooltip-custom', props.overlayClassName)}
        overlayStyle={props.overlayStyle}
        overlayInnerStyle={props.overlayInnerStyle}
        trigger={props.trigger}
        visible={props.visible}
        zIndex={props.zIndex}
        onVisibleChange={handleVisibleChange}
      >
        <span>
          {props.children}
        </span>
      </Tooltip>
    </div>
  );
};

TooltipComponent.defaultProps = {
  title: 'Tooltip text',
  className: undefined,
  placement: 'topRight',
  children: (<NormalButton isFilled isPrimary1 isSmall buttonName="BUTTON" />),
  align: {},
  arrowPointAtCenter: false,
  autoAdjustOverflow: false,
  color: '',
  defaultVisible: undefined,
  destroyTooltipOnHide: false,
  // getPopupContainer: () => {},
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  overlayClassName: undefined,
  overlayStyle: {},
  overlayInnerStyle: {},
  trigger: ['hover'],
  visible: undefined,
  zIndex: 99,
  onVisibleChange: () => {},
};

TooltipComponent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  placement: PropTypes.string,
  children: PropTypes.node,
  align: PropTypes.objectOf(PropTypes.shape()),
  arrowPointAtCenter: PropTypes.bool,
  autoAdjustOverflow: PropTypes.bool,
  color: PropTypes.string,
  defaultVisible: PropTypes.bool,
  destroyTooltipOnHide: PropTypes.bool,
  // getPopupContainer: PropTypes.func,
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  overlayClassName: PropTypes.string,
  overlayStyle: PropTypes.objectOf(PropTypes.shape()),
  overlayInnerStyle: PropTypes.objectOf(PropTypes.shape()),
  trigger: PropTypes.arrayOf(PropTypes.shape()),
  visible: PropTypes.bool,
  zIndex: PropTypes.number,
  onVisibleChange: PropTypes.func,
};

export default TooltipComponent;
