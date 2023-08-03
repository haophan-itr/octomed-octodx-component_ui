import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';

import IconExpand from '../../static/images/icon-expand.svg';

import './styles.scss';

const { SubMenu } = Menu;

const MenuComponent = (props) => {
  const handleClick = (e) => {
    props.onClick(e);
    // console.log('click', e);
  };

  const handleDeselect = (e) => {
    props.onDeselect(e);
    // console.log('click', e);
  };

  const handleOpenChange = (e) => {
    props.onOpenChange(e);
    // console.log('click', e);
  };

  const handleSelect = (e) => {
    props.onSelect(e);
    // console.log('click', e);
  };

  return (
    <div className={classnames(props.isLarge ? 'custom-menu-large' : 'custom-menu-small', props.className)}>
      <Menu
        defaultOpenKeys={props.defaultOpenKeys}
        onClick={handleClick}
        onDeselect={handleDeselect}
        onOpenChange={handleOpenChange}
        onSelect={handleSelect}
        mode={props.mode}
        expandIcon={props.isIconExpand ? <img src={IconExpand} alt="Expand Icon" /> : <></>}
      >
        <SubMenu popupClassName={classnames(props.isLarge ? 'sub-menu-large' : 'sub-menu-small')} key={props.keySubmenu} icon={props.icon} title={props.title}>
          {_.map(props.menu, item => (<Menu.Item key={item.value}>{item.label}</Menu.Item>))}
        </SubMenu>
      </Menu>
    </div>
  );
};

MenuComponent.defaultProps = {
  title: 'Menu item',
  mode: 'vertical',
  onClick: () => {},
  onDeselect: () => {},
  onOpenChange: () => {},
  onSelect: () => {},
  icon: null,
  className: undefined,
  isLarge: false,
  isIconExpand: false,
  menu: [
    {
      label: 'Menu Item 1',
      value: 'Menu Item 1',
    },
    {
      label: 'Menu Item 2',
      value: 'Menu Item 2',
    },
    {
      label: 'Menu Item 3',
      value: 'Menu Item 3',
    },
  ],
  keySubmenu: 'sub1',
  defaultOpenKeys: [],
};

MenuComponent.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape()),
  title: PropTypes.string,
  mode: PropTypes.string,
  onClick: PropTypes.func,
  onDeselect: PropTypes.func,
  onOpenChange: PropTypes.func,
  onSelect: PropTypes.func,
  icon: PropTypes.node,
  isIconExpand: PropTypes.bool,
  isLarge: PropTypes.bool,
  className: PropTypes.string,
  keySubmenu: PropTypes.string,
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.shape()),
};

export default MenuComponent;
