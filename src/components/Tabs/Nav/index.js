import React, { useState, useCallback } from 'react';
import {
  Nav, NavItem, NavLink, TabContent, TabPane, Badge,
} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './styles.scss';

const NavTab = (props) => {
  const [activeTab, setActiveTab] = useState(props.activeDefault);

  const navigateTab = useCallback(
    (tab) => {
      if (tab !== activeTab) {
        setActiveTab(tab);
      }
    },
    [activeTab],
  );

  const renderBadge = () => {
    switch (props.typeBadge) {
      case 'dot-badge':
        return <Badge pill color="danger" className="custom-badge-dot c-red" />;
      case 'num-badge':
        return <Badge pill color="danger" className="custom-badge-num c-red">{props.num}</Badge>;
      case 'text-badge':
        return <Badge pill color="danger" className="custom-badge-text c-red">{props.text}</Badge>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Nav tabs className={classnames('top-nav-tabs', props.isLarge ? 'nav-bar-large' : 'nav-bar-small')}>
        { _.map(props.content, data => (
          <NavItem>
            <NavLink
              className={classnames(
                'noselect',
                activeTab === data.activeNumber ? 'active' : '',
                props.className,
              )}
              onClick={() => {
                navigateTab(data.activeNumber);
              }}
            >
              <span>{data.text}</span>
              {data.showBadge ? renderBadge() : null}
              <div className="line-tab" />
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent
        activeTab={activeTab}
        className="custom-top-tab-content"
      >
        {_.map(props.content, data => (
          <TabPane tabId={data.activeNumber}>
            {data.children}
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

NavTab.defaultProps = {
  typeBadge: undefined,
  num: null,
  text: null,
  content: [
    {
      activeNumber: 1,
      text: 'Ready',
      children: (<div>Ready Content</div>),
      showBadge: true,
    },
    {
      activeNumber: 2,
      text: 'Pending',
      children: (<div>Pending Content</div>),
      showBadge: false,
    },
    {
      activeNumber: 3,
      text: 'Sent',
      children: (<div>Sent Content</div>),
      showBadge: false,
    },
  ],
  activeDefault: 1,
  className: undefined,
  isLarge: false,
};

NavTab.propTypes = {
  className: PropTypes.string,
  typeBadge: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.shape({
    activeNumber: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node,
    showBadge: PropTypes.bool,
  })),
  num: PropTypes.number,
  text: PropTypes.string,
  activeDefault: PropTypes.number,
  isLarge: PropTypes.bool,
};

export default NavTab;
