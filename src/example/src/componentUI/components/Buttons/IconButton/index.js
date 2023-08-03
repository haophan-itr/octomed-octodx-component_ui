import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import classnames from 'classnames';
import './styles.scss';

const IconButton = props => (
  <Button
    id={props.id}
    className={
      classnames(
        'icon-btn',
        props.className,
      )
    }
    style={props.style}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.iconComponent}
  </Button>
);

IconButton.defaultProps = {
  className: '',
  disabled: false,
  style: {},
  onClick: () => { },
};

IconButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.shape(),
  iconComponent: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
};

export default IconButton;
