import React, { useState } from 'react';
import {
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import IconArrowDown from '../../../static/images/caret.svg';

const Pagination = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { options, currSizePerPage, onSizePerPageChange } = props;

  return (
    <ButtonDropdown
      className={classNames('btn-dropdown-custom', props.className)}
      direction="up"
      isOpen={isOpen}
      toggle={() => { setIsOpen(!isOpen); }}
    >
      <DropdownToggle caret>
        {`${currSizePerPage} rows`}
        <img src={IconArrowDown} alt="Sale portal" />
      </DropdownToggle>
      <DropdownMenu>
        {_.map(options, (option, index) => (
          <DropdownItem key={index} onClick={() => { onSizePerPageChange(option.page); }}>
            {option.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
};

Pagination.defaultProps = {
  className: undefined,
};

Pagination.propTypes = {
  // isOpen: PropTypes.string.isRequired,
  className: PropTypes.string,
  currSizePerPage: PropTypes.string.isRequired,
  onSizePerPageChange: PropTypes.func.isRequired,
  options: PropTypes.objectOf.isRequired,
};

export default Pagination;
