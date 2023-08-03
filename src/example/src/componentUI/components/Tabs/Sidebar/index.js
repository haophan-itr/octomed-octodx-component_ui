import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import classnames from 'classnames';
import _ from 'lodash';
import './styles.scss';

import iconRMA from '../../../static/images/rma.svg';
import iconHeart from '../../../static/images/heart.svg';
import iconReport from '../../../static/images/report.svg';
import iconDevices from '../../../static/images/devices.svg';
import iconCollapse from '../../../static/images/collapse.svg';
import iconStudies from '../../../static/images/studies.svg';
import iconUser from '../../../static/images/avt.svg';

const Sidebar = (props) => {
  const [visible, setVisible] = useState(true);

  const onChangeSidebarSize = () => {
    if (visible) {
      setVisible(false);

      document.getElementById('custom-sidebar').classList.add('--collapse');
      document.getElementById('footer-element').classList.add('--collapse-footer');
      _.forEach(document.getElementsByClassName('sidebar-tab-content__name'), (element) => {
        element.style.animation = 'opacity 1s forwards';
      });
      document.getElementById('collapse-icon').style.animation = 'marginRightCollapseIcon 1s forwards, rotateCollapseIcon 0.5s forwards';
      document.getElementById('collapse-text').style.animation = 'opacity 1s forwards';
      document.getElementById('avatar').style.animation = 'marginRightAvatar 1s forwards';
      document.getElementById('username').style.animation = 'opacity 1s forwards';
    } else {
      setVisible(true);
      document.getElementById('custom-sidebar').classList.remove('--collapse');
      document.getElementById('footer-element').classList.remove('--collapse-footer');
      _.forEach(document.getElementsByClassName('sidebar-tab-content__name'), (element) => {
        element.style.animation = 'opacityReverse 1s forwards';
      });
      document.getElementById('collapse-icon').style.animation = 'marginRightCollapseIconReverse 1s forwards, rotateCollapseIconReverse 0.5s forwards';
      document.getElementById('collapse-text').style.animation = 'opacityReverse 1s forwards';
      document.getElementById('avatar').style.animation = 'marginRightAvatarReverse 1s forwards';
      document.getElementById('username').style.animation = 'opacityReverse 1s forwards';
    }
  };

  return (
    <aside id="custom-sidebar" className={classnames('custom-sidebar', props.className)}>
      <div className="custom-sidebar__top">
        <div className="logo-container">
          <div className="logo" />
        </div>
        <div className={classnames('menu-icon-container', props.isLarge ? 'menu-large' : 'menu-small')}>
          {
            _.map(props.menu, item => (
              <NavLink
                key={item.id}
                to={item.link}
                activeClassName="active"
                className={`sidebar-tab${visible ? '' : '-small'}`}
              >
                <div className={`sidebar-tab-content${visible ? '' : '-small'}`}>
                  <img src={item.icon} alt="icon" />
                  <span className="sidebar-tab-content__name">{item.name}</span>
                </div>
              </NavLink>
            ))
          }
        </div>
      </div>
      <div className="custom-sidebar__bottom">
        <div className="collapse-btn">
          <Button className="collapse-menu" onClick={onChangeSidebarSize} color="primary">
            <img id="collapse-icon" src={props.iconCollapse} alt="Icon collapse" />
            <span id="collapse-text">{props.collapseText}</span>
          </Button>
        </div>
        <div className="avt-user">
          <img id="avatar" src={props.avt} alt="User icon" />
          <p id="username">{props.username}</p>
        </div>
      </div>
    </aside>
  );
};

Sidebar.defaultProps = {
  menu: [
    {
      id: 0,
      name: 'Reports',
      link: '/tab-page',
      icon: iconReport,
    },
    {
      id: 1,
      name: 'Events',
      link: '/events-page',
      icon: iconHeart,
    },
    {
      id: 2,
      name: 'Studies',
      link: '/studies-page',
      icon: iconStudies,
    },
    {
      id: 3,
      name: 'Devices',
      link: '/devices-page',
      icon: iconDevices,
    },
    {
      id: 4,
      name: 'RMA',
      link: '/rma-page',
      icon: iconRMA,
    },
  ],
  avt: iconUser,
  username: 'Fabio Alonso',
  collapseText: 'Collapse',
  iconCollapse,
  className: undefined,
  isLarge: false,
};

Sidebar.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
  })),
  iconCollapse: PropTypes.string,
  avt: PropTypes.string,
  username: PropTypes.string,
  collapseText: PropTypes.string,
  className: PropTypes.string,
  isLarge: PropTypes.bool,
};

export default Sidebar;
