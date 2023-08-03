import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const TextOnlyBadge = props => (
  <div
    className={
      classnames(
        'text-only-badge',
        props.isStrong ? '--isStrong'
          : props.isLight ? '--isLight'
            : undefined,
        props.isSmall ? '--isSmall'
          : props.isExtraSmall ? '--isExtraSmall' : undefined,
        props.className,
      )}
  >
    <div className="text-badge">{props.text}</div>
  </div>
);

TextOnlyBadge.defaultProps = {
  className: '',
  isStrong: false,
  isLight: false,
  isSmall: false,
  isExtraSmall: false,
};

TextOnlyBadge.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  isStrong: PropTypes.bool,
  isLight: PropTypes.bool,
  isSmall: PropTypes.bool,
  isExtraSmall: PropTypes.bool,
};

export default TextOnlyBadge;
