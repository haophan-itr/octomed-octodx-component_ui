import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import classnames from 'classnames';
import _ from 'lodash';

import { useMergeState } from '../../utils/customHooks';
import './styles.scss';

const DropdownInput = (props) => {
  const [state, setState] = useMergeState({
    isOpenDropdown: false,
  });

  const toggleDisplayDropdown = useCallback(() => {
    setState({ isOpenDropdown: !state.isOpenDropdown });
  }, [state.isOpenDropdown]);

  const onClickDropdownItem = (option) => {
    props.onChange(props.name, option);
  };

  return (
    <div className={classnames('custom-dropdown-input', props.disabled ? '--disabled' : undefined, props.className)}>
      {
        !!props.label && (
          <div className="custom-dropdown-input__label">{props.label}</div>
        )
      }

      <Dropdown isOpen={state.isOpenDropdown} toggle={toggleDisplayDropdown} direction="down" className={props.value !== undefined ? 'fill-background' : undefined}>
        <DropdownToggle className={classnames(props.isLarge ? 'dropdown-large' : 'dropdown-small', props.isError ? '--error' : undefined)} caret disabled={props.disabled}>
          {props.displayValue ? props.displayValue : props.value !== undefined ? props.value : 'Default'}
        </DropdownToggle>
        <DropdownMenu flip={false}>
          {
            _.map(props.options, (option, index) => (
              <DropdownItem
                key={index}
                active={option === props.value}
                className={props.hideIcon ? 'hide-icon-checked' : null}
                onClick={() => { onClickDropdownItem(option); }}
              >
                {option}
              </DropdownItem>
            ))
          }
        </DropdownMenu>
      </Dropdown>
      {
        props.isError && (
          <div className="custom-dropdown-input__error-message">{props.errorMessage}</div>
        )
      }

      {
        props.isWarning && (
          <div className="custom-dropdown-input__warning-container">
            <div className="custom-dropdown-input__warning-message">{props.warningMessage}</div>
            <Button
              className="custom-dropdown-input__warning-button"
              color="link"
              onClick={props.handleClickWarningLinkText}
            >
              {props.warningLinkText}
            </Button>
          </div>
        )
      }
    </div>
  );
};

DropdownInput.defaultProps = {
  className: '',
  name: '',
  label: '',
  onChange: () => { },
  disabled: false,
  isError: false,
  errorMessage: '',
  isWarning: false,
  warningMessage: '',
  warningLinkText: '',
  handleClickWarningLinkText: () => { },
  hideIcon: false,
  value: undefined,
  isLarge: false,
  displayValue: '',
};

DropdownInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  isWarning: PropTypes.bool,
  warningMessage: PropTypes.string,
  warningLinkText: PropTypes.string,
  handleClickWarningLinkText: PropTypes.func,
  hideIcon: PropTypes.bool,
  isLarge: PropTypes.bool,
  displayValue: PropTypes.string,
};

export default DropdownInput;
