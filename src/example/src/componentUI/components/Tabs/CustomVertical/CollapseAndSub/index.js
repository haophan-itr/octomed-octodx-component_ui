import React, { useState } from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

import IconGreen from '../../../../static/images/icon-tab-green.svg';
import './styles.scss';

const { SubMenu } = Menu;

const TabAntd2 = (props) => {
  const [menu, setMenu] = useState(props.activeDefault);
  // const [subMenu, setSubMenu] = useState('sub-1-1');

  const renderIcon = () => (
    <div className="icon-tab">
      <img src={IconGreen} alt="Icon White" />
    </div>
  );

  const onClick = ({ item, key }) => {
    if (menu !== key) {
      setMenu(key);
    }

    // if (subMenu !== key) {
    //   setSubMenu(key);
    // }
  };


  return (
    <div className={classNames('container-collapse-sub', props.className)}>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={[menu]}
        mode="inline"
        theme="light"
        onClick={onClick}
      >
        {_.map(props.content, data => (
          <SubMenu key={data.activeNumber} icon={props.showIcon ? renderIcon(data.icon) : ''} title={data.title}>
            {_.map(data.item, items => (<Menu.Item key={items.activeNumber}>{items.label}</Menu.Item>))}
            {props.showSubMenu
              ? (
                <SubMenu key={data.subMenu.activeNumber} title={data.subMenu.title}>
                  {_.map(data.subMenu.item, sub => (<Menu.Item key={sub.activeNumber}>{sub.label}</Menu.Item>))}
                </SubMenu>
              ) : null }
          </SubMenu>
        ))}
      </Menu>
      <div className="content-collapse-sub">
        {
          _.map(props.content, data => (
            <div>
              {_.map(data.item, items => items.activeNumber === menu && (<div>{items.children}</div>))}
              {/* {props.showSubMenu ? _.map(data.subMenu.item, items => items.activeNumber === subMenu && (<div>{items.children}</div>)) : null} */}
            </div>
          ))
        }
      </div>
    </div>
  );
};

TabAntd2.defaultProps = {
  className: undefined,
  showIcon: false,
  showSubMenu: false,
  content: [
    {
      title: 'Navigation 1',
      icon: IconGreen,
      activeNumber: '1',
      item: [
        {
          activeNumber: 'nav-1-1',
          label: 'Tab title 1',
          children: (<div>Tab title 1</div>),
        },
        {
          activeNumber: 'nav-2-1',
          label: 'Tab title 2',
          children: (<div>Tab title 2</div>),
        },
      ],
      // subMenu: {
      //   title: 'Submenu 1',
      //   activeNumber: 'sub-nav-1',
      //   item: [
      //     {
      //       activeNumber: 'sub-1-1',
      //       label: 'Option sub 1',
      //       children: (<div>Option sub 1</div>),
      //     },
      //     {
      //       activeNumber: 'sub-2-1',
      //       label: 'Option sub 2',
      //       children: (<div>Option sub 2</div>),
      //     },
      //   ],
      // },
    },
    {
      title: 'Navigation 2',
      icon: IconGreen,
      activeNumber: '2',
      item: [
        {
          activeNumber: 'nav-1-2',
          label: 'Tab title 1',
          children: (<div>Tab title 1</div>),
        },
        {
          activeNumber: 'nav-2-2',
          label: 'Tab title 2',
          children: (<div>Tab title 2</div>),
        },
      ],
      // subMenu: {
      //   title: 'Submenu 2',
      //   activeNumber: 'sub-nav-2',
      //   item: [
      //     {
      //       activeNumber: 'sub-1-2',
      //       label: 'Option sub 1',
      //       children: (<div>Option sub 1</div>),
      //     },
      //     {
      //       activeNumber: 'sub-2-2',
      //       label: 'Option sub 2',
      //       children: (<div>Option sub 2</div>),
      //     },
      //     {
      //       activeNumber: 'sub-3-2',
      //       label: 'Option sub 3',
      //       children: (<div>Option sub 3</div>),
      //     },
      //   ],
      // },
    },
  ],
  activeDefault: 'nav-1-1',
};

TabAntd2.propTypes = {
  className: PropTypes.string,
  showIcon: PropTypes.bool,
  showSubMenu: PropTypes.bool,
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.string,
    activeNumber: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({
      activeNumber: PropTypes.string,
      label: PropTypes.string,
      children: PropTypes.node,
    })),
    // subMenu: PropTypes.objectOf(PropTypes.shape({
    //   title: PropTypes.string,
    //   activeNumber: PropTypes.string,
    //   item: PropTypes.arrayOf(PropTypes.shape({
    //     activeNumber: PropTypes.string,
    //     label: PropTypes.string,
    //     children: PropTypes.node,
    //   })),
    // })),
  })),
  activeDefault: PropTypes.string,
};

export default TabAntd2;
