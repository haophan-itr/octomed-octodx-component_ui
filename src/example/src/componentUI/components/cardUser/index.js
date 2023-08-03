import React from 'react';
import { Card, Avatar } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const { Meta } = Card;

const CardUser = props => (
  <div className="custom-card-user">
    <Card>
      <Meta
        className={classnames('card-user', props.className)}
        avatar={<Avatar src={props.img} />}
        title={props.userName}
        description={props.userRole}
      />
    </Card>
  </div>
);

CardUser.defaultProps = {
  className: undefined,
  img: 'https://joeschmoe.io/api/v1/random',
  userName: 'Name',
  userRole: 'Title',
};

CardUser.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  userName: PropTypes.string,
  userRole: PropTypes.string,
};

export default CardUser;
