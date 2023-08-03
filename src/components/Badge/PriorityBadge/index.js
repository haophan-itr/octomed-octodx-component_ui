import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const PriorityBadge = props => (
  <div
    className={
      classnames(
        props.isLargePriority ? 'priority-badge-large' : 'priority-badge-small',
        props.isEmergent ? '--isEmergent'
          : props.isUrgent ? '--isUrgent'
            : undefined,
        props.isSmall ? '--isSmall'
          : undefined,
        props.className,
      )}
  >
    {
      props.isSmall ? (
        <div className="text-badge">{(props.text).charAt(0)}</div>
      ) : (
        <div className="text-badge">{props.text}</div>
      )
    }
  </div>
);

PriorityBadge.defaultProps = {
  className: '',
  isSmall: false,
  isEmergent: false,
  isUrgent: false,
  text: 'BADGE',
  isLargePriority: false,
};

PriorityBadge.propTypes = {
  className: PropTypes.string,
  isSmall: PropTypes.bool,
  isEmergent: PropTypes.bool,
  isUrgent: PropTypes.bool,
  text: PropTypes.string,
  isLargePriority: PropTypes.bool,
};

export default PriorityBadge;
