import React, { useState } from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import IconGreen from '../../../../static/images/icon-tab-green.svg';
import './styles.scss';

const CustomVertical = (props) => {
  const [activeContent, setActiveContent] = useState(props.activeDefault);

  const renderIcon = valueIcon => (
    <div className="icon-tab">
      <img src={valueIcon || IconGreen} alt="Icon Green" />
    </div>
  );

  const onClick = ({ item, key }) => {
    if (key !== activeContent) {
      setActiveContent(key);
    }
  };

  return (
    <div className={classNames('container-tab-antd', props.className)}>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={[activeContent]}
        mode="inline"
        theme="light"
        onClick={onClick}
      >
        {
          _.map(props.content, data => (
            <Menu.Item key={data.activeNumber} icon={props.showIcon ? renderIcon(data.icon) : ''}>
              {data.label}
            </Menu.Item>
          ))
        }
      </Menu>
      <div className="content-menu">
        {
          _.map(props.content, data => (
            activeContent === data.activeNumber && (<div className="content-children">{data.children}</div>)
          ))
        }
      </div>
    </div>
  );
};

CustomVertical.defaultProps = {
  className: undefined,
  showIcon: false,
  content: [
    {
      activeNumber: '1',
      label: 'Tab Title 1',
      icon: IconGreen,
      children: (<div>Tab Title 1</div>),
    },
    {
      activeNumber: '2',
      label: 'Tab Title 2',
      icon: IconGreen,
      children: (<div>Tab Title 2</div>),
    },
    {
      activeNumber: '3',
      label: 'Tab Title 3',
      icon: null,
      children: (<div>Tab Title 3</div>),
    },
  ],
  activeDefault: '1',
};

CustomVertical.propTypes = {
  className: PropTypes.string,
  showIcon: PropTypes.bool,
  content: PropTypes.arrayOf(PropTypes.shape({
    activeNumber: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.node,
  })),
  activeDefault: PropTypes.string,
};

export default CustomVertical;
