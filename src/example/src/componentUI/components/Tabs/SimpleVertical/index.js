import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Badge } from 'reactstrap';
import _ from 'lodash';
import './styles.scss';

const SimpleVertical = (props) => {
  const [tab, setTab] = useState(props.activeDefault);

  const onClick = (value) => {
    if (value !== tab) {
      setTab(value);
    }
  };

  return (
    <div className={classnames(`container-toggle-tab__${props.type}`)}>
      {
        _.map(props.data, (item, index) => (
          <button
            id={index}
            key={index}
            onClick={() => onClick(item.activeNumber)}
            className={
              classnames(
                'toggle-tab',
                props.isLarge ? 'tab-large' : 'tab-small',
                tab === item.activeNumber ? '--active' : undefined,
                props.className,
              )
            }
          >
            <span>{item.label}</span>
            {props.badge ? <Badge pill color="danger" className="custom-badge-num c-red">{props.numBadge}</Badge> : null}
          </button>
        ))
      }
    </div>
  );
};

SimpleVertical.defaultProps = {
  className: undefined,
  type: 'vertical',
  numBadge: 10,
  badge: false,
  activeDefault: 1,
  isLarge: false,
  data: [
    {
      activeNumber: 1,
      label: 'Tab title 1',
      value: 'Tab title 1',
    },
    {
      activeNumber: 2,
      label: 'Tab title 2',
      value: 'Tab title 2',
    },
    {
      activeNumber: 3,
      label: 'Tab title 3',
      value: 'Tab title 3',
    },
  ],
};

SimpleVertical.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf({
    activeNumber: PropTypes.number,
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
    ]),
  }),
  type: PropTypes.string,
  numBadge: PropTypes.string,
  badge: PropTypes.bool,
  activeDefault: PropTypes.number,
  isLarge: PropTypes.bool,
};

export default SimpleVertical;
