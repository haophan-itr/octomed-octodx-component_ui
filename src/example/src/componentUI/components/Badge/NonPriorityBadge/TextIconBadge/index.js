import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const TextIconBadge = props => (
  <div
    className={
      classnames(
        'text-icon-badge',
        props.isStrong ? '--isStrong'
          : props.isLight ? '--isLight'
            : undefined,
        props.isSmall ? '--isSmall'
          : props.isExtraSmall ? '--isExtraSmall' : undefined,
        props.className,
      )}
  >
    {
      props.isIconLeft ? (
        <div className="icon-left-container">
          <div className="icon-component">
            {props.iconComponent}
          </div>
          <div className="text-badge">{props.text}</div>
        </div>
      ) : (
        <div className="icon-right-container">
          <div className="text-badge">{props.text}</div>
          <div className="icon-component">
            {props.iconComponent}
          </div>
        </div>
      )
    }
  </div>
);

TextIconBadge.defaultProps = {
  className: '',
  isStrong: false,
  isLight: false,
  isSmall: false,
  isIconLeft: false,
  isExtraSmall: false,
};

TextIconBadge.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  isStrong: PropTypes.bool,
  isLight: PropTypes.bool,
  isSmall: PropTypes.bool,
  iconComponent: PropTypes.node.isRequired,
  isExtraSmall: PropTypes.bool,
  isIconLeft: PropTypes.bool,
};

export default TextIconBadge;
