import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import classnames from 'classnames';
import moment from 'moment';
import './styles.scss';

const NormalButton = (props) => {
  const debounceClickBottomButton = useRef(0);

  const onClick = (e) => {
    if (props.isDebounceClick && moment().valueOf() - debounceClickBottomButton.current < 300) {
      return;
    }
    debounceClickBottomButton.current = moment().valueOf();
    props.onClick(e);
  };

  const renderContent = () => (

    !!props.buttonName && props.hasIcon
      ? props.isIconLeft
        ? (
          <div className={classnames('icon-left')}>
            {
                props.iconComponent
              }
            <span className={classnames('name', props.isSaving ? '--transparent' : undefined)}>
              {props.buttonName}
            </span>
          </div>
        )
        : (
          <div className={classnames('icon-right')}>
            <span className={classnames('name', props.isSaving ? '--transparent' : undefined)}>
              {props.buttonName}
            </span>
            {
                props.iconComponent
              }
          </div>
        )
      : !props.hasIcon
        ? (
          <span className={classnames('name', props.isSaving ? '--transparent' : undefined)}>
            {props.buttonName}
          </span>
        )
        : (
          props.iconComponent
        )

  );

  return (
    props.isLinkButton
      ? (
        <Link
          id={props.id}
          className={classnames(
            'link-button',
            props.isFilled
              ? classnames('filled-btn', props.isSaving ? '--is-saving' : undefined)
              : props.isText
                ? classnames('text-btn', props.isNegative ? '--negative' : undefined)
                : props.isTertiary
                  ? classnames('tertiary-btn', props.isNegative ? '--negative' : undefined)
                  : classnames('outline-btn', props.isNegative ? '--negative' : undefined),

            props.isLarge
              ? '--button-large'
              : props.isMedium
                ? '--button-medium'
                : props.isSmall
                  ? '--button-small'
                  : undefined,

            props.isPrimary1
              ? '--primary-1'
              : props.isPrimary2
                ? '--primary-2'
                : props.isSecondary
                  ? '--secondary'
                  : undefined,

            !props.buttonName && props.hasIcon
              ? '--only-icon'
              : undefined,


            props.className,
          )}
          type={props.type}
          disabled={props.disabled}
          style={props.style}
          to={props.link}
          target={props.target}
        >
          {renderContent()}
        </Link>
      )
      : (
        <button
          ref={props.ref}
          id={props.id}
          className={classnames(
            props.isFilled
              ? classnames('filled-btn', props.isSaving ? '--is-saving' : undefined)
              : props.isText
                ? classnames('text-btn', props.isNegative ? '--negative' : undefined)
                : props.isTertiary
                  ? classnames('tertiary-btn', props.isNegative ? '--negative' : undefined)
                  : classnames('outline-btn', props.isNegative ? '--negative' : undefined),

            props.isSmall
              ? '--button-small'
              : props.isMedium
                ? '--button-medium'
                : props.isLarge
                  ? '--button-large'
                  : undefined,

            props.isPrimary1
              ? '--primary-1'
              : props.isPrimary2
                ? '--primary-2'
                : props.isSecondary
                  ? '--secondary'
                  : undefined,

            !props.buttonName && props.hasIcon
              ? '--only-icon'
              : undefined,
            props.className,
          )}
          type={props.type}
          disabled={props.disabled}
          onClick={onClick}
          style={props.style}
        >


          {renderContent()}

          {/* {
          props.isSaving && (
            <ButtonLoading
              title={props.titleSaving}
              className={props.className}
              isFilled={props.isFilled}
              shouldDisplayLoadingCursor
            />
          )
        } */}
        </button>
      )
  );
};

NormalButton.defaultProps = {
  id: '',
  isFilled: false,
  isText: false,
  isSaving: false,
  disabled: false,
  type: 'button',
  className: '',
  buttonName: '',
  style: {},
  hasIcon: false,
  iconComponent: undefined,
  isIconLeft: false,
  isNegative: false,
  isTertiary: false,
  isLarge: false,
  isMedium: false,
  isSmall: false,
  isPrimary1: false,
  isPrimary2: false,
  isSecondary: false,
  isLinkButton: false,
  link: '',
  onClick: () => { },
  target: undefined,
  ref: null,
  // titleSaving: undefined,
  isDebounceClick: true,
};

NormalButton.propTypes = {
  id: PropTypes.string,
  isFilled: PropTypes.bool,
  isText: PropTypes.bool,
  isSaving: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  buttonName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  style: PropTypes.shape(),
  hasIcon: PropTypes.bool,
  iconComponent: PropTypes.node,
  isIconLeft: PropTypes.bool,
  isNegative: PropTypes.bool,
  isTertiary: PropTypes.bool,
  isLarge: PropTypes.bool,
  isMedium: PropTypes.bool,
  isSmall: PropTypes.bool,
  isPrimary1: PropTypes.bool,
  isPrimary2: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isLinkButton: PropTypes.bool,
  link: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  ref: PropTypes.string,
  // titleSaving: PropTypes.string,
  isDebounceClick: PropTypes.bool,
};

export default NormalButton;
