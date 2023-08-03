import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss';

const Footer = props => (
  <footer id="footer-element" className={classNames('app-footer-elements', props.className)}>
    <p className={props.hideTextLeft ? 'hide-text' : ''}>{props.textLeft}</p>
    <div>{`© ${moment().year()} ${props.textRight}.`}</div>
  </footer>
);

Footer.defaultProps = {
  hideTextLeft: false,
  textLeft: 'ITRVN',
  textRight: 'ITRVN All rights reserved',
  className: undefined,
};

Footer.propTypes = {
  className: PropTypes.string,
  hideTextLeft: PropTypes.bool,
  textLeft: PropTypes.string,
  textRight: PropTypes.string,
};

export default Footer;
