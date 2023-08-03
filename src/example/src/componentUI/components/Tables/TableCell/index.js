import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const TableCell = props => (
  <div className={classNames('table-cell-custom', props.className)}>
    <p>{props.text}</p>
    {props.showLabel ? <span>{props.label}</span> : null }
  </div>
);

TableCell.defaultProps = {
  className: undefined,
  text: 'Lorem ipsum',
  label: 'RMA',
  showLabel: false,
};

TableCell.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  label: PropTypes.string,
  showLabel: PropTypes.bool,
};

export default TableCell;
