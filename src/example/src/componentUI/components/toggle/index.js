import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import ToggleButton from '../Buttons/ToggleButton';

import './styles.scss';

const ToggleComponent = (props) => {
  const [toggle, setToggle] = useState('Toggle 1');
  const onToggle = (value) => {
    props.onClickToggle(value);
    if (value !== toggle) {
      setToggle(value);
    }
  };

  return (
    <div className={classnames('container-toggle-custom', props.className)}>
      {
        _.map(props.data, (item, index) => (
          <ToggleButton
            key={index}
            className={classnames('custom-toggle', props.isLarge ? 'toggle-large' : 'toggle-small')}
            name={item.value}
            disabled={props.disabled}
            data={item}
            isActive={item.value === toggle}
            onClick={onToggle}
          />
        ))
      }
    </div>
  );
};

ToggleComponent.defaultProps = {
  isLarge: false,
  disabled: false,
  className: undefined,
  onClickToggle: () => {},
  data: [
    {
      label: 'Toggle 1',
      value: 'Toggle 1',
    },
    {
      label: 'Toggle 2',
      value: 'Toggle 2',
    },
    {
      label: 'Toggle 3',
      value: 'Toggle 3',
    },
  ],
};

ToggleComponent.propTypes = {
  isLarge: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClickToggle: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape()),
};

export default ToggleComponent;
