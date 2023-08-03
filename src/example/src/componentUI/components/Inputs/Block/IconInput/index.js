import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const IconInput = (props) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    props.onChange(name, value);
  };

  return (
    <div className={classnames('main-input-container', props.isError ? '--error' : undefined)}>
      <div className={classnames('input-icons-container', props.isLarge ? '--is-large' : '--is-small')}>
        <input
          type={props.type}
          className={
            classnames(
              'custom-icon-input',
              props.disabled ? '--disabled' : undefined,
              props.isLarge ? 'input-icons-large' : 'input-icons-small',
              props.className,
            )
          }
          name={props.name}
          value={props.value}
          disabled={props.disabled}
          placeholder={props.placeholder}
          onChange={onChange}
        />

        <div className="icon">
          {props.iconComponent}
        </div>
      </div>
      <div className={classnames('error-message', props.isLarge ? 'error-large' : 'error-small')}>
        {
          props.isError && !!props.errorMessage
            ? props.errorMessage
            : ''
        }
      </div>
    </div>

  );
};

IconInput.defaultProps = {
  name: '',
  value: '',
  type: 'text',
  disabled: false,
  onChange: () => { },
  placeholder: '',
  className: undefined,
  isLarge: false,
  errorMessage: '',
  isError: false,

};

IconInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  iconComponent: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLarge: PropTypes.bool,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
};

export default IconInput;
